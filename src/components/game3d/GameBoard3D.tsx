"use client";

import React, { JSX, useState, useEffect, useRef } from "react";
import { Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";
import { GameState, MAP_WIDTH, MAP_HEIGHT, LOCK_POSITION } from "@/lib/game-types";
import type { Position } from "@/lib/game-types";
import { HeroCube3D } from "./HeroCube3D";
import { Key3D, Crystal3D, Pillar3D, Box3D, Monster3D, Sword3D, Lock3D } from "./GameObjects3D";

interface GameBoard3DProps {
  gameState: GameState;
  isAnimating: boolean;
  animationDirection: string;
  targetPosition: { x: number; y: number } | null;
  isStuck?: boolean;
}

// Create a square shape with a square hole (for the outer frame)
function createTileWithSquareHoleShape(tileSize: number, holeSize: number): THREE.Shape {
  const half = tileSize / 2;
  const holeHalf = holeSize / 2;

  // Outer square
  const shape = new THREE.Shape();
  shape.moveTo(-half, -half);
  shape.lineTo(half, -half);
  shape.lineTo(half, half);
  shape.lineTo(-half, half);
  shape.lineTo(-half, -half);

  // Inner square hole (as a path to cut out)
  const holePath = new THREE.Path();
  holePath.moveTo(-holeHalf, -holeHalf);
  holePath.lineTo(-holeHalf, holeHalf);
  holePath.lineTo(holeHalf, holeHalf);
  holePath.lineTo(holeHalf, -holeHalf);
  holePath.lineTo(-holeHalf, -holeHalf);
  shape.holes.push(holePath);

  return shape;
}

// Create a square shape with a circular hole (for the square hole bottom)
function createSquareWithCircularHoleShape(squareSize: number, circleRadius: number): THREE.Shape {
  const half = squareSize / 2;

  // Square
  const shape = new THREE.Shape();
  shape.moveTo(-half, -half);
  shape.lineTo(half, -half);
  shape.lineTo(half, half);
  shape.lineTo(-half, half);
  shape.lineTo(-half, -half);

  // Circular hole
  const holePath = new THREE.Path();
  holePath.absarc(0, 0, circleRadius, 0, Math.PI * 2, true);
  shape.holes.push(holePath);

  return shape;
}

// Floor tile with square hole containing a cylinder hole
function FloorTile({ x, z }: { x: number; z: number }) {
  const tileSize = 0.98;
  const squareHoleSize = 0.88; // Larger square hole (thinner border)
  const cylinderHoleRadius = 0.35; // Larger cylinder hole
  const squareHoleDepth = 0.12;
  const cylinderHoleDepth = 0.1;

  return (
    <group position={[x, 0, z]}>
      {/* Base layer underneath everything */}
      <Box
        args={[tileSize, 0.04, tileSize]}
        position={[0, -squareHoleDepth - cylinderHoleDepth - 0.02, 0]}
      >
        <meshStandardMaterial color="#4a4660" roughness={0.9} />
      </Box>

      {/* Top surface frame (around the square hole) */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <shapeGeometry args={[createTileWithSquareHoleShape(tileSize, squareHoleSize)]} />
        <meshStandardMaterial color="#7a7590" roughness={0.7} />
      </mesh>

      {/* Square hole walls - 4 sides */}
      {/* Front wall */}
      <Box
        args={[squareHoleSize, squareHoleDepth, 0.02]}
        position={[0, -squareHoleDepth / 2 + 0.02, squareHoleSize / 2 - 0.01]}
      >
        <meshStandardMaterial color="#5a5670" roughness={0.8} />
      </Box>
      {/* Back wall */}
      <Box
        args={[squareHoleSize, squareHoleDepth, 0.02]}
        position={[0, -squareHoleDepth / 2 + 0.02, -squareHoleSize / 2 + 0.01]}
      >
        <meshStandardMaterial color="#5a5670" roughness={0.8} />
      </Box>
      {/* Left wall */}
      <Box
        args={[0.02, squareHoleDepth, squareHoleSize]}
        position={[-squareHoleSize / 2 + 0.01, -squareHoleDepth / 2 + 0.02, 0]}
      >
        <meshStandardMaterial color="#5a5670" roughness={0.8} />
      </Box>
      {/* Right wall */}
      <Box
        args={[0.02, squareHoleDepth, squareHoleSize]}
        position={[squareHoleSize / 2 - 0.01, -squareHoleDepth / 2 + 0.02, 0]}
      >
        <meshStandardMaterial color="#5a5670" roughness={0.8} />
      </Box>

      {/* Square hole bottom (with circular hole cut out) */}
      <mesh position={[0, -squareHoleDepth + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <shapeGeometry
          args={[createSquareWithCircularHoleShape(squareHoleSize - 0.04, cylinderHoleRadius)]}
        />
        <meshStandardMaterial color="#5a5670" roughness={0.8} />
      </mesh>

      {/* Cylinder hole wall - going down from square hole bottom */}
      <mesh position={[0, -squareHoleDepth - cylinderHoleDepth / 2 + 0.02, 0]}>
        <cylinderGeometry
          args={[cylinderHoleRadius, cylinderHoleRadius, cylinderHoleDepth, 32, 1, true]}
        />
        <meshStandardMaterial color="#3a3750" roughness={0.9} side={THREE.BackSide} />
      </mesh>

      {/* Cylinder hole bottom */}
      <Cylinder
        args={[cylinderHoleRadius, cylinderHoleRadius, 0.01, 32]}
        position={[0, -squareHoleDepth - cylinderHoleDepth + 0.02, 0]}
      >
        <meshStandardMaterial color="#2a2740" roughness={0.95} />
      </Cylinder>
    </group>
  );
}

// Rocky border stones - positioned OUTSIDE the playable area with gap
function RockyBorder() {
  const rocks: JSX.Element[] = [];
  const rockPositions: Array<{
    x: number;
    z: number;
    scale: number;
    rotation: number;
  }> = [];

  // Use seeded random for consistent rock placement
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
  };

  let seed = 1;
  const getRandom = () => seededRandom(seed++);

  // Larger rocks (~0.35-0.5), max height ~0.5 (half a cube)
  const getScale = () => 0.35 + getRandom() * 0.15;

  // Gap between play area and rocks, rocks spaced apart
  const gapFromBoard = 0.8; // Gap between board edge and rocks

  // Left side - 2 rows with spacing
  for (let i = -0.5; i < MAP_HEIGHT + 0.5; i += 0.9) {
    rockPositions.push({
      x: -gapFromBoard - 0.3,
      z: i,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
    rockPositions.push({
      x: -gapFromBoard - 0.9,
      z: i + 0.4,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
  }

  // Right side - 2 rows with spacing
  for (let i = -0.5; i < MAP_HEIGHT + 0.5; i += 0.9) {
    rockPositions.push({
      x: MAP_WIDTH - 1 + gapFromBoard + 0.3,
      z: i,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
    rockPositions.push({
      x: MAP_WIDTH - 1 + gapFromBoard + 0.9,
      z: i + 0.4,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
  }

  // Front side (far from camera) - 2 rows with spacing
  for (let i = -0.5; i < MAP_WIDTH + 0.5; i += 0.9) {
    rockPositions.push({
      x: i,
      z: MAP_HEIGHT - 1 + gapFromBoard + 0.3,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
    rockPositions.push({
      x: i + 0.4,
      z: MAP_HEIGHT - 1 + gapFromBoard + 0.9,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
  }

  // Back side (near camera) - leave gap for door
  for (let i = -0.5; i < MAP_WIDTH + 0.5; i += 0.9) {
    // Skip the middle for the door (around LOCK_POSITION.x which is 2)
    if (i >= 0.5 && i <= 3.5) continue;
    rockPositions.push({
      x: i,
      z: -gapFromBoard - 0.3,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
    rockPositions.push({
      x: i + 0.4,
      z: -gapFromBoard - 0.9,
      scale: getScale(),
      rotation: getRandom() * Math.PI * 2,
    });
  }

  // Corner rocks
  // Top-left corner
  rockPositions.push({
    x: -gapFromBoard - 0.5,
    z: MAP_HEIGHT - 1 + gapFromBoard + 0.5,
    scale: getScale(),
    rotation: getRandom() * Math.PI * 2,
  });
  // Top-right corner
  rockPositions.push({
    x: MAP_WIDTH - 1 + gapFromBoard + 0.5,
    z: MAP_HEIGHT - 1 + gapFromBoard + 0.5,
    scale: getScale(),
    rotation: getRandom() * Math.PI * 2,
  });
  // Bottom-left corner
  rockPositions.push({
    x: -gapFromBoard - 0.5,
    z: -gapFromBoard - 0.5,
    scale: getScale(),
    rotation: getRandom() * Math.PI * 2,
  });
  // Bottom-right corner
  rockPositions.push({
    x: MAP_WIDTH - 1 + gapFromBoard + 0.5,
    z: -gapFromBoard - 0.5,
    scale: getScale(),
    rotation: getRandom() * Math.PI * 2,
  });

  // Rocks beside the door
  rockPositions.push({
    x: LOCK_POSITION.x - 1.3,
    z: -gapFromBoard - 0.4,
    scale: 0.4,
    rotation: 0.5,
  });
  rockPositions.push({
    x: LOCK_POSITION.x + 1.3,
    z: -gapFromBoard - 0.4,
    scale: 0.4,
    rotation: 1.8,
  });

  rockPositions.forEach((rock, i) => {
    rocks.push(
      <mesh
        key={`rock-${i}`}
        position={[rock.x, rock.scale * 0.5, rock.z]}
        rotation={[0, rock.rotation, 0]}
      >
        <dodecahedronGeometry args={[rock.scale, 0]} />
        <meshStandardMaterial color="#57534e" roughness={0.95} metalness={0.05} />
      </mesh>
    );
  });

  return <group>{rocks}</group>;
}

// Door/Gate at the back edge - positioned OUTSIDE the playable area (z < -0.5)
function DungeonDoor({ hasWon }: { hasWon: boolean }) {
  const [doorRotation, setDoorRotation] = useState(0);

  // Animate door opening when game is won - tilts downward and inward (falls into dungeon)
  useEffect(() => {
    if (hasWon) {
      let startTime: number | null = null;
      const duration = 800; // ms
      const targetRotation = -Math.PI / 2.5; // Tilt backward ~72 degrees (falls into dungeon)

      const animate = (time: number) => {
        if (startTime === null) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out with bounce effect
        const eased = 1 - Math.pow(1 - progress, 3);
        setDoorRotation(targetRotation * eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    } else {
      setDoorRotation(0);
    }
  }, [hasWon]);

  return (
    <group position={[LOCK_POSITION.x, 0, -1.0]}>
      {/* Left pillar */}
      <group position={[-0.7, 0, 0]}>
        <Box args={[0.5, 1.4, 0.5]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        </Box>
        {/* Pillar top */}
        <Box args={[0.6, 0.2, 0.6]} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#d1d5db" roughness={0.7} />
        </Box>
      </group>

      {/* Right pillar */}
      <group position={[0.7, 0, 0]}>
        <Box args={[0.5, 1.4, 0.5]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        </Box>
        {/* Pillar top */}
        <Box args={[0.6, 0.2, 0.6]} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#d1d5db" roughness={0.7} />
        </Box>
      </group>

      {/* Top beam connecting pillars */}
      <Box args={[1.9, 0.35, 0.4]} position={[0, 1.55, 0]}>
        <meshStandardMaterial color="#d1d5db" roughness={0.7} />
      </Box>

      {/* Door panel - tilts downward/outward when won, pivot at bottom */}
      <group position={[0, 0, 0.1]} rotation={[doorRotation, 0, 0]}>
        <Box args={[0.9, 1.3, 0.15]} position={[0, 0.65, 0]}>
          <meshStandardMaterial color="#92400e" roughness={0.7} />
        </Box>

        {/* Door frame details - brick pattern */}
        <Box args={[0.95, 0.1, 0.18]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#78350f" roughness={0.8} />
        </Box>
        <Box args={[0.95, 0.1, 0.18]} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#78350f" roughness={0.8} />
        </Box>
        <Box args={[0.95, 0.1, 0.18]} position={[0, 0.95, 0]}>
          <meshStandardMaterial color="#78350f" roughness={0.8} />
        </Box>
        <Box args={[0.1, 1.3, 0.18]} position={[0.3, 0.65, 0]}>
          <meshStandardMaterial color="#78350f" roughness={0.8} />
        </Box>
        <Box args={[0.1, 1.3, 0.18]} position={[-0.3, 0.65, 0]}>
          <meshStandardMaterial color="#78350f" roughness={0.8} />
        </Box>
      </group>

      {/* Light glow from inside when door opens */}
      {hasWon && (
        <mesh position={[0, 0.65, -0.1]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshStandardMaterial
            color="#fef3c7"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
    </group>
  );
}

function GameObjectRenderer({
  type,
  position,
  heroHasSword,
}: {
  type: string;
  position: [number, number, number];
  heroHasSword?: boolean;
}) {
  switch (type) {
    case "key":
      return <Key3D position={position} />;
    case "crystal":
      return <Crystal3D position={position} />;
    case "pillar":
      return <Pillar3D position={position} />;
    case "box":
      return <Box3D position={position} />;
    case "monster":
      return <Monster3D position={position} heroHasSword={heroHasSword} />;
    case "sword":
      return <Sword3D position={position} />;
    case "lock":
      // Lock is now rendered as the door at the edge, skip here
      return null;
    default:
      return null;
  }
}

export function GameBoard3D({
  gameState,
  isAnimating,
  animationDirection,
  targetPosition,
  isStuck = false,
}: GameBoard3DProps) {
  const { hero, objects } = gameState;

  // Find current monster in objects
  const currentMonster = objects.find((obj) => obj.type === "monster");

  // State for monster fly-away animation - all using useState to satisfy linter
  const [savedMonsterPos, setSavedMonsterPos] = useState<Position | null>(null);
  const [monsterFlyingAway, setMonsterFlyingAway] = useState(false);
  const [prevHasSword, setPrevHasSword] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track monster position when it exists and hero doesn't have sword
  useEffect(() => {
    if (currentMonster && !prevHasSword) {
      // Use queueMicrotask to make this async and avoid cascading render warning
      queueMicrotask(() => {
        setSavedMonsterPos({
          x: currentMonster.position.x,
          y: currentMonster.position.y,
        });
      });
    }
  }, [currentMonster, prevHasSword]);

  // Effect to detect sword pickup and level reset
  useEffect(() => {
    // Hero just picked up sword
    if (hero.hasSword && !prevHasSword) {
      // Use queueMicrotask to batch state updates asynchronously
      queueMicrotask(() => {
        setPrevHasSword(true);
        setMonsterFlyingAway(true);
      });

      timerRef.current = setTimeout(() => {
        setMonsterFlyingAway(false);
      }, 1600);
    }

    // Level was reset (hero no longer has sword)
    if (!hero.hasSword && prevHasSword) {
      queueMicrotask(() => {
        setPrevHasSword(false);
        setSavedMonsterPos(null);
        setMonsterFlyingAway(false);
      });
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [hero.hasSword, prevHasSword]);

  // Show scared monster if it was removed but animation is still playing
  const showScaredMonster = monsterFlyingAway && savedMonsterPos && !currentMonster;

  // Create floor tiles
  const tiles = [];
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      tiles.push(<FloorTile key={`tile-${x}-${y}`} x={x} z={y} />);
    }
  }

  // Center the board
  const offsetX = -(MAP_WIDTH - 1) / 2;
  const offsetZ = -(MAP_HEIGHT - 1) / 2;

  return (
    <group position={[offsetX, 0, offsetZ]}>
      {/* Floor base */}
      <Box
        args={[MAP_WIDTH + 1, 0.25, MAP_HEIGHT + 1]}
        position={[(MAP_WIDTH - 1) / 2, -0.28, (MAP_HEIGHT - 1) / 2]}
      >
        <meshStandardMaterial color="#3d3a50" roughness={0.95} />
      </Box>

      {/* Floor tiles */}
      {tiles}

      {/* Rocky border */}
      <RockyBorder />

      {/* Door at the back */}
      <DungeonDoor hasWon={gameState.hasWon} />

      {/* Lock cylinder at lock position (2,0) - ornate golden disc smaller than key */}
      {!gameState.hasWon && <Lock3D position={[LOCK_POSITION.x, 0, LOCK_POSITION.y]} />}

      {/* Game objects (excluding lock and monster when animating) */}
      {objects.map((obj, index) => (
        <GameObjectRenderer
          key={`obj-${index}`}
          type={obj.type}
          position={[obj.position.x, 0, obj.position.y]}
          heroHasSword={hero.hasSword}
        />
      ))}

      {/* Scared monster - render separately to persist through animation */}
      {showScaredMonster && savedMonsterPos && (
        <Monster3D position={[savedMonsterPos.x, 0, savedMonsterPos.y]} heroHasSword={true} />
      )}

      {/* Hero cube */}
      <HeroCube3D
        hero={{
          ...hero,
          position: { x: hero.position.x, y: hero.position.y },
        }}
        isAnimating={isAnimating}
        animationDirection={animationDirection}
        targetPosition={targetPosition}
        isStuck={isStuck}
      />
    </group>
  );
}
