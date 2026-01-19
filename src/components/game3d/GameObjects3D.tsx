"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Box, Torus, Sphere, Octahedron } from "@react-three/drei";
import * as THREE from "three";

interface Object3DProps {
  position: [number, number, number];
}

// Key - Golden hemisphere sitting inside the cylinder hole
// The peg at the bottom fits in the cylinder hole, hemisphere sits at square hole level
export function Key3D({ position }: Object3DProps) {
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom
  const hemisphereRadius = 0.35; // Match cylinder hole radius so it fits snugly

  return (
    <group position={position}>
      {/* Peg that fits into the cylinder hole */}
      <Cylinder
        args={[0.28, 0.3, cylinderHoleDepth, 24]}
        position={[0, baseY - cylinderHoleDepth / 2, 0]}
      >
        <meshStandardMaterial color="#b45309" metalness={0.7} roughness={0.3} />
      </Cylinder>

      {/* Golden hemisphere - sitting at the square hole bottom level */}
      <Sphere
        args={[hemisphereRadius, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]}
        position={[0, baseY, 0]}
      >
        <meshStandardMaterial color="#fbbf24" metalness={0.85} roughness={0.2} />
      </Sphere>

      {/* Decorative pattern on top */}
      <Cylinder args={[0.12, 0.12, 0.02, 16]} position={[0, baseY + 0.28, 0]}>
        <meshStandardMaterial color="#b45309" metalness={0.7} roughness={0.3} />
      </Cylinder>

      {/* Top decorative ring */}
      <Torus
        args={[0.08, 0.02, 12, 24]}
        position={[0, baseY + 0.36, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#fcd34d" metalness={0.9} roughness={0.15} />
      </Torus>
    </group>
  );
}

// Crystal - Blue crystal cluster with peg fitting in cylinder hole
// Sized to visually fit in the keyhole
export function Crystal3D({ position }: Object3DProps) {
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom

  const crystalMaterial = (
    <meshStandardMaterial
      color="#67e8f9"
      transparent
      opacity={0.85}
      roughness={0.1}
      metalness={0.3}
    />
  );

  return (
    <group position={position}>
      {/* Peg that fits into the cylinder hole - sized like sword disc */}
      <Cylinder
        args={[0.31, 0.32, cylinderHoleDepth, 24]}
        position={[0, baseY - cylinderHoleDepth / 2, 0]}
      >
        <meshStandardMaterial color="#0e7490" roughness={0.5} metalness={0.2} />
      </Cylinder>

      {/* Crystal cluster sitting at the square hole bottom level */}
      {/* Main center crystal - sized to fit in keyhole visually */}
      <Octahedron args={[0.22]} position={[0, baseY + 0.18, 0]} rotation={[0.1, 0.3, 0.1]}>
        {crystalMaterial}
      </Octahedron>
      {/* Surrounding crystals */}
      <Octahedron args={[0.15]} position={[-0.15, baseY + 0.1, 0.11]} rotation={[0.3, 0.5, 0.2]}>
        {crystalMaterial}
      </Octahedron>
      <Octahedron args={[0.15]} position={[0.15, baseY + 0.1, 0.08]} rotation={[-0.2, -0.4, 0.3]}>
        {crystalMaterial}
      </Octahedron>
      <Octahedron args={[0.12]} position={[0.08, baseY + 0.08, -0.15]} rotation={[0.4, 0.1, -0.2]}>
        {crystalMaterial}
      </Octahedron>
      <Octahedron args={[0.12]} position={[-0.12, baseY + 0.08, -0.11]} rotation={[-0.1, 0.6, 0.1]}>
        {crystalMaterial}
      </Octahedron>
    </group>
  );
}

// Pillar - White Greek-style column with peg fitting in cylinder hole
export function Pillar3D({ position }: Object3DProps) {
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom

  return (
    <group position={position}>
      {/* Peg that fits into the cylinder hole */}
      <Cylinder
        args={[0.28, 0.3, cylinderHoleDepth, 24]}
        position={[0, baseY - cylinderHoleDepth / 2, 0]}
      >
        <meshStandardMaterial color="#9ca3af" roughness={0.6} metalness={0.1} />
      </Cylinder>

      {/* Base - sits at square hole level */}
      <Cylinder args={[0.32, 0.35, 0.1, 16]} position={[0, baseY + 0.05, 0]}>
        <meshStandardMaterial color="#e5e7eb" roughness={0.6} metalness={0.1} />
      </Cylinder>
      {/* Main pillar shaft with flutes */}
      <Cylinder args={[0.22, 0.26, 0.9, 12]} position={[0, baseY + 0.55, 0]}>
        <meshStandardMaterial color="#f3f4f6" roughness={0.5} metalness={0.1} />
      </Cylinder>
      {/* Column rings */}
      <Cylinder args={[0.24, 0.24, 0.06, 16]} position={[0, baseY + 0.2, 0]}>
        <meshStandardMaterial color="#d1d5db" roughness={0.5} />
      </Cylinder>
      <Cylinder args={[0.23, 0.23, 0.06, 16]} position={[0, baseY + 0.5, 0]}>
        <meshStandardMaterial color="#d1d5db" roughness={0.5} />
      </Cylinder>
      <Cylinder args={[0.22, 0.22, 0.06, 16]} position={[0, baseY + 0.8, 0]}>
        <meshStandardMaterial color="#d1d5db" roughness={0.5} />
      </Cylinder>
      {/* Top cap (capital) */}
      <Cylinder args={[0.32, 0.22, 0.12, 16]} position={[0, baseY + 1.06, 0]}>
        <meshStandardMaterial color="#e5e7eb" roughness={0.5} metalness={0.1} />
      </Cylinder>
      {/* Top plate */}
      <Box args={[0.5, 0.08, 0.5]} position={[0, baseY + 1.16, 0]}>
        <meshStandardMaterial color="#d1d5db" roughness={0.6} />
      </Box>
    </group>
  );
}

// Box - Wooden crate that fills the entire square hole
export function Box3D({ position }: Object3DProps) {
  const squareHoleSize = 0.84; // Slightly smaller than hole (0.88) to fit inside
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const totalDepth = squareHoleDepth + cylinderHoleDepth;
  const boxHeight = 0.85;
  const baseY = -totalDepth + 0.02; // Bottom of cylinder hole

  return (
    <group position={position}>
      {/* Main crate - fits snugly in the square hole */}
      <Box
        args={[squareHoleSize, boxHeight + totalDepth, squareHoleSize]}
        position={[0, baseY + (boxHeight + totalDepth) / 2, 0]}
      >
        <meshStandardMaterial color="#b45309" roughness={0.8} metalness={0.1} />
      </Box>
      {/* Crate straps - horizontal */}
      <Box
        args={[squareHoleSize + 0.04, 0.08, squareHoleSize + 0.04]}
        position={[0, baseY + totalDepth + 0.2, 0]}
      >
        <meshStandardMaterial
          color="#92400e"
          roughness={0.7}
          metalness={0.2}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </Box>
      <Box
        args={[squareHoleSize + 0.04, 0.08, squareHoleSize + 0.04]}
        position={[0, baseY + totalDepth + 0.55, 0]}
      >
        <meshStandardMaterial
          color="#92400e"
          roughness={0.7}
          metalness={0.2}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </Box>
      {/* Vertical straps */}
      <Box
        args={[0.08, boxHeight, squareHoleSize + 0.04]}
        position={[0, baseY + totalDepth + boxHeight / 2, 0]}
      >
        <meshStandardMaterial
          color="#92400e"
          roughness={0.7}
          metalness={0.2}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </Box>
      <Box
        args={[squareHoleSize + 0.04, boxHeight, 0.08]}
        position={[0, baseY + totalDepth + boxHeight / 2, 0]}
      >
        <meshStandardMaterial
          color="#92400e"
          roughness={0.7}
          metalness={0.2}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </Box>
    </group>
  );
}

interface MonsterProps extends Object3DProps {
  heroHasSword?: boolean;
}

// Monster - Red blob creature with horns
// Stand fits in cylinder hole, body fills the square area
// Billboard effect: always faces the camera
// Scared animation: flies away when hero picks sword
export function Monster3D({ position, heroHasSword = false }: MonsterProps) {
  const ref = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom

  // Track scared state and fly-away animation
  const scaredStartTimeRef = useRef<number | null>(null);
  const flyAwayProgressRef = useRef(0);
  const isGoneRef = useRef(false);

  useFrame((state) => {
    if (!ref.current || !innerRef.current) return;

    // If already gone, hide completely
    if (isGoneRef.current) {
      ref.current.visible = false;
      return;
    }

    // Billboard effect - make monster always face camera
    const camera = state.camera;
    const monsterWorldPos = new THREE.Vector3();
    ref.current.getWorldPosition(monsterWorldPos);

    // Calculate direction to camera (only on XZ plane for rotation)
    const cameraPos = camera.position.clone();
    const direction = new THREE.Vector3(
      cameraPos.x - monsterWorldPos.x,
      0,
      cameraPos.z - monsterWorldPos.z
    ).normalize();

    // Calculate angle to face camera
    const angle = Math.atan2(direction.x, direction.z);
    innerRef.current.rotation.y = angle;

    // Scared fly-away animation when hero has sword
    if (heroHasSword) {
      if (scaredStartTimeRef.current === null) {
        scaredStartTimeRef.current = state.clock.elapsedTime;
      }

      const timeSinceScared = state.clock.elapsedTime - scaredStartTimeRef.current;

      // Phase 1: Scared shaking (0-0.5s)
      if (timeSinceScared < 0.5) {
        const shakeIntensity = 0.08;
        const shakeSpeed = 30;
        innerRef.current.position.x = Math.sin(timeSinceScared * shakeSpeed) * shakeIntensity;
        innerRef.current.position.z =
          Math.cos(timeSinceScared * shakeSpeed * 1.3) * shakeIntensity * 0.5;
        // Scale up slightly for scared effect
        const scaredScale = 1 + Math.sin(timeSinceScared * 20) * 0.05;
        innerRef.current.scale.setScalar(scaredScale);
      }
      // Phase 2: Fly away (0.5s onwards)
      else {
        flyAwayProgressRef.current = Math.min((timeSinceScared - 0.5) / 1.0, 1); // 1 second fly animation
        const eased = 1 - Math.pow(1 - flyAwayProgressRef.current, 2); // Ease out

        // Fly up and away from the board
        ref.current.position.y = position[1] + eased * 8; // Fly up
        ref.current.position.x = position[0] + eased * 3; // Fly to the side

        // Spin while flying
        innerRef.current.rotation.z = eased * Math.PI * 4;
        innerRef.current.rotation.x = eased * Math.PI * 2;

        // Shrink as it flies away
        const shrinkScale = 1 - eased * 0.8;
        innerRef.current.scale.setScalar(Math.max(0.2, shrinkScale));

        // Mark as gone when animation completes
        if (flyAwayProgressRef.current >= 1) {
          isGoneRef.current = true;
          ref.current.visible = false;
        }
      }
    } else {
      // Normal wobble animation when not scared
      const wobble = Math.sin(state.clock.elapsedTime * 4) * 0.015;
      innerRef.current.position.y = wobble;
      innerRef.current.position.x = 0;
      innerRef.current.position.z = 0;
      innerRef.current.scale.setScalar(1);
    }
  });

  const redMaterial = <meshStandardMaterial color="#dc2626" roughness={0.4} metalness={0.1} />;

  // Scared face materials (when hero has sword)
  const scaredWhiteMaterial = <meshStandardMaterial color="#ffffff" />;

  return (
    <group ref={ref} position={position}>
      <group ref={innerRef}>
        {/* Peg/stand that fits into the cylinder hole */}
        <Cylinder
          args={[0.28, 0.3, cylinderHoleDepth, 24]}
          position={[0, baseY - cylinderHoleDepth / 2, 0]}
        >
          {redMaterial}
        </Cylinder>

        {/* Base platform - fills the square hole area */}
        <Cylinder args={[0.38, 0.42, 0.1, 20]} position={[0, baseY + 0.05, 0]}>
          {redMaterial}
        </Cylinder>

        {/* Lower body */}
        <Sphere args={[0.38, 16, 16]} position={[0, baseY + 0.25, 0]}>
          {redMaterial}
        </Sphere>

        {/* Main body - blob */}
        <Sphere args={[0.42, 20, 20]} position={[0, baseY + 0.5, 0]}>
          {redMaterial}
        </Sphere>

        {/* White horns - pointing outward aggressively */}
        <mesh position={[-0.24, baseY + 0.85, 0]} rotation={[-0.2, 0, 0.5]}>
          <coneGeometry args={[0.06, 0.22, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        <mesh position={[0.24, baseY + 0.85, 0]} rotation={[-0.2, 0, -0.5]}>
          <coneGeometry args={[0.06, 0.22, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>

        {/* Eyes - change based on scared state */}
        {heroHasSword ? (
          <>
            {/* Scared eyes - wide and round */}
            <Sphere args={[0.12, 12, 12]} position={[-0.14, baseY + 0.6, 0.34]}>
              {scaredWhiteMaterial}
            </Sphere>
            <Sphere args={[0.12, 12, 12]} position={[0.14, baseY + 0.6, 0.34]}>
              {scaredWhiteMaterial}
            </Sphere>
            {/* Scared pupils - small and high */}
            <Sphere args={[0.04, 8, 8]} position={[-0.14, baseY + 0.64, 0.44]}>
              <meshStandardMaterial color="#1f2937" />
            </Sphere>
            <Sphere args={[0.04, 8, 8]} position={[0.14, baseY + 0.64, 0.44]}>
              <meshStandardMaterial color="#1f2937" />
            </Sphere>
            {/* Raised scared eyebrows */}
            <Box
              args={[0.1, 0.02, 0.04]}
              position={[-0.14, baseY + 0.76, 0.36]}
              rotation={[0, 0, 0.3]}
            >
              <meshStandardMaterial color="#7f1d1d" />
            </Box>
            <Box
              args={[0.1, 0.02, 0.04]}
              position={[0.14, baseY + 0.76, 0.36]}
              rotation={[0, 0, -0.3]}
            >
              <meshStandardMaterial color="#7f1d1d" />
            </Box>
            {/* Scared open mouth - "O" shape */}
            <Cylinder
              args={[0.1, 0.1, 0.08, 16]}
              position={[0, baseY + 0.35, 0.38]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial color="#450a0a" />
            </Cylinder>
          </>
        ) : (
          <>
            {/* Angry eyes - slanted inward */}
            <Sphere args={[0.09, 12, 12]} position={[-0.12, baseY + 0.6, 0.34]}>
              <meshStandardMaterial color="#ffffff" />
            </Sphere>
            <Sphere args={[0.09, 12, 12]} position={[0.12, baseY + 0.6, 0.34]}>
              <meshStandardMaterial color="#ffffff" />
            </Sphere>
            {/* Angry eyebrows - steep angle */}
            <Box
              args={[0.12, 0.025, 0.04]}
              position={[-0.12, baseY + 0.7, 0.36]}
              rotation={[0, 0, -0.6]}
            >
              <meshStandardMaterial color="#7f1d1d" />
            </Box>
            <Box
              args={[0.12, 0.025, 0.04]}
              position={[0.12, baseY + 0.7, 0.36]}
              rotation={[0, 0, 0.6]}
            >
              <meshStandardMaterial color="#7f1d1d" />
            </Box>
            {/* Pupils - looking forward menacingly */}
            <Sphere args={[0.04, 8, 8]} position={[-0.12, baseY + 0.6, 0.42]}>
              <meshStandardMaterial color="#1f2937" />
            </Sphere>
            <Sphere args={[0.04, 8, 8]} position={[0.12, baseY + 0.6, 0.42]}>
              <meshStandardMaterial color="#1f2937" />
            </Sphere>

            {/* Wide angry mouth */}
            <Box args={[0.22, 0.06, 0.08]} position={[0, baseY + 0.38, 0.38]}>
              <meshStandardMaterial color="#450a0a" />
            </Box>
            {/* Sharp teeth - top row */}
            <mesh position={[-0.08, baseY + 0.4, 0.4]}>
              <coneGeometry args={[0.025, 0.07, 4]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, baseY + 0.4, 0.4]}>
              <coneGeometry args={[0.03, 0.08, 4]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0.08, baseY + 0.4, 0.4]}>
              <coneGeometry args={[0.025, 0.07, 4]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            {/* Bottom teeth */}
            <mesh position={[-0.04, baseY + 0.34, 0.4]} rotation={[Math.PI, 0, 0]}>
              <coneGeometry args={[0.02, 0.05, 4]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0.04, baseY + 0.34, 0.4]} rotation={[Math.PI, 0, 0]}>
              <coneGeometry args={[0.02, 0.05, 4]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
          </>
        )}
      </group>
    </group>
  );
}

// Sword - Coin token that sits inside the cylinder hole
// Slightly smaller than cylinder hole to show it can be picked up
// Uses red color (same as monster) to indicate danger/weapon
export function Sword3D({ position }: Object3DProps) {
  const squareHoleDepth = 0.12;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom
  const discRadius = 0.31; // Smaller than cylinder hole (0.35) to show gap
  const discThickness = 0.06;
  // Disc top should be flush with square hole bottom (baseY)
  const discY = baseY - discThickness / 2;
  const topY = baseY; // Top surface of disc

  return (
    <group position={position}>
      {/* Red disc - sits inside cylinder hole, same color as monster */}
      <Cylinder args={[discRadius, discRadius, discThickness, 32]} position={[0, discY, 0]}>
        <meshStandardMaterial color="#dc2626" roughness={0.4} metalness={0.1} />
      </Cylinder>
      {/* Inner disc - darker red */}
      <Cylinder
        args={[discRadius - 0.03, discRadius - 0.03, discThickness * 0.8, 32]}
        position={[0, discY + 0.005, 0]}
      >
        <meshStandardMaterial color="#b91c1c" roughness={0.3} metalness={0.1} />
      </Cylinder>
      {/* Sword blade - on top surface */}
      <Box args={[0.03, 0.01, 0.22]} position={[0, topY + 0.005, 0]}>
        <meshStandardMaterial color="#e5e7eb" metalness={0.8} roughness={0.2} />
      </Box>
      {/* Blade tip */}
      <mesh position={[0, topY + 0.005, 0.12]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.025, 0.01, 0.025]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Crossguard */}
      <Box args={[0.09, 0.012, 0.02]} position={[0, topY + 0.005, -0.08]}>
        <meshStandardMaterial color="#78350f" roughness={0.5} />
      </Box>
      {/* Handle */}
      <Box args={[0.022, 0.012, 0.05]} position={[0, topY + 0.005, -0.115]}>
        <meshStandardMaterial color="#451a03" roughness={0.6} />
      </Box>
      {/* Pommel */}
      <Cylinder args={[0.018, 0.018, 0.012, 8]} position={[0, topY + 0.005, -0.145]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.3} />
      </Cylinder>
    </group>
  );
}

// Lock/Door - Exit point - Ornate golden cylinder (smaller than key, similar pattern)
// Fits snugly inside cylindrical hole, thickness matches cylinder hole depth exactly
export function Lock3D({ position }: Object3DProps) {
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;
  const baseY = -squareHoleDepth + 0.02; // Y level of square hole bottom (-0.10)
  const discRadius = 0.28; // Smaller than key (0.38)
  // Disc thickness - thinner to fit snugly inside cylinder hole
  const discThickness = 0.02; // Much thinner to fit inside without protruding
  // Cylinder hole goes from baseY - cylinderHoleDepth/2 to baseY + cylinderHoleDepth/2
  // That's from -0.15 to -0.05
  // Position disc centered in the cylinder hole
  const cylinderBottom = baseY - cylinderHoleDepth / 2; // -0.15
  const cylinderTop = baseY + cylinderHoleDepth / 2; // -0.05
  const discCenterY = (cylinderBottom + cylinderTop) / 2; // -0.10 (center of cylinder hole)

  // Golden material
  const goldBright = <meshStandardMaterial color="#fbbf24" metalness={0.85} roughness={0.2} />;
  const goldDark = <meshStandardMaterial color="#d97706" metalness={0.7} roughness={0.3} />;

  return (
    <group position={position}>
      {/* Base golden disc - fits exactly in cylinder hole, no peg underneath */}
      <Cylinder args={[discRadius, discRadius, discThickness, 32]} position={[0, discCenterY, 0]}>
        {goldBright}
      </Cylinder>

      {/* Outer decorative ring - recessed into disc */}
      <Cylinder
        args={[discRadius - 0.02, discRadius - 0.04, discThickness * 0.8, 32]}
        position={[0, discCenterY, 0]}
      >
        {goldDark}
      </Cylinder>

      {/* Inner decorative ring - recessed */}
      <Cylinder args={[0.16, 0.14, discThickness * 0.9, 32]} position={[0, discCenterY, 0]}>
        {goldDark}
      </Cylinder>

      {/* Center raised circle with keyhole - flush with disc top */}
      <Cylinder
        args={[0.08, 0.08, discThickness * 0.3, 16]}
        position={[0, cylinderTop - discThickness * 0.15, 0]}
      >
        {goldBright}
      </Cylinder>

      {/* Keyhole shape - vertical slot - recessed into center circle */}
      <Cylinder
        args={[0.03, 0.03, discThickness * 0.2, 8]}
        position={[0, cylinderTop - discThickness * 0.1, 0]}
      >
        <meshStandardMaterial color="#1c0a00" roughness={0.9} />
      </Cylinder>
      {/* Keyhole bottom rectangle - recessed */}
      <Box
        args={[0.04, 0.02, discThickness * 0.2]}
        position={[0, cylinderTop - discThickness * 0.1, 0]}
      >
        <meshStandardMaterial color="#1c0a00" roughness={0.9} />
      </Box>

      {/* Ornate curved pattern - 4 main curves radiating from center (recessed into disc) */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]} position={[0, discCenterY, 0]}>
          {/* Main radial bar - recessed */}
          <Box args={[0.03, 0.01, 0.12]} position={[0, 0, 0.17]}>
            {goldDark}
          </Box>
          {/* Curved end piece - left - recessed */}
          <Box args={[0.05, 0.008, 0.03]} position={[-0.035, 0, 0.22]}>
            {goldDark}
          </Box>
          {/* Curved end piece - right - recessed */}
          <Box args={[0.05, 0.008, 0.03]} position={[0.035, 0, 0.22]}>
            {goldDark}
          </Box>
        </group>
      ))}

      {/* Diagonal decorative elements between main curves - recessed */}
      {[Math.PI / 4, (Math.PI * 3) / 4, (Math.PI * 5) / 4, (Math.PI * 7) / 4].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]} position={[0, discCenterY, 0]}>
          {/* Small radial element - recessed */}
          <Cylinder args={[0.018, 0.018, discThickness * 0.2, 8]} position={[0, 0, 0.2]}>
            {goldBright}
          </Cylinder>
        </group>
      ))}
    </group>
  );
}
