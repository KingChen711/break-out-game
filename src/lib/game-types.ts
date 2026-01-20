// Game Types for Break Out Dungeon

export enum CubeFace {
  KEY_HOLE = 1, // white
  FACE = 2, // blue
  WEAPON = 3, // red
  SHIELD = 4, // orange
  BACK = 5, // green
  HEAD = 6, // yellow
}

export const FACE_COLORS: Record<CubeFace, string> = {
  [CubeFace.KEY_HOLE]: "#f5f5f5", // white
  [CubeFace.FACE]: "#3b82f6", // blue
  [CubeFace.WEAPON]: "#ef4444", // red
  [CubeFace.SHIELD]: "#f97316", // orange
  [CubeFace.BACK]: "#22c55e", // green
  [CubeFace.HEAD]: "#eab308", // yellow
};

export const FACE_LABELS: Record<CubeFace, string> = {
  [CubeFace.KEY_HOLE]: "🔑",
  [CubeFace.FACE]: "😊",
  [CubeFace.WEAPON]: "⚔️",
  [CubeFace.SHIELD]: "🛡️",
  [CubeFace.BACK]: "🔙",
  [CubeFace.HEAD]: "👑",
};

export interface Position {
  x: number;
  y: number;
}

// Face rotation in degrees (0, 90, 180, 270) - how much each face's content is rotated
export interface FaceRotations {
  top: number;
  bottom: number;
  front: number;
  back: number;
  left: number;
  right: number;
}

export interface HeroState {
  position: Position;
  topFace: CubeFace;
  bottomFace: CubeFace;
  frontFace: CubeFace;
  backFace: CubeFace;
  leftFace: CubeFace;
  rightFace: CubeFace;
  // Track rotation of each face's content (in degrees: 0, 90, 180, 270)
  faceRotations: FaceRotations;
  hasKey: boolean;
  hasSword: boolean;
}

export type GameObjectType = "key" | "crystal" | "pillar" | "box" | "monster" | "sword" | "lock";

export interface GameObject {
  type: GameObjectType;
  position: Position;
}

export interface GameState {
  hero: HeroState;
  objects: GameObject[];
  hasWon: boolean;
  moveCount: number;
}

export type Direction = "up" | "down" | "left" | "right";
export type Rotation = "clockwise" | "counterclockwise" | "turnaround";

// Face rules: given top and front face, returns right face
export const FACE_RULES: Record<string, number> = {
  "1,2": 4,
  "1,4": 5,
  "1,5": 3,
  "1,3": 2,
  "2,1": 3,
  "2,3": 6,
  "2,6": 4,
  "2,4": 1,
  "3,1": 5,
  "3,5": 6,
  "3,6": 2,
  "3,2": 1,
  "4,1": 2,
  "4,2": 6,
  "4,6": 5,
  "4,5": 1,
  "5,1": 4,
  "5,4": 6,
  "5,6": 3,
  "5,3": 1,
  "6,5": 4,
  "6,4": 2,
  "6,2": 3,
  "6,3": 5,
};

export const MAP_WIDTH = 5;
export const MAP_HEIGHT = 4;
export const LOCK_POSITION: Position = { x: 2, y: 0 };

// Difficulty levels
export type Difficulty = "Tutorial" | "Starter" | "Junior" | "Expert" | "Master" | "Wizard";

// Level definition - makes it easy to create new levels
export interface LevelData {
  id: string;
  name: string;
  difficulty: Difficulty;
  minSteps: number;
  // Tutorial metadata (optional)
  isTutorial?: boolean;
  tutorialTitle?: { en: string; vi: string };
  tutorialBody?: { en: string; vi: string };
  tutorialSteps?: { en: string[]; vi: string[] };
  // Hero starting configuration
  hero: {
    position: Position;
    topFace: CubeFace;
    frontFace: CubeFace;
    rightFace: CubeFace;
  };
  // Game objects on the map
  objects: Array<{
    type: Exclude<GameObjectType, "lock">; // lock is auto-added
    position: Position;
  }>;
  // Optional custom lock position (defaults to LOCK_POSITION)
  lockPosition?: Position;
}
