"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Text, Torus } from "@react-three/drei";
import { Geometry, Base, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { HeroState, CubeFace } from "@/lib/game-types";

// Debug flag - set to true to show rotation angles on cube faces
const DEBUG_SHOW_ROTATIONS = false;

// Memoized materials to prevent color flickering from material recreation
const useCubeMaterials = () => {
  return useMemo(
    () => ({
      // Base cube - GRAY
      frame: new THREE.MeshStandardMaterial({
        color: "#6b7280",
        roughness: 0.4,
        metalness: 0.2,
      }),
      // Gray variations
      grayLight: new THREE.MeshStandardMaterial({
        color: "#9ca3af",
        roughness: 0.4,
        metalness: 0.3,
      }),
      grayDark: new THREE.MeshStandardMaterial({
        color: "#4b5563",
        roughness: 0.5,
      }),
      // Keyhole - brown/amber socket
      keyholeOuter: new THREE.MeshStandardMaterial({
        color: "#78350f",
        roughness: 0.6,
      }),
      keyholeInner: new THREE.MeshStandardMaterial({
        color: "#451a03",
        roughness: 0.8,
      }),
      keyholeDeep: new THREE.MeshStandardMaterial({
        color: "#1c0a00",
        roughness: 0.9,
      }),
      // Weapon slot - blue/steel
      weaponOuter: new THREE.MeshStandardMaterial({
        color: "#334155",
        roughness: 0.5,
        metalness: 0.3,
      }),
      weaponInner: new THREE.MeshStandardMaterial({
        color: "#1e293b",
        roughness: 0.7,
      }),
      weaponDeep: new THREE.MeshStandardMaterial({
        color: "#0f172a",
        roughness: 0.9,
      }),
      // Shield materials
      shieldMain: new THREE.MeshStandardMaterial({
        color: "#f97316",
        roughness: 0.4,
        metalness: 0.2,
      }),
      shieldRidge: new THREE.MeshStandardMaterial({
        color: "#ea580c",
        roughness: 0.5,
        metalness: 0.1,
      }),
      shieldCap: new THREE.MeshStandardMaterial({
        color: "#c2410c",
        roughness: 0.3,
        metalness: 0.3,
      }),
      // Character face materials
      skin: new THREE.MeshStandardMaterial({ color: "#d4a574", roughness: 0.5 }),
      eyes: new THREE.MeshStandardMaterial({ color: "#1e293b", roughness: 0.3 }),
      beard: new THREE.MeshStandardMaterial({ color: "#ea580c", roughness: 0.6 }),
      mustache: new THREE.MeshStandardMaterial({
        color: "#c2410c",
        roughness: 0.6,
      }),
      gold: new THREE.MeshStandardMaterial({
        color: "#fbbf24",
        roughness: 0.3,
        metalness: 0.5,
      }),
      goldDark: new THREE.MeshStandardMaterial({
        color: "#d97706",
        roughness: 0.3,
        metalness: 0.6,
      }),
      goldBright: new THREE.MeshStandardMaterial({
        color: "#fbbf24",
        metalness: 0.85,
        roughness: 0.2,
      }),
      // Bag materials
      bagMain: new THREE.MeshStandardMaterial({
        color: "#78350f",
        roughness: 0.7,
      }),
      bagLight: new THREE.MeshStandardMaterial({
        color: "#92400e",
        roughness: 0.6,
      }),
      bagDark: new THREE.MeshStandardMaterial({
        color: "#451a03",
        roughness: 0.6,
      }),
      bagBuckle: new THREE.MeshStandardMaterial({
        color: "#fbbf24",
        metalness: 0.6,
        roughness: 0.3,
      }),
      // Head/cage materials
      white: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3 }),
      tan: new THREE.MeshStandardMaterial({ color: "#d4a574", roughness: 0.5 }),
      bars: new THREE.MeshStandardMaterial({
        color: "#4b5563",
        roughness: 0.4,
        metalness: 0.3,
      }),
      // Sword token materials
      swordRim: new THREE.MeshStandardMaterial({
        color: "#9ca3af",
        roughness: 0.5,
        metalness: 0.2,
      }),
      swordPink: new THREE.MeshStandardMaterial({
        color: "#fb7185",
        roughness: 0.3,
      }),
      swordSymbol: new THREE.MeshStandardMaterial({
        color: "#fce7f3",
        roughness: 0.3,
      }),
    }),
    []
  );
};

interface HeroCube3DProps {
  hero: HeroState;
  isAnimating: boolean;
  animationDirection: string;
  targetPosition: { x: number; y: number } | null;
  isStuck?: boolean;
}

// Map face values to positions on the cube
const FACE_POSITIONS: Record<
  string,
  { position: [number, number, number]; rotation: [number, number, number] }
> = {
  front: { position: [0, 0, 0.5], rotation: [0, 0, 0] },
  back: { position: [0, 0, -0.5], rotation: [0, Math.PI, 0] },
  right: { position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
  left: { position: [-0.5, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  top: { position: [0, 0.5, 0], rotation: [-Math.PI / 2, 0, 0] },
  bottom: { position: [0, -0.5, 0], rotation: [Math.PI / 2, 0, 0] },
};

// Shield Face - Orange circular disc with ridges (fits through square + cylinder hole)
function ShieldFace({ materials }: { materials: ReturnType<typeof useCubeMaterials> }) {
  const shieldRadius = 0.35; // Match cylinder hole size
  const shieldThickness = 0.22; // Square hole (0.12) + cylinder hole (0.10) depth

  // Calculate ridge widths to fit within circle at each y position
  // Width at y = 2 * sqrt(r² - y²)
  const getRidgeWidth = (y: number) => 2 * Math.sqrt(shieldRadius * shieldRadius - y * y) - 0.02;

  const ridgePositions = [-0.2, -0.1, 0, 0.1, 0.2];

  return (
    <group position={[0, 0, 0.01]}>
      {/* Main circular disc */}
      <Cylinder
        args={[shieldRadius, shieldRadius, shieldThickness, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        material={materials.shieldMain}
      />
      {/* Horizontal ridges - width calculated to fit within circle */}
      {ridgePositions.map((y, i) => (
        <Box
          key={i}
          args={[getRidgeWidth(y), 0.04, shieldThickness + 0.02]}
          position={[0, y, 0]}
          material={materials.shieldRidge}
        />
      ))}
      {/* Center cap */}
      <Cylinder
        args={[0.08, 0.08, shieldThickness + 0.04, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        material={materials.shieldCap}
      />
    </group>
  );
}

// KeyHole Face - Just the key filling when picked up (hole is carved via CSG)
function KeyHoleFace({
  hasKey = false,
  materials,
}: {
  hasKey?: boolean;
  materials: ReturnType<typeof useCubeMaterials>;
}) {
  const holeRadius = 0.35; // Match cylinder hole radius and key hemisphere size
  const discThickness = 0.08; // Thicker disc for visibility

  // Only render when hero has key - ornate golden disc fills the hole flush with surface
  if (!hasKey) return null;

  return (
    <group position={[0, 0, 0.01]}>
      {/* Base golden disc - thicker */}
      <Cylinder
        args={[holeRadius, holeRadius, discThickness, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.goldBright}
      />

      {/* Outer decorative ring */}
      <Cylinder
        args={[holeRadius - 0.02, holeRadius - 0.05, discThickness + 0.02, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.goldDark}
      />

      {/* Inner decorative ring */}
      <Cylinder
        args={[0.22, 0.19, discThickness + 0.03, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.goldDark}
      />

      {/* Center raised circle */}
      <Cylinder
        args={[0.1, 0.1, discThickness + 0.04, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.goldBright}
      />

      {/* Ornate curved pattern - 4 main curves radiating from center */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <group key={i} rotation={[0, 0, angle]}>
          {/* Main radial bar */}
          <Box
            args={[0.04, 0.18, discThickness * 0.6]}
            position={[0, 0.24, discThickness / 2 + 0.02]}
            material={materials.goldDark}
          />
          {/* Curved end piece - left */}
          <Box
            args={[0.08, 0.04, discThickness * 0.5]}
            position={[-0.05, 0.32, discThickness / 2 + 0.02]}
            material={materials.goldDark}
          />
          {/* Curved end piece - right */}
          <Box
            args={[0.08, 0.04, discThickness * 0.5]}
            position={[0.05, 0.32, discThickness / 2 + 0.02]}
            material={materials.goldDark}
          />
        </group>
      ))}

      {/* Diagonal decorative elements between main curves */}
      {[Math.PI / 4, (Math.PI * 3) / 4, (Math.PI * 5) / 4, (Math.PI * 7) / 4].map((angle, i) => (
        <group key={i} rotation={[0, 0, angle]}>
          {/* Small radial element */}
          <Cylinder
            args={[0.025, 0.025, discThickness * 0.5, 8]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0.28, discThickness / 2 + 0.02]}
            material={materials.goldBright}
          />
        </group>
      ))}
    </group>
  );
}

// Face/Front Face - Viking hero - elements fit within square hole (0.84 max)
// Thickness matches square hole depth (0.12)
function CharacterFace({ materials }: { materials: ReturnType<typeof useCubeMaterials> }) {
  const baseThickness = 0.12; // Match square hole depth

  return (
    <group position={[0, 0, 0.01]}>
      {/* Base layer - skin and beard */}
      {/* Skin area around nose */}
      <Box
        args={[0.34, 0.14, baseThickness * 0.4]}
        position={[0, -0.05, baseThickness * 0.2]}
        material={materials.skin}
      />
      {/* Beard - large orange */}
      <Box
        args={[0.58, 0.28, baseThickness * 0.4]}
        position={[0, -0.3, baseThickness * 0.2]}
        material={materials.beard}
      />
      {/* Beard sides */}
      <Box
        args={[0.14, 0.34, baseThickness * 0.4]}
        position={[-0.34, -0.19, baseThickness * 0.2]}
        material={materials.beard}
      />
      <Box
        args={[0.14, 0.34, baseThickness * 0.4]}
        position={[0.34, -0.19, baseThickness * 0.2]}
        material={materials.beard}
      />

      {/* Helmet base */}
      <Box
        args={[0.82, 0.28, baseThickness * 0.5]}
        position={[0, 0.31, baseThickness * 0.35]}
        material={materials.grayLight}
      />

      {/* Helmet details */}
      {/* Helmet visor/brow */}
      <Box
        args={[0.68, 0.07, baseThickness * 0.4]}
        position={[0, 0.17, baseThickness * 0.5]}
        material={materials.grayDark}
      />
      {/* Helmet nose guard */}
      <Box
        args={[0.07, 0.24, baseThickness * 0.5]}
        position={[0, 0.05, baseThickness * 0.55]}
        material={materials.grayLight}
      />

      {/* Eyes and mustache */}
      <Box
        args={[0.12, 0.06, baseThickness * 0.3]}
        position={[-0.17, 0.07, baseThickness * 0.65]}
        material={materials.eyes}
      />
      <Box
        args={[0.12, 0.06, baseThickness * 0.3]}
        position={[0.17, 0.07, baseThickness * 0.65]}
        material={materials.eyes}
      />
      <Box
        args={[0.38, 0.07, baseThickness * 0.4]}
        position={[0, -0.12, baseThickness * 0.6]}
        material={materials.mustache}
      />

      {/* Belt */}
      <Box
        args={[0.48, 0.06, baseThickness * 0.35]}
        position={[0, -0.14, baseThickness * 0.75]}
        material={materials.gold}
      />

      {/* Belt buckle */}
      <Box
        args={[0.1, 0.1, baseThickness * 0.3]}
        position={[0, -0.14, baseThickness * 0.9]}
        material={materials.goldDark}
      />
    </group>
  );
}

// Weapon Face - Sword filling when picked up (hole is carved via CSG)
function WeaponFace({
  hasSword = false,
  materials,
}: {
  hasSword?: boolean;
  materials: ReturnType<typeof useCubeMaterials>;
}) {
  const holeRadius = 0.32; // Match cylinder hole size on board
  const discThickness = 0.08; // Thicker disc for visibility

  // Only render when hero has weapon - sword fills the hole flush with surface
  if (!hasSword) return null;

  return (
    <group position={[0, 0, 0.01]}>
      {/* Steel disc background - thicker */}
      <Cylinder
        args={[holeRadius, holeRadius, discThickness, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.grayLight}
      />
      {/* Inner darker ring */}
      <Cylinder
        args={[holeRadius - 0.03, holeRadius - 0.06, discThickness + 0.01, 32]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, discThickness / 2]}
        material={materials.grayDark}
      />

      {/* SWORD DESIGN - Long narrow blade, clearly a sword not an axe */}
      {/* Main sword blade - long, narrow, tapering slightly */}
      <Box args={[0.04, 0.38, 0.05]} position={[0, 0.05, discThickness / 2 + 0.025]}>
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </Box>
      {/* Blade fuller/groove - decorative line down the center */}
      <Box args={[0.02, 0.3, 0.01]} position={[0, 0.08, discThickness / 2 + 0.05]}>
        <meshStandardMaterial color="#a0a0a0" metalness={0.7} roughness={0.3} />
      </Box>
      {/* Blade edge highlight - sharp edge */}
      <Box args={[0.042, 0.36, 0.01]} position={[0, 0.06, discThickness / 2 + 0.055]}>
        <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
      </Box>
      {/* Sword tip - pointed tip, clearly not an axe blade */}
      <mesh position={[0, 0.24, discThickness / 2 + 0.025]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.03, 0.08, 4]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Crossguard - horizontal guard perpendicular to blade (sword characteristic) */}
      <Box args={[0.2, 0.04, 0.06]} position={[0, -0.1, discThickness / 2 + 0.025]}>
        <meshStandardMaterial color="#78350f" roughness={0.5} />
      </Box>
      {/* Crossguard quillons - curved ends (sword characteristic) */}
      <Cylinder
        args={[0.03, 0.03, 0.06, 8]}
        rotation={[0, 0, Math.PI / 2]}
        position={[-0.11, -0.1, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.3} />
      </Cylinder>
      <Cylinder
        args={[0.03, 0.03, 0.06, 8]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0.11, -0.1, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.3} />
      </Cylinder>

      {/* Sword handle/grip - cylindrical grip */}
      <Cylinder
        args={[0.035, 0.035, 0.1, 8]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.18, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#451a03" roughness={0.6} />
      </Cylinder>
      {/* Handle wrap detail - leather wrapping */}
      <Torus
        args={[0.035, 0.008, 8, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.15, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#78350f" roughness={0.5} />
      </Torus>
      <Torus
        args={[0.035, 0.008, 8, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.21, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#78350f" roughness={0.5} />
      </Torus>

      {/* Pommel - counterweight at end of handle (sword characteristic) */}
      <Cylinder
        args={[0.04, 0.04, 0.05, 8]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.25, discThickness / 2 + 0.025]}
      >
        <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.3} />
      </Cylinder>
    </group>
  );
}

// Back Face - Bag/backpack - SQUARE shape, fits within square hole (0.84 max)
// Thickness matches square hole depth (0.12)
function BackFace({ materials }: { materials: ReturnType<typeof useCubeMaterials> }) {
  const baseThickness = 0.12; // Match square hole depth
  const bagSize = 0.7; // Square bag

  return (
    <group position={[0, 0, 0.01]}>
      {/* Bag main body - SQUARE */}
      <Box
        args={[bagSize, bagSize, baseThickness * 0.5]}
        position={[0, 0, baseThickness * 0.25]}
        material={materials.bagMain}
      />

      {/* Bag top flap */}
      <Box
        args={[bagSize + 0.04, 0.18, baseThickness * 0.4]}
        position={[0, 0.3, baseThickness * 0.4]}
        material={materials.bagLight}
      />

      {/* Bag straps */}
      <Box
        args={[0.08, 0.5, baseThickness * 0.4]}
        position={[-0.22, 0.08, baseThickness * 0.5]}
        material={materials.bagDark}
      />
      <Box
        args={[0.08, 0.5, baseThickness * 0.4]}
        position={[0.22, 0.08, baseThickness * 0.5]}
        material={materials.bagDark}
      />

      {/* Bag buckle/clasp */}
      <Box
        args={[0.14, 0.1, baseThickness * 0.35]}
        position={[0, 0.2, baseThickness * 0.6]}
        material={materials.bagBuckle}
      />

      {/* Bag pocket - also square */}
      <Box
        args={[0.36, 0.36, baseThickness * 0.3]}
        position={[0, -0.1, baseThickness * 0.55]}
        material={materials.bagLight}
      />
    </group>
  );
}

// Head Face - Cage/bars design with white circles - fit within square hole (0.84 max)
// Thickness matches square hole depth (0.12)
function HeadFace({ materials }: { materials: ReturnType<typeof useCubeMaterials> }) {
  const baseThickness = 0.12; // Match square hole depth

  return (
    <group position={[0, 0, 0.01]}>
      {/* Tan background plate */}
      <Box
        args={[0.84, 0.84, baseThickness * 0.4]}
        position={[0, 0, baseThickness * 0.2]}
        material={materials.tan}
      />

      {/* Horizontal bars */}
      <Box
        args={[0.82, 0.07, baseThickness * 0.6]}
        position={[0, 0.26, baseThickness * 0.4]}
        material={materials.bars}
      />
      <Box
        args={[0.82, 0.07, baseThickness * 0.6]}
        position={[0, 0, baseThickness * 0.4]}
        material={materials.bars}
      />
      <Box
        args={[0.82, 0.07, baseThickness * 0.6]}
        position={[0, -0.26, baseThickness * 0.4]}
        material={materials.bars}
      />

      {/* Vertical bars */}
      <Box
        args={[0.07, 0.82, baseThickness * 0.6]}
        position={[-0.26, 0, baseThickness * 0.4]}
        material={materials.bars}
      />
      <Box
        args={[0.07, 0.82, baseThickness * 0.6]}
        position={[0, 0, baseThickness * 0.4]}
        material={materials.bars}
      />
      <Box
        args={[0.07, 0.82, baseThickness * 0.6]}
        position={[0.26, 0, baseThickness * 0.4]}
        material={materials.bars}
      />

      {/* White circles in the grid openings */}
      <Cylinder
        args={[0.08, 0.08, baseThickness * 0.5, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-0.13, 0.13, baseThickness * 0.55]}
        material={materials.white}
      />
      <Cylinder
        args={[0.08, 0.08, baseThickness * 0.5, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0.13, 0.13, baseThickness * 0.55]}
        material={materials.white}
      />
      <Cylinder
        args={[0.08, 0.08, baseThickness * 0.5, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-0.13, -0.13, baseThickness * 0.55]}
        material={materials.white}
      />
      <Cylinder
        args={[0.08, 0.08, baseThickness * 0.5, 16]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0.13, -0.13, baseThickness * 0.55]}
        material={materials.white}
      />
    </group>
  );
}

// Render the appropriate 3D face based on CubeFace type
function Face3D({
  face,
  hasSword = false,
  hasKey = false,
  materials,
}: {
  face: CubeFace;
  hasSword?: boolean;
  hasKey?: boolean;
  materials: ReturnType<typeof useCubeMaterials>;
}) {
  switch (face) {
    case CubeFace.SHIELD:
      return <ShieldFace materials={materials} />;
    case CubeFace.KEY_HOLE:
      return <KeyHoleFace hasKey={hasKey} materials={materials} />;
    case CubeFace.FACE:
      return <CharacterFace materials={materials} />;
    case CubeFace.WEAPON:
      return <WeaponFace hasSword={hasSword} materials={materials} />;
    case CubeFace.BACK:
      return <BackFace materials={materials} />;
    case CubeFace.HEAD:
      return <HeadFace materials={materials} />;
    default:
      return null;
  }
}

// Debug arrow showing "up" direction on face (points up at 0°, rotates with content)
function DebugUpArrow() {
  if (!DEBUG_SHOW_ROTATIONS) return null;

  return (
    <group position={[0, 0.3, 0.02]}>
      {/* Arrow body */}
      <Box args={[0.04, 0.15, 0.02]} position={[0, -0.05, 0]}>
        <meshBasicMaterial color="#00ff00" />
      </Box>
      {/* Arrow head */}
      <mesh position={[0, 0.05, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.06, 0.08, 4]} />
        <meshBasicMaterial color="#00ff00" />
      </mesh>
    </group>
  );
}

// Debug text showing rotation angle on face
function DebugRotationText({ rotation, facePosition }: { rotation: number; facePosition: string }) {
  if (!DEBUG_SHOW_ROTATIONS) return null;

  // Position text based on face - offset slightly outside cube
  const getTextOffset = (): [number, number, number] => {
    switch (facePosition) {
      case "top":
        return [0, 0.02, 0];
      case "bottom":
        return [0, -0.02, 0];
      default:
        return [0, 0, 0.02];
    }
  };

  return (
    <Text
      position={getTextOffset()}
      fontSize={0.15}
      color="#ff0000"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#000000"
    >
      {`${rotation}°`}
    </Text>
  );
}

function CubeFacePanel({
  face,
  facePosition,
  hasSword = false,
  hasKey = false,
  contentRotation = 0,
  materials,
}: {
  face: CubeFace;
  facePosition: keyof typeof FACE_POSITIONS;
  hasSword?: boolean;
  hasKey?: boolean;
  contentRotation?: number; // Rotation in degrees (0, 90, 180, 270)
  materials: ReturnType<typeof useCubeMaterials>;
}) {
  const { position, rotation } = FACE_POSITIONS[facePosition];
  // Convert content rotation from degrees to radians (rotation around Z axis in local space)
  const contentRotationRad = (contentRotation * Math.PI) / 180;

  return (
    <group position={position} rotation={rotation}>
      {/* Debug text showing rotation angle (outside rotation group so it stays readable) */}
      <DebugRotationText rotation={contentRotation} facePosition={facePosition} />
      {/* Apply content rotation around the face's normal (Z axis in local space) */}
      <group rotation={[0, 0, contentRotationRad]}>
        <Face3D face={face} hasSword={hasSword} hasKey={hasKey} materials={materials} />
        {/* Debug arrow inside rotation group - rotates with content */}
        <DebugUpArrow />
      </group>
    </group>
  );
}

export function HeroCube3D({
  hero,
  isAnimating,
  animationDirection,
  targetPosition,
  isStuck = false,
}: HeroCube3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Group>(null);

  // Use refs instead of state to prevent re-renders during animation
  const animProgressRef = useRef(0);
  const prevPositionRef = useRef({ x: hero.position.x, y: hero.position.y });
  const wasAnimatingRef = useRef(false);
  const stuckProgressRef = useRef(0);
  const wasStuckRef = useRef(false);

  // Track previous faces to detect when they change
  const prevFacesRef = useRef({
    top: hero.topFace,
    front: hero.frontFace,
    right: hero.rightFace,
  });

  // Memoized materials to prevent color flickering
  const materials = useCubeMaterials();

  // Calculate rotation adjustments for faces during animation
  // The bottom face needs special handling because it gets rotated when moving to a new position
  const getAdjustedRotation = (facePosition: string, baseRotation: number): number => {
    if (!isAnimating) return baseRotation;

    // Only adjust the bottom face during roll animations
    if (facePosition !== "bottom") return baseRotation;

    // Apply the rotation adjustment that will be applied by game-logic.ts
    // This prevents the 180° flicker when state updates
    switch (animationDirection) {
      case "up":
        // Bottom moves to front, which gets +180° in rollUp
        return (baseRotation + 180) % 360;
      case "down":
        // Bottom moves to back, which gets +180° in rollDown
        return (baseRotation + 180) % 360;
      case "left":
        // Bottom moves to right, which gets -90° in rollLeft
        return (baseRotation + 180) % 360;
      case "right":
        // Bottom moves to left, which gets +90° in rollRight
        return (baseRotation + 180) % 360;
      default:
        return baseRotation;
    }
  };

  // Current position from hero state (used when not animating)
  const heroX = hero.position.x;
  const heroZ = hero.position.y;

  // Animation for rolling - using refs to avoid state updates
  useFrame((_, delta) => {
    if (!groupRef.current || !cubeRef.current) return;

    // Detect if faces changed - immediately snap rotation to sync with new face values
    const facesChanged =
      hero.topFace !== prevFacesRef.current.top ||
      hero.frontFace !== prevFacesRef.current.front ||
      hero.rightFace !== prevFacesRef.current.right;

    if (facesChanged) {
      // Faces updated, immediately snap to final state
      cubeRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.set(heroX, 0.5, heroZ);
      prevFacesRef.current = {
        top: hero.topFace,
        front: hero.frontFace,
        right: hero.rightFace,
      };
      wasAnimatingRef.current = false;
      animProgressRef.current = 0;
      prevPositionRef.current = { x: heroX, y: heroZ };
      return;
    }

    // Handle stuck animation (shake/wiggle when move is blocked)
    if (isStuck && !wasStuckRef.current) {
      wasStuckRef.current = true;
      stuckProgressRef.current = 0;
    }

    if (isStuck) {
      if (stuckProgressRef.current < 1) {
        stuckProgressRef.current = Math.min(stuckProgressRef.current + delta * 10, 1);
      }

      // More pronounced shake animation - faster oscillation with stronger intensity
      const shakeProgress = stuckProgressRef.current;
      const shakeIntensity =
        Math.sin(shakeProgress * Math.PI * 6) * (1 - shakeProgress * shakeProgress);
      const shakeAmount = 0.15; // Increased from 0.08

      // Determine shake direction based on animation direction
      switch (animationDirection) {
        case "up":
          cubeRef.current.rotation.x = shakeIntensity * shakeAmount;
          break;
        case "down":
          cubeRef.current.rotation.x = -shakeIntensity * shakeAmount;
          break;
        case "left":
          cubeRef.current.rotation.z = -shakeIntensity * shakeAmount;
          break;
        case "right":
          cubeRef.current.rotation.z = shakeIntensity * shakeAmount;
          break;
        case "rotate-cw":
        case "rotate-ccw":
        case "rotate-180":
          // For rotation attempts, shake on Y axis with more intensity
          cubeRef.current.rotation.y = shakeIntensity * shakeAmount * 0.8;
          break;
      }

      // More pronounced bounce
      groupRef.current.position.y = 0.5 + Math.abs(shakeIntensity) * 0.12;

      return;
    } else if (!isStuck && wasStuckRef.current) {
      // Reset after stuck animation
      cubeRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.y = 0.5;
      wasStuckRef.current = false;
      stuckProgressRef.current = 0;
    }

    // Detect animation start
    if (isAnimating && !wasAnimatingRef.current) {
      wasAnimatingRef.current = true;
      animProgressRef.current = 0;
      // Store current position as the start of animation
      prevPositionRef.current = { x: heroX, y: heroZ };
    }

    if (isAnimating) {
      if (animProgressRef.current < 1) {
        animProgressRef.current = Math.min(animProgressRef.current + delta * 5, 1);
      }

      // Ease function for smooth animation
      const eased = 1 - Math.pow(1 - animProgressRef.current, 3);

      // Calculate position interpolation from previous position to target position (for roll animations)
      if (targetPosition) {
        const currentX =
          prevPositionRef.current.x + (targetPosition.x - prevPositionRef.current.x) * eased;
        const currentZ =
          prevPositionRef.current.y + (targetPosition.y - prevPositionRef.current.y) * eased;

        groupRef.current.position.x = currentX;
        groupRef.current.position.z = currentZ;
      }

      // Roll rotation based on direction
      const rollAngle = (Math.PI / 2) * eased;

      switch (animationDirection) {
        case "up":
          cubeRef.current.rotation.x = -rollAngle;
          groupRef.current.position.y = 0.5 + Math.sin(eased * Math.PI) * 0.1;
          break;
        case "down":
          cubeRef.current.rotation.x = rollAngle;
          groupRef.current.position.y = 0.5 + Math.sin(eased * Math.PI) * 0.1;
          break;
        case "left":
          cubeRef.current.rotation.z = rollAngle;
          groupRef.current.position.y = 0.5 + Math.sin(eased * Math.PI) * 0.1;
          break;
        case "right":
          cubeRef.current.rotation.z = -rollAngle;
          groupRef.current.position.y = 0.5 + Math.sin(eased * Math.PI) * 0.1;
          break;
        case "rotate-cw":
          cubeRef.current.rotation.y = -rollAngle;
          break;
        case "rotate-ccw":
          cubeRef.current.rotation.y = rollAngle;
          break;
        case "rotate-180":
          // Turnaround: rotate 180° (PI radians)
          cubeRef.current.rotation.y = Math.PI * eased;
          break;
      }
    } else if (!isAnimating) {
      // Reset rotation when animation completes - faces have now updated
      cubeRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.set(heroX, 0.5, heroZ);

      if (wasAnimatingRef.current) {
        wasAnimatingRef.current = false;
        animProgressRef.current = 0;
        prevPositionRef.current = { x: heroX, y: heroZ };
      }
    }
  });

  // Set initial position
  useEffect(() => {
    if (groupRef.current && !isAnimating) {
      groupRef.current.position.set(heroX, 0.5, heroZ);
      prevPositionRef.current = { x: heroX, y: heroZ };
    }
  }, []);

  // Find positions for keyhole and weapon faces for CSG subtraction
  const holePositions = useMemo(() => {
    const keyholeRadius = 0.35; // Match cylinder hole radius and key hemisphere size
    const weaponRadius = 0.32; // Match cylinder hole size on board
    const weaponDepth = 0.08; // Coin depth for sword

    // Face positions with rotation for cylinder (weapon uses cylinder, keyhole uses sphere)
    const faces = [
      {
        face: hero.frontFace,
        pos: [0, 0, 0.5] as [number, number, number],
        rot: [Math.PI / 2, 0, 0] as [number, number, number],
      },
      {
        face: hero.backFace,
        pos: [0, 0, -0.5] as [number, number, number],
        rot: [Math.PI / 2, 0, 0] as [number, number, number],
      },
      {
        face: hero.rightFace,
        pos: [0.5, 0, 0] as [number, number, number],
        rot: [0, 0, Math.PI / 2] as [number, number, number],
      },
      {
        face: hero.leftFace,
        pos: [-0.5, 0, 0] as [number, number, number],
        rot: [0, 0, Math.PI / 2] as [number, number, number],
      },
      {
        face: hero.topFace,
        pos: [0, 0.5, 0] as [number, number, number],
        rot: [0, 0, 0] as [number, number, number],
      },
      {
        face: hero.bottomFace,
        pos: [0, -0.5, 0] as [number, number, number],
        rot: [0, 0, 0] as [number, number, number],
      },
    ];

    const keyholeFace = faces.find((f) => f.face === CubeFace.KEY_HOLE);
    const weaponFace = faces.find((f) => f.face === CubeFace.WEAPON);

    return {
      keyhole: keyholeFace ? { position: keyholeFace.pos, radius: keyholeRadius } : null,
      weapon: weaponFace
        ? {
            position: weaponFace.pos,
            radius: weaponRadius,
            depth: weaponDepth,
            rotation: weaponFace.rot,
          }
        : null,
    };
  }, [hero.frontFace, hero.backFace, hero.rightFace, hero.leftFace, hero.topFace, hero.bottomFace]);

  // Show indentations only when items not picked up
  const showKeyholeIndentation = holePositions.keyhole && !hero.hasKey;
  const showWeaponIndentation = holePositions.weapon && !hero.hasSword;

  return (
    <group ref={groupRef} position={[heroX, 0.5, heroZ]}>
      <group ref={cubeRef}>
        {/* Base cube with CSG - subtract hemisphere for keyhole, cylinder for weapon */}
        <mesh>
          <Geometry>
            <Base>
              <boxGeometry args={[1, 1, 1]} />
            </Base>
            {showKeyholeIndentation && holePositions.keyhole && (
              <Subtraction position={holePositions.keyhole.position}>
                <sphereGeometry args={[holePositions.keyhole.radius, 32, 32]} />
              </Subtraction>
            )}
            {showWeaponIndentation && holePositions.weapon && (
              <Subtraction
                position={holePositions.weapon.position}
                rotation={holePositions.weapon.rotation}
              >
                <cylinderGeometry
                  args={[
                    holePositions.weapon.radius,
                    holePositions.weapon.radius,
                    holePositions.weapon.depth,
                    32,
                  ]}
                />
              </Subtraction>
            )}
          </Geometry>
          <meshStandardMaterial color="#6b7280" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Face panels - pass hasSword, hasKey, and content rotation for each face */}
        <CubeFacePanel
          face={hero.frontFace}
          facePosition="front"
          hasSword={hero.frontFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.frontFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("front", hero.faceRotations.front)}
          materials={materials}
        />
        <CubeFacePanel
          face={hero.backFace}
          facePosition="back"
          hasSword={hero.backFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.backFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("back", hero.faceRotations.back)}
          materials={materials}
        />
        <CubeFacePanel
          face={hero.rightFace}
          facePosition="right"
          hasSword={hero.rightFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.rightFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("right", hero.faceRotations.right)}
          materials={materials}
        />
        <CubeFacePanel
          face={hero.leftFace}
          facePosition="left"
          hasSword={hero.leftFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.leftFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("left", hero.faceRotations.left)}
          materials={materials}
        />
        <CubeFacePanel
          face={hero.topFace}
          facePosition="top"
          hasSword={hero.topFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.topFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("top", hero.faceRotations.top)}
          materials={materials}
        />
        <CubeFacePanel
          face={hero.bottomFace}
          facePosition="bottom"
          hasSword={hero.bottomFace === CubeFace.WEAPON && hero.hasSword}
          hasKey={hero.bottomFace === CubeFace.KEY_HOLE && hero.hasKey}
          contentRotation={getAdjustedRotation("bottom", hero.faceRotations.bottom)}
          materials={materials}
        />
      </group>
    </group>
  );
}
