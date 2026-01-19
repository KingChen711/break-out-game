import { CubeFace, LevelData } from "./game-types";

export const level0: LevelData = {
  id: "level-0",
  name: "Level Test",
  difficulty: "Starter",
  minSteps: 0,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [],
};

// Level 1
export const level1: LevelData = {
  id: "level-1",
  name: "Level 1",
  difficulty: "Starter",
  minSteps: 9,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 0, y: 2 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 4, y: 2 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 0, y: 3 } },
  ],
};

// Level 2
export const level2: LevelData = {
  id: "level-2",
  name: "Level 2",
  difficulty: "Starter",
  minSteps: 6,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 3, y: 0 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
  ],
};

// Level 3
export const level3: LevelData = {
  id: "level-3",
  name: "Level 3",
  difficulty: "Starter",
  minSteps: 8,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 1, y: 3 } },
    { type: "box", position: { x: 4, y: 3 } },
  ],
};

// Level 4
export const level4: LevelData = {
  id: "level-4",
  name: "Level 4",
  difficulty: "Starter",
  minSteps: 6,
  hero: {
    position: { x: 1, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 0, y: 0 } },
    { type: "crystal", position: { x: 3, y: 0 } },
  ],
};

// Level 5
export const level5: LevelData = {
  id: "level-5",
  name: "Level 5",
  difficulty: "Starter",
  minSteps: 13,
  hero: {
    position: { x: 0, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 0 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 3, y: 3 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 1, y: 2 } },
  ],
};
// Level 6
export const level6: LevelData = {
  id: "level-6",
  name: "Level 6",
  difficulty: "Starter",
  minSteps: 9,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 0, y: 0 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
  ],
};
// Level 7
export const level7: LevelData = {
  id: "level-7",
  name: "Level 7",
  difficulty: "Starter",
  minSteps: 8,
  hero: {
    position: { x: 4, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 4, y: 2 } },
  ],
};
// Level 8
export const level8: LevelData = {
  id: "level-8",
  name: "Level 8",
  difficulty: "Starter",
  minSteps: 7,
  hero: {
    position: { x: 2, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 4, y: 2 } },
  ],
};
// Level 9
export const level9: LevelData = {
  id: "level-9",
  name: "Level 9",
  difficulty: "Starter",
  minSteps: 8,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 3, y: 3 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 2, y: 3 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "box", position: { x: 1, y: 2 } },
  ],
};
// Level 10
export const level10: LevelData = {
  id: "level-10",
  name: "Level 10",
  difficulty: "Starter",
  minSteps: 12,
  hero: {
    position: { x: 2, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 1, y: 3 } },
  ],
};
// Level 11
export const level11: LevelData = {
  id: "level-11",
  name: "Level 11",
  difficulty: "Starter",
  minSteps: 10,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 1, y: 3 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
  ],
};
// Level 12
export const level12: LevelData = {
  id: "level-12",
  name: "Level 12",
  difficulty: "Starter",
  minSteps: 15,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
  ],
};
// Level 13
export const level13: LevelData = {
  id: "level-13",
  name: "Level 13",
  difficulty: "Starter",
  minSteps: 12,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 0, y: 3 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 0, y: 0 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 4, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
  ],
};
// Level 14
export const level14: LevelData = {
  id: "level-14",
  name: "Level 14",
  difficulty: "Starter",
  minSteps: 10,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "pillar", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
  ],
};
// Level 15
export const level15: LevelData = {
  id: "level-15",
  name: "Level 15",
  difficulty: "Starter",
  minSteps: 14,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "crystal", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 4, y: 2 } },
  ],
};
// Level 16
export const level16: LevelData = {
  id: "level-16",
  name: "Level 16",
  difficulty: "Starter",
  minSteps: 10,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 1, y: 3 } },
    { type: "box", position: { x: 0, y: 1 } },
  ],
};
// Level 17
export const level17: LevelData = {
  id: "level-17",
  name: "Level 17",
  difficulty: "Starter",
  minSteps: 15,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 1, y: 0 } },
    { type: "box", position: { x: 2, y: 2 } },
  ],
};
// Level 18
export const level18: LevelData = {
  id: "level-18",
  name: "Level 18",
  difficulty: "Starter",
  minSteps: 13,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
  ],
};
// Level 19
export const level19: LevelData = {
  id: "level-19",
  name: "Level 19",
  difficulty: "Starter",
  minSteps: 12,
  hero: {
    position: { x: 1, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 1, y: 1 } },
    { type: "crystal", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
  ],
};
// Level 20
export const level20: LevelData = {
  id: "level-20",
  name: "Level 20",
  difficulty: "Starter",
  minSteps: 17,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "pillar", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
  ],
};
// Level 21
export const level21: LevelData = {
  id: "level-21",
  name: "Level 21",
  difficulty: "Junior",
  minSteps: 9,
  hero: {
    position: { x: 3, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 3 } },
    { type: "box", position: { x: 0, y: 2 } },
    { type: "box", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 1, y: 1 } },
    { type: "monster", position: { x: 2, y: 1 } },
  ],
};
// Level 22
export const level22: LevelData = {
  id: "level-22",
  name: "Level 22",
  difficulty: "Junior",
  minSteps: 10,
  hero: {
    position: { x: 4, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 3, y: 0 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 4, y: 1 } },
    { type: "pillar", position: { x: 3, y: 3 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "sword", position: { x: 4, y: 3 } },
    { type: "monster", position: { x: 3, y: 2 } },
  ],
};
// Level 23
export const level23: LevelData = {
  id: "level-23",
  name: "Level 23",
  difficulty: "Junior",
  minSteps: 19,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 0, y: 0 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "sword", position: { x: 4, y: 2 } },
    { type: "monster", position: { x: 1, y: 1 } },
  ],
};
// Level 24
export const level24: LevelData = {
  id: "level-24",
  name: "Level 24",
  difficulty: "Junior",
  minSteps: 20,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 3, y: 3 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "sword", position: { x: 0, y: 0 } },
    { type: "monster", position: { x: 4, y: 2 } },
  ],
};
// Level 25
export const level25: LevelData = {
  id: "level-25",
  name: "Level 25",
  difficulty: "Junior",
  minSteps: 14,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 0, y: 0 } },
    { type: "crystal", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 1, y: 1 } },
    { type: "monster", position: { x: 2, y: 1 } },
  ],
};
// Level 26
export const level26: LevelData = {
  id: "level-26",
  name: "Level 26",
  difficulty: "Junior",
  minSteps: 18,
  hero: {
    position: { x: 2, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 1, y: 0 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "sword", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 2, y: 1 } },
  ],
};
// Level 27
export const level27: LevelData = {
  id: "level-27",
  name: "Level 27",
  difficulty: "Junior",
  minSteps: 25,
  hero: {
    position: { x: 4, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "sword", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 4, y: 1 } },
  ],
};
// Level 28
export const level28: LevelData = {
  id: "level-28",
  name: "Level 28",
  difficulty: "Junior",
  minSteps: 19,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 0, y: 0 } },
    { type: "crystal", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 2, y: 1 } },
  ],
};
// Level 29
export const level29: LevelData = {
  id: "level-29",
  name: "Level 29",
  difficulty: "Junior",
  minSteps: 19,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "sword", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 2, y: 2 } },
  ],
};
// Level 30
export const level30: LevelData = {
  id: "level-30",
  name: "Level 30",
  difficulty: "Junior",
  minSteps: 24,
  hero: {
    position: { x: 3, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 4, y: 1 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 4, y: 0 } },
    { type: "monster", position: { x: 2, y: 3 } },
  ],
};
// Level 31
export const level31: LevelData = {
  id: "level-31",
  name: "Level 31",
  difficulty: "Junior",
  minSteps: 29,
  hero: {
    position: { x: 4, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 4, y: 2 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 32
export const level32: LevelData = {
  id: "level-32",
  name: "Level 32",
  difficulty: "Junior",
  minSteps: 27,
  hero: {
    position: { x: 4, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 0 } },
    { type: "pillar", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 3, y: 0 } },
  ],
};

// Export all levels as an array for easy iteration
export const ALL_LEVELS: LevelData[] = [
  level0,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level11,
  level12,
  level13,
  level14,
  level15,
  level16,
  level17,
  level18,
  level19,
  level20,
  level21,
  level22,
  level23,
  level24,
  level25,
  level26,
  level27,
  level28,
  level29,
  level30,
  level31,
  level32,
];

// Helper to get level by ID
export function getLevelById(id: string): LevelData | undefined {
  return ALL_LEVELS.find((level) => level.id === id);
}

// Helper to get next level
export function getNextLevel(currentId: string): LevelData | undefined {
  const currentIndex = ALL_LEVELS.findIndex((level) => level.id === currentId);
  if (currentIndex >= 0 && currentIndex < ALL_LEVELS.length - 1) {
    return ALL_LEVELS[currentIndex + 1];
  }
  return undefined;
}
