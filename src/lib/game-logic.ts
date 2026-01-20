import {
  CubeFace,
  Direction,
  FaceRotations,
  GameState,
  HeroState,
  Position,
  Rotation,
  LevelData,
  LOCK_POSITION,
  MAP_WIDTH,
  MAP_HEIGHT,
} from "./game-types";
import { level1 } from "./levels";

// Calculate the opposite face (faces sum to 7)
function getOppositeFace(face: CubeFace): CubeFace {
  return (7 - face) as CubeFace;
}

// Default face rotations (all faces start upright)
function createDefaultFaceRotations(): FaceRotations {
  return {
    top: 90,
    bottom: 270,
    front: 0,
    back: 0,
    left: 0,
    right: 0,
  };
}

// Create hero from level data (top, front, right -> calculate all 6 faces)
export function createHeroFromLevel(levelData: LevelData): HeroState {
  const { position, topFace, frontFace, rightFace } = levelData.hero;

  return {
    position: { ...position },
    topFace,
    bottomFace: getOppositeFace(topFace),
    frontFace,
    backFace: getOppositeFace(frontFace),
    rightFace,
    leftFace: getOppositeFace(rightFace),
    faceRotations: createDefaultFaceRotations(),
    hasKey: false,
    hasSword: false,
  };
}

// Create game state from level data
export function createGameStateFromLevel(levelData: LevelData): GameState {
  const hero = createHeroFromLevel(levelData);
  const lockPos = levelData.lockPosition || LOCK_POSITION;

  return {
    hero,
    objects: [
      ...levelData.objects.map((obj) => ({
        type: obj.type,
        position: { ...obj.position },
      })),
      { type: "lock" as const, position: lockPos },
    ],
    hasWon: false,
    moveCount: 0,
  };
}

// Default initial state (uses level1)
export function createInitialGameState(): GameState {
  return createGameStateFromLevel(level1);
}

export function cloneHero(hero: HeroState): HeroState {
  return {
    ...hero,
    position: { ...hero.position },
    faceRotations: { ...hero.faceRotations },
  };
}

// Helper to normalize rotation to 0, 90, 180, 270
function normalizeRotation(rot: number): number {
  return ((rot % 360) + 360) % 360;
}

function rollUp(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types: back→bottom, top→back, front→top, bottom→front
  const tempFace = newHero.bottomFace;
  newHero.bottomFace = newHero.backFace;
  newHero.backFace = newHero.topFace;
  newHero.topFace = newHero.frontFace;
  newHero.frontFace = tempFace;

  // Swap face rotations following the same pattern as faces
  const tempRot = rot.bottom;
  newHero.faceRotations.bottom = rot.back;
  newHero.faceRotations.back = rot.top;
  newHero.faceRotations.top = rot.front;
  newHero.faceRotations.front = tempRot;

  newHero.faceRotations.front = normalizeRotation(newHero.faceRotations.front + 180);
  newHero.faceRotations.back = normalizeRotation(newHero.faceRotations.back + 180);

  // Left and right faces stay in place but rotate as cube tips forward
  newHero.faceRotations.left = normalizeRotation(rot.left + 90);
  newHero.faceRotations.right = normalizeRotation(rot.right - 90);

  newHero.position.y -= 1;
  return newHero;
}

function rollDown(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types: front→bottom, top→front, back→top, bottom→back
  const tempFace = newHero.bottomFace;
  newHero.bottomFace = newHero.frontFace;
  newHero.frontFace = newHero.topFace;
  newHero.topFace = newHero.backFace;
  newHero.backFace = tempFace;

  // Swap face rotations following the same pattern as faces
  const tempRot = rot.bottom;
  newHero.faceRotations.bottom = rot.front;
  newHero.faceRotations.front = rot.top;
  newHero.faceRotations.top = rot.back;
  newHero.faceRotations.back = tempRot;

  newHero.faceRotations.top = normalizeRotation(newHero.faceRotations.top + 180);
  newHero.faceRotations.bottom = normalizeRotation(newHero.faceRotations.bottom + 180);

  // Left and right faces stay in place but rotate as cube tips backward
  newHero.faceRotations.left = normalizeRotation(rot.left - 90);
  newHero.faceRotations.right = normalizeRotation(rot.right + 90);

  newHero.position.y += 1;
  return newHero;
}

function rollLeft(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types: left→bottom, top→left, right→top, bottom→right
  const tempFace = newHero.bottomFace;
  newHero.bottomFace = newHero.leftFace;
  newHero.leftFace = newHero.topFace;
  newHero.topFace = newHero.rightFace;
  newHero.rightFace = tempFace;

  // Swap face rotations following the same pattern as faces
  const tempRot = rot.bottom;
  newHero.faceRotations.bottom = rot.left;
  newHero.faceRotations.left = rot.top;
  newHero.faceRotations.top = rot.right;
  newHero.faceRotations.right = tempRot;

  newHero.faceRotations.left = normalizeRotation(newHero.faceRotations.left + 90);
  newHero.faceRotations.top = normalizeRotation(newHero.faceRotations.top + 90);
  newHero.faceRotations.right = normalizeRotation(newHero.faceRotations.right - 90);
  newHero.faceRotations.bottom = normalizeRotation(newHero.faceRotations.bottom - 90);

  // Front and back faces stay in place but rotate as cube tips left
  newHero.faceRotations.front = normalizeRotation(rot.front + 90);
  newHero.faceRotations.back = normalizeRotation(rot.back - 90);

  newHero.position.x -= 1;
  return newHero;
}

function rollRight(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types: right→bottom, top→right, left→top, bottom→left
  const tempFace = newHero.bottomFace;
  newHero.bottomFace = newHero.rightFace;
  newHero.rightFace = newHero.topFace;
  newHero.topFace = newHero.leftFace;
  newHero.leftFace = tempFace;

  // Swap face rotations following the same pattern as faces
  const tempRot = rot.bottom;
  newHero.faceRotations.bottom = rot.right;
  newHero.faceRotations.right = rot.top;
  newHero.faceRotations.top = rot.left;
  newHero.faceRotations.left = tempRot;

  newHero.faceRotations.left = normalizeRotation(newHero.faceRotations.left + 90);
  newHero.faceRotations.top = normalizeRotation(newHero.faceRotations.top - 90);
  newHero.faceRotations.right = normalizeRotation(newHero.faceRotations.right - 90);
  newHero.faceRotations.bottom = normalizeRotation(newHero.faceRotations.bottom + 90);

  // Front and back faces stay in place but rotate as cube tips right
  newHero.faceRotations.front = normalizeRotation(rot.front - 90);
  newHero.faceRotations.back = normalizeRotation(rot.back + 90);

  newHero.position.x += 1;
  return newHero;
}

export function rotateClockwise(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types
  const temp = newHero.leftFace;
  newHero.leftFace = newHero.frontFace;
  newHero.frontFace = newHero.rightFace;
  newHero.rightFace = newHero.backFace;
  newHero.backFace = temp;

  // Swap face rotations (faces move but don't rotate relative to themselves)
  const tempRot = rot.left;
  newHero.faceRotations.left = rot.front;
  newHero.faceRotations.front = rot.right;
  newHero.faceRotations.right = rot.back;
  newHero.faceRotations.back = tempRot;

  // Top and bottom faces rotate in place
  newHero.faceRotations.top = normalizeRotation(rot.top - 90);
  newHero.faceRotations.bottom = normalizeRotation(rot.bottom + 90);

  return newHero;
}

export function rotateCounterClockwise(hero: HeroState): HeroState {
  const newHero = cloneHero(hero);
  const rot = hero.faceRotations;

  // Swap face types
  const temp = newHero.leftFace;
  newHero.leftFace = newHero.backFace;
  newHero.backFace = newHero.rightFace;
  newHero.rightFace = newHero.frontFace;
  newHero.frontFace = temp;

  // Swap face rotations
  const tempRot = rot.left;
  newHero.faceRotations.left = rot.back;
  newHero.faceRotations.back = rot.right;
  newHero.faceRotations.right = rot.front;
  newHero.faceRotations.front = tempRot;

  // Top and bottom faces rotate in place
  newHero.faceRotations.top = normalizeRotation(rot.top + 90);
  newHero.faceRotations.bottom = normalizeRotation(rot.bottom - 90);

  return newHero;
}

export function rotate180(hero: HeroState): HeroState {
  return rotateClockwise(rotateClockwise(hero));
}

function positionEquals(a: Position, b: Position): boolean {
  return a.x === b.x && a.y === b.y;
}

function isAdjacent(a: Position, b: Position): boolean {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);
  // Only cardinal directions (up, down, left, right), not diagonals
  return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
}

export function canRotate(state: GameState): boolean {
  const { hero, objects } = state;

  // Can only rotate when bottom face is shield
  if (hero.bottomFace !== CubeFace.SHIELD) {
    return false;
  }

  // Cannot rotate if adjacent to box or monster
  for (const obj of objects) {
    if (
      (obj.type === "box" || obj.type === "monster") &&
      isAdjacent(hero.position, obj.position) &&
      !positionEquals(hero.position, obj.position)
    ) {
      return false;
    }
  }

  return true;
}

export function canRollTo(state: GameState, nextHero: HeroState): boolean {
  const { objects, hero } = state;

  // Check bounds
  if (
    nextHero.position.x < 0 ||
    nextHero.position.x >= MAP_WIDTH ||
    nextHero.position.y < 0 ||
    nextHero.position.y >= MAP_HEIGHT
  ) {
    return false;
  }

  // Check for obstacle at target position
  const obstacle = objects.find((obj) => positionEquals(obj.position, nextHero.position));

  if (!obstacle) return true;

  // Cannot pass through box, monster, or pillar (always blocked)
  if (obstacle.type === "box" || obstacle.type === "monster" || obstacle.type === "pillar") {
    return false;
  }

  // Key: can only roll on it if next bottom is keyhole (will pick up)
  if (obstacle.type === "key") {
    return nextHero.bottomFace === CubeFace.KEY_HOLE;
  }

  // Sword: can always roll onto sword position
  if (obstacle.type === "sword") {
    return true;
  }

  // Crystal: can pass ONLY if bottom is keyhole AND hero doesn't have key yet
  // After picking up key, crystal blocks even with keyhole bottom
  if (obstacle.type === "crystal") {
    return nextHero.bottomFace === CubeFace.KEY_HOLE && !hero.hasKey;
  }

  // Lock position - can step on it
  if (obstacle.type === "lock") {
    return true;
  }

  return false;
}

// Check if a roll in a direction is valid (for pre-validation before animation)
export function canRoll(state: GameState, direction: Direction): boolean {
  if (state.hasWon) return false;

  const { hero } = state;
  let nextHero: HeroState;

  switch (direction) {
    case "up":
      nextHero = rollUp(hero);
      break;
    case "down":
      nextHero = rollDown(hero);
      break;
    case "left":
      nextHero = rollLeft(hero);
      break;
    case "right":
      nextHero = rollRight(hero);
      break;
  }

  return canRollTo(state, nextHero);
}

export function rollHero(state: GameState, direction: Direction): GameState {
  if (state.hasWon) return state;

  const { hero } = state;
  let nextHero: HeroState;

  switch (direction) {
    case "up":
      nextHero = rollUp(hero);
      break;
    case "down":
      nextHero = rollDown(hero);
      break;
    case "left":
      nextHero = rollLeft(hero);
      break;
    case "right":
      nextHero = rollRight(hero);
      break;
  }

  if (!canRollTo(state, nextHero)) {
    return state;
  }

  let newObjects = [...state.objects];
  let hasWon = false;

  // Check for pickup
  const obstacle = newObjects.find((obj) => positionEquals(obj.position, nextHero.position));
  let extraSteps = 0;

  if (obstacle) {
    // Pick up key
    if (obstacle.type === "key" && nextHero.bottomFace === CubeFace.KEY_HOLE) {
      nextHero.hasKey = true;
      newObjects = newObjects.filter((obj) => obj !== obstacle);
    }

    // Pick up sword: only if bottom is weapon (can walk on sword without picking up)
    if (obstacle.type === "sword" && nextHero.bottomFace === CubeFace.WEAPON) {
      // Count the scare/run-away as an extra step (move onto sword is 1 step, scare is +1)
      extraSteps = 1;
      nextHero.hasSword = true;
      newObjects = newObjects.filter((obj) => obj !== obstacle);
      // Monster gets scared and runs away when sword is picked up
      newObjects = newObjects.filter((obj) => obj.type !== "monster");
    }

    // Win condition: at lock position, has key, bottom is keyhole, back face is FACE (facing door)
    if (
      obstacle.type === "lock" &&
      nextHero.hasKey &&
      nextHero.bottomFace === CubeFace.KEY_HOLE &&
      nextHero.backFace === CubeFace.FACE
    ) {
      hasWon = true;
    }
  }

  return {
    hero: nextHero,
    objects: newObjects,
    hasWon,
    moveCount: state.moveCount + 1 + extraSteps,
  };
}

export function rotateHero(state: GameState, rotation: Rotation): GameState {
  if (state.hasWon) return state;
  if (!canRotate(state)) return state;

  let newHero: HeroState;
  switch (rotation) {
    case "clockwise":
      newHero = rotateClockwise(state.hero);
      break;
    case "counterclockwise":
      newHero = rotateCounterClockwise(state.hero);
      break;
    case "turnaround":
      newHero = rotate180(state.hero);
      break;
  }

  return {
    ...state,
    hero: newHero,
    moveCount: state.moveCount + 1,
  };
}
