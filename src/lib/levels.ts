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
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 0, y: 3 } },
    { type: "monster", position: { x: 4, y: 3 } },
  ],
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
// Level 33
export const level33: LevelData = {
  id: "level-33",
  name: "Level 33",
  difficulty: "Expert",
  minSteps: 10,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [{ type: "key", position: { x: 0, y: 3 } }],
};
// Level 34
export const level34: LevelData = {
  id: "level-34",
  name: "Level 34",
  difficulty: "Expert",
  minSteps: 12,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 3, y: 1 } },
  ],
};
// Level 35
export const level35: LevelData = {
  id: "level-35",
  name: "Level 35",
  difficulty: "Expert",
  minSteps: 9,
  hero: {
    position: { x: 3, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 3, y: 0 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 4, y: 2 } },
  ],
};
// Level 36
export const level36: LevelData = {
  id: "level-36",
  name: "Level 36",
  difficulty: "Expert",
  minSteps: 17,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 3 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 1, y: 2 } },
  ],
};
// Level 37
export const level37: LevelData = {
  id: "level-37",
  name: "Level 37",
  difficulty: "Expert",
  minSteps: 28,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 4, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 3 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 0, y: 2 } },
    { type: "sword", position: { x: 4, y: 0 } },
    { type: "monster", position: { x: 3, y: 2 } },
  ],
};
// Level 36
export const level38: LevelData = {
  id: "level-38",
  name: "Level 38",
  difficulty: "Expert",
  minSteps: 17,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 4, y: 3 } },
  ],
};
// Level 39
export const level39: LevelData = {
  id: "level-39",
  name: "Level 39",
  difficulty: "Expert",
  minSteps: 21,
  hero: {
    position: { x: 1, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 0, y: 3 } },
    { type: "crystal", position: { x: 3, y: 0 } },
    { type: "sword", position: { x: 4, y: 0 } },
    { type: "monster", position: { x: 2, y: 3 } },
  ],
};
// Level 40
export const level40: LevelData = {
  id: "level-40",
  name: "Level 40",
  difficulty: "Expert",
  minSteps: 28,
  hero: {
    position: { x: 2, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "monster", position: { x: 2, y: 1 } },
    { type: "sword", position: { x: 0, y: 3 } },
  ],
};
// Level 41
export const level41: LevelData = {
  id: "level-41",
  name: "Level 41",
  difficulty: "Expert",
  minSteps: 22,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 3, y: 3 } },
  ],
};
// Level 42
export const level42: LevelData = {
  id: "level-42",
  name: "Level 42",
  difficulty: "Expert",
  minSteps: 19,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 4, y: 3 } },
    { type: "sword", position: { x: 2, y: 1 } },
    { type: "monster", position: { x: 1, y: 2 } },
  ],
};
// Level 43
export const level43: LevelData = {
  id: "level-43",
  name: "Level 43",
  difficulty: "Expert",
  minSteps: 22,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "pillar", position: { x: 0, y: 3 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "crystal", position: { x: 3, y: 1 } },
    { type: "monster", position: { x: 2, y: 2 } },
    { type: "sword", position: { x: 4, y: 2 } },
  ],
};
// Level 44
export const level44: LevelData = {
  id: "level-44",
  name: "Level 44",
  difficulty: "Expert",
  minSteps: 29,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 1, y: 1 } },
    { type: "sword", position: { x: 4, y: 3 } },
  ],
};
// Level 45
export const level45: LevelData = {
  id: "level-45",
  name: "Level 45",
  difficulty: "Expert",
  minSteps: 23,
  hero: {
    position: { x: 3, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 4, y: 1 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 3, y: 1 } },
    { type: "monster", position: { x: 1, y: 3 } },
    { type: "sword", position: { x: 3, y: 3 } },
  ],
};
// Level 46
export const level46: LevelData = {
  id: "level-46",
  name: "Level 46",
  difficulty: "Expert",
  minSteps: 34,
  hero: {
    position: { x: 3, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 3, y: 0 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "monster", position: { x: 1, y: 3 } },
    { type: "sword", position: { x: 1, y: 2 } },
  ],
};
// Level 47
export const level47: LevelData = {
  id: "level-47",
  name: "Level 47",
  difficulty: "Expert",
  minSteps: 32,
  hero: {
    position: { x: 1, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 0, y: 0 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 4, y: 3 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 1, y: 0 } },
    { type: "sword", position: { x: 1, y: 3 } },
  ],
};
// Level 48
export const level48: LevelData = {
  id: "level-48",
  name: "Level 48",
  difficulty: "Expert",
  minSteps: 15,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 1, y: 2 } },
  ],
};

// Level 49
export const level49: LevelData = {
  id: "level-49",
  name: "Level 49",
  difficulty: "Master",
  minSteps: 22,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 1, y: 1 } },
  ],
};

// Level 50
export const level50: LevelData = {
  id: "level-50",
  name: "Level 50",
  difficulty: "Master",
  minSteps: 19,
  hero: {
    position: { x: 1, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 3, y: 3 } },
    { type: "monster", position: { x: 3, y: 1 } },
    { type: "sword", position: { x: 2, y: 3 } },
  ],
};

// Level 51
export const level51: LevelData = {
  id: "level-51",
  name: "Level 51",
  difficulty: "Master",
  minSteps: 36,
  hero: {
    position: { x: 4, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 2, y: 3 } },
  ],
};

// Level 52
export const level52: LevelData = {
  id: "level-52",
  name: "Level 52",
  difficulty: "Master",
  minSteps: 30,
  hero: {
    position: { x: 2, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "monster", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 4, y: 0 } },
  ],
};
// Level 53
export const level53: LevelData = {
  id: "level-53",
  name: "Level 53",
  difficulty: "Master",
  minSteps: 30,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 3 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "monster", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 4, y: 0 } },
  ],
};
// Level 54
export const level54: LevelData = {
  id: "level-54",
  name: "Level 54",
  difficulty: "Master",
  minSteps: 26,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 0, y: 0 } },
    { type: "monster", position: { x: 2, y: 1 } },
    { type: "sword", position: { x: 0, y: 3 } },
  ],
};
// Level 55
export const level55: LevelData = {
  id: "level-55",
  name: "Level 55",
  difficulty: "Master",
  minSteps: 33,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 1, y: 0 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 0, y: 0 } },
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 2, y: 2 } },
    { type: "sword", position: { x: 0, y: 1 } },
  ],
};
// Level 56
export const level56: LevelData = {
  id: "level-56",
  name: "Level 56",
  difficulty: "Master",
  minSteps: 38,
  hero: {
    position: { x: 2, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 4, y: 2 } },
    { type: "monster", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 4, y: 3 } },
  ],
};
// Level 57
export const level57: LevelData = {
  id: "level-57",
  name: "Level 57",
  difficulty: "Master",
  minSteps: 28,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "crystal", position: { x: 3, y: 3 } },
    { type: "monster", position: { x: 2, y: 1 } },
    { type: "sword", position: { x: 2, y: 3 } },
  ],
};
// Level 58
export const level58: LevelData = {
  id: "level-58",
  name: "Level 58",
  difficulty: "Master",
  minSteps: 34,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 3, y: 0 } },
    { type: "box", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "monster", position: { x: 3, y: 1 } },
    { type: "sword", position: { x: 0, y: 1 } },
  ],
};
// Level 59
export const level59: LevelData = {
  id: "level-59",
  name: "Level 59",
  difficulty: "Master",
  minSteps: 28,
  hero: {
    position: { x: 4, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 0, y: 0 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 0, y: 1 } },
    { type: "sword", position: { x: 3, y: 3 } },
  ],
};
// Level 60
export const level60: LevelData = {
  id: "level-60",
  name: "Level 60",
  difficulty: "Master",
  minSteps: 42,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 0, y: 0 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 1, y: 0 } },
    { type: "sword", position: { x: 0, y: 3 } },
  ],
};

// Level 61
export const level61: LevelData = {
  id: "level-61",
  name: "Level 61",
  difficulty: "Master",
  minSteps: 36,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 3, y: 0 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "monster", position: { x: 2, y: 2 } },
    { type: "sword", position: { x: 2, y: 1 } },
  ],
};

// Level 62
export const level62: LevelData = {
  id: "level-62",
  name: "Level 62",
  difficulty: "Master",
  minSteps: 37,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 0, y: 0 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 3, y: 0 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 1, y: 2 } },
    { type: "sword", position: { x: 0, y: 2 } },
  ],
};

// Level 63
export const level63: LevelData = {
  id: "level-63",
  name: "Level 63",
  difficulty: "Master",
  minSteps: 26,
  hero: {
    position: { x: 2, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 3, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 0, y: 3 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 1, y: 2 } },
    { type: "monster", position: { x: 3, y: 0 } },
    { type: "sword", position: { x: 2, y: 3 } },
  ],
};

// Level 64
export const level64: LevelData = {
  id: "level-64",
  name: "Level 64",
  difficulty: "Master",
  minSteps: 23,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 4, y: 0 } },
    { type: "sword", position: { x: 3, y: 0 } },
  ],
};
// Level 65
export const level65: LevelData = {
  id: "level-65",
  name: "Level 65",
  difficulty: "Wizard",
  minSteps: 38,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 4, y: 3 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 4, y: 0 } },
    { type: "monster", position: { x: 0, y: 2 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 66
export const level66: LevelData = {
  id: "level-66",
  name: "Level 66",
  difficulty: "Wizard",
  minSteps: 45,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 3, y: 3 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "box", position: { x: 3, y: 0 } },
    { type: "pillar", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 2, y: 1 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 67
export const level67: LevelData = {
  id: "level-67",
  name: "Level 67",
  difficulty: "Wizard",
  minSteps: 26,
  hero: {
    position: { x: 1, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 4, y: 3 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "monster", position: { x: 2, y: 3 } },
    { type: "sword", position: { x: 3, y: 3 } },
  ],
};
// Level 68
export const level68: LevelData = {
  id: "level-68",
  name: "Level 68",
  difficulty: "Wizard",
  minSteps: 36,
  hero: {
    position: { x: 1, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 4, y: 1 } },
    { type: "box", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 1, y: 3 } },
    { type: "monster", position: { x: 3, y: 0 } },
    { type: "sword", position: { x: 0, y: 3 } },
  ],
};
// Level 69
export const level69: LevelData = {
  id: "level-69",
  name: "Level 69",
  difficulty: "Wizard",
  minSteps: 33,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 1, y: 0 } },
    { type: "sword", position: { x: 3, y: 3 } },
  ],
};
// Level 70
export const level70: LevelData = {
  id: "level-70",
  name: "Level 70",
  difficulty: "Wizard",
  minSteps: 33,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "monster", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 4, y: 0 } },
  ],
};
// Level 71
export const level71: LevelData = {
  id: "level-71",
  name: "Level 71",
  difficulty: "Wizard",
  minSteps: 32,
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 4, y: 1 } },
    { type: "crystal", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 2, y: 1 } },
    { type: "sword", position: { x: 4, y: 3 } },
  ],
};
// Level 72
export const level72: LevelData = {
  id: "level-72",
  name: "Level 72",
  difficulty: "Wizard",
  minSteps: 37,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "key", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 2, y: 3 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 0, y: 0 } },
    { type: "sword", position: { x: 4, y: 3 } },
  ],
};
// Level 73
export const level73: LevelData = {
  id: "level-73",
  name: "Level 73",
  difficulty: "Wizard",
  minSteps: 17,
  hero: {
    position: { x: 1, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 0, y: 2 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 1, y: 0 } },
    { type: "pillar", position: { x: 3, y: 2 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 1, y: 2 } },
    { type: "monster", position: { x: 3, y: 3 } },
    { type: "sword", position: { x: 1, y: 1 } },
  ],
};
// Level 74
export const level74: LevelData = {
  id: "level-74",
  name: "Level 74",
  difficulty: "Wizard",
  minSteps: 26,
  hero: {
    position: { x: 4, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 0, y: 0 } },
    { type: "box", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 4, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 1, y: 3 } },
  ],
};
// Level 75
export const level75: LevelData = {
  id: "level-75",
  name: "Level 75",
  difficulty: "Wizard",
  minSteps: 29,
  hero: {
    position: { x: 3, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.WEAPON,
    rightFace: CubeFace.BACK,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 1, y: 1 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "pillar", position: { x: 4, y: 2 } },
    { type: "crystal", position: { x: 3, y: 1 } },
    { type: "monster", position: { x: 3, y: 2 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 76
export const level76: LevelData = {
  id: "level-76",
  name: "Level 76",
  difficulty: "Wizard",
  minSteps: 27,
  hero: {
    position: { x: 2, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 1 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 1, y: 1 } },
  ],
};
// Level 77
export const level77: LevelData = {
  id: "level-77",
  name: "Level 77",
  difficulty: "Wizard",
  minSteps: 30,
  hero: {
    position: { x: 0, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 1, y: 2 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "monster", position: { x: 0, y: 2 } },
    { type: "sword", position: { x: 4, y: 2 } },
  ],
};
// Level 78
export const level78: LevelData = {
  id: "level-78",
  name: "Level 78",
  difficulty: "Wizard",
  minSteps: 38,
  hero: {
    position: { x: 0, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.BACK,
    rightFace: CubeFace.SHIELD,
  },
  objects: [
    { type: "key", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 0, y: 1 } },
    { type: "box", position: { x: 2, y: 3 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "pillar", position: { x: 3, y: 1 } },
    { type: "crystal", position: { x: 1, y: 1 } },
    { type: "crystal", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 3, y: 0 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 79
export const level79: LevelData = {
  id: "level-79",
  name: "Level 79",
  difficulty: "Wizard",
  minSteps: 40,
  hero: {
    position: { x: 2, y: 0 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 0, y: 3 } },
    { type: "box", position: { x: 3, y: 1 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 1, y: 0 } },
    { type: "crystal", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 4, y: 0 } },
    { type: "sword", position: { x: 0, y: 0 } },
  ],
};
// Level 80
export const level80: LevelData = {
  id: "level-80",
  name: "Level 80",
  difficulty: "Wizard",
  minSteps: 49,
  hero: {
    position: { x: 0, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "key", position: { x: 2, y: 2 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "box", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 2, y: 1 } },
    { type: "crystal", position: { x: 4, y: 1 } },
    { type: "monster", position: { x: 0, y: 0 } },
    { type: "sword", position: { x: 2, y: 3 } },
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
  level33,
  level34,
  level35,
  level36,
  level37,
  level38,
  level39,
  level40,
  level41,
  level42,
  level43,
  level44,
  level45,
  level46,
  level47,
  level48,
  level49,
  level50,
  level51,
  level52,
  level53,
  level54,
  level55,
  level56,
  level57,
  level58,
  level59,
  level60,
  level61,
  level62,
  level63,
  level64,
  level65,
  level66,
  level67,
  level68,
  level69,
  level70,
  level71,
  level72,
  level73,
  level74,
  level75,
  level76,
  level77,
  level78,
  level79,
  level80,
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
