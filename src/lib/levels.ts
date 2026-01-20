import { CubeFace, LevelData } from "./game-types";

// --------------------
// Tutorial Levels (EN/VI)
// Note: Tutorials are designed to teach mechanics; they are not necessarily "winnable"
// in a single obvious path because the main game has a strict win condition.
// --------------------

export const tutorial1: LevelData = {
  id: "tutorial-1",
  name: "T1 — Basic Movement",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Basic Movement",
    vi: "Di chuyển cơ bản",
  },
  tutorialBody: {
    en: "Roll the cube using WASD/Arrow keys. Each roll moves 1 tile. You can also drag with the mouse to rotate the camera around the board.\nAll direction hints in tutorials (Up, Down, Left, Right) assume the default camera view: looking from behind the board toward the door.",
    vi: "Dùng WASD/phím mũi tên để lăn khối. Mỗi lần lăn đi 1 ô. Bạn cũng có thể kéo chuột để xoay góc nhìn xung quanh bàn chơi.\nMọi hướng dẫn di chuyển trong tutorial (Lên, Xuống, Trái, Phải) đều được mô tả theo **góc nhìn mặc định**: nhìn từ phía sau bàn cờ hướng về phía cánh cửa.",
  },
  tutorialSteps: {
    en: ["Try rolling in all 4 directions."],
    vi: ["Hãy thử lăn theo cả 4 hướng."],
  },
  hero: {
    position: { x: 2, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [],
};

export const tutorial2: LevelData = {
  id: "tutorial-2",
  name: "T2 — Obstacles",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Obstacles: Box, Pillar, Monster",
    vi: "Chướng ngại: Hộp, Cột, Quái vật",
  },
  tutorialBody: {
    en: "Some tiles block your roll: Box, Pillar, and Monster. You cannot roll through them.",
    vi: "Một số ô chặn đường lăn của bạn: Hộp, Cột và Quái vật. Bạn không thể lăn xuyên qua chúng.",
  },
  tutorialSteps: {
    en: [
      "Try rolling toward each obstacle and see that you cannot pass through.",
      "Boxes, pillars, and monsters all block movement.",
    ],
    vi: [
      "Hãy thử lăn về phía từng chướng ngại và thấy rằng bạn không thể lăn xuyên qua.",
      "Hộp, cột và quái vật đều chặn đường.",
    ],
  },
  hero: {
    position: { x: 1, y: 2 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "box", position: { x: 0, y: 2 } },
    { type: "pillar", position: { x: 2, y: 2 } },
    { type: "monster", position: { x: 1, y: 1 } },
  ],
};

export const tutorial3: LevelData = {
  id: "tutorial-3",
  name: "T3 — Keyhole & Key",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Keyhole & Key",
    vi: "Ổ khóa & Chìa khóa",
  },
  tutorialBody: {
    en: "The key is also an obstacle: you cannot roll onto it normally. You can only move onto the key tile and pick it up by rolling onto it with the Keyhole face (bottom face of the hero).",
    vi: "Chìa khóa cũng là một chướng ngại: bạn không thể lăn lên ô có chìa như bình thường. Bạn CHỈ có thể lăn lên Chìa Khóa và nhặt nó khi lăn lên nó bằng mặt Ổ Khóa (nằm dưới đáy nhân vật)",
  },
  tutorialSteps: {
    en: [
      "First, try rolling onto the key when the bottom is NOT Keyhole — the move is blocked like other obstacles.",
      "Next, roll the sequence: Up → Left → Down to pick up the key.",
    ],
    vi: [
      "Đầu tiên, hãy thử lăn lên ô có chìa khi mặt đáy KHÔNG phải Ổ khóa — nước đi sẽ bị chặn giống các chướng ngại khác.",
      "Hãy thử lăn theo thứ tự: Lên → Trái → Xuống để nhặt được chìa khóa.",
    ],
  },
  hero: {
    position: { x: 3, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [{ type: "key", position: { x: 2, y: 1 } }],
};

export const tutorial4: LevelData = {
  id: "tutorial-4",
  name: "T4 — Crystal Rule",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Crystal Rule",
    vi: "Luật Pha lê",
  },
  tutorialBody: {
    en: "Crystals are also obstacles: normally they block your roll. You can pass through crystals ONLY if the landing bottom is Keyhole AND you have not picked up the key yet.",
    vi: "Pha lê cũng là một chướng ngại: bình thường chúng chặn đường lăn của bạn. Bạn chỉ đi xuyên qua pha lê khi mặt đáy là Ổ Khóa VÀ bạn chưa nhặt Chìa Khóa.",
  },
  tutorialSteps: {
    en: [
      "1) First, try rolling onto the LEFT crystal. You cannot move because the next bottom face is not Keyhole.",
      "2) Then roll Up → Right → Down. Now you can roll onto the LEFT crystal because the bottom face is Keyhole.",
      "3) Next, try to pick up the key by rolling Up → Right → Down.",
      "4) Finally, try the sequence Up → Left → Down. The last Down move is blocked because you have already picked up the key, so the crystal becomes a solid obstacle again.",
    ],
    vi: [
      "1) Đầu tiên, hãy thử lăn vào pha lê BÊN TRÁI. Bạn sẽ không lăn được vì mặt đáy tiếp theo không phải là Ổ Khóa.",
      "2) Tiếp theo, lăn lần lượt: Lên → Phải → Xuống. Lúc này bạn sẽ lăn được lên pha lê BÊN PHẢI vì mặt đáy là Ổ Khóa.",
      "3) Sau đó, thử nhặt chìa khóa bằng cách lăn: Lên → Phải → Xuống.",
      "4) Cuối cùng, thử chuỗi: Lên → Trái → Xuống. Bước Xuống cuối cùng sẽ không thực hiện được vì bạn đã nhặt Chìa Khóa, nên pha lê lại trở thành chướng ngại chặn đường.",
    ],
  },
  hero: {
    position: { x: 1, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "crystal", position: { x: 0, y: 1 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "key", position: { x: 3, y: 1 } },
  ],
};

export const tutorial5: LevelData = {
  id: "tutorial-5",
  name: "T5 — Shield & Rotate",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Shield & Rotate",
    vi: "Khiên & Xoay",
  },
  tutorialBody: {
    en: "You can rotate in place ONLY when the bottom face is Shield. Rotation changes orientation without moving tiles. You also cannot rotate if any adjacent (non-diagonal) tile contains a Box or Monster.",
    vi: "Bạn có thể xoay khi mặt đáy là Khiên. Xoay đổi hướng mà không di chuyển ô. Ngoài ra, bạn sẽ KHÔNG thể xoay nếu có bất kỳ Hộp hoặc Quái vật nào ở ô liền kề (không tính đường chéo).",
  },
  tutorialSteps: {
    en: ["Get Shield to the bottom, then rotate (Q/E/X)."],
    vi: ["Đưa Khiên xuống đáy rồi xoay (Q/E/X)."],
  },
  hero: {
    position: { x: 1, y: 1 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "monster", position: { x: 4, y: 2 } },
    { type: "box", position: { x: 0, y: 3 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "key", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 1, y: 3 } },
  ],
};

export const tutorial6: LevelData = {
  id: "tutorial-6",
  name: "T6 — Sword & Monster",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Sword & Monster",
    vi: "Kiếm & Quái vật",
  },
  tutorialBody: {
    en: "You can always roll onto the sword tile. If you land with Weapon on bottom, you pick up the sword and the monster flees (this adds +1 step).",
    vi: "Bạn luôn có thể lăn lên ô kiếm. Nếu mặt đáy là Vũ khí, bạn nhặt kiếm và quái vật bỏ chạy (tính thêm +1 bước).",
  },
  tutorialSteps: {
    en: [
      "Try landing on the sword with Weapon on the bottom.",
      "Watch the step counter: picking up sword costs 2 steps total.",
    ],
    vi: [
      "Hãy đáp xuống ô kiếm với mặt đáy là Vũ khí.",
      "Xem bộ đếm bước: nhặt kiếm tổng tốn 2 bước.",
    ],
  },
  hero: {
    position: { x: 1, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.FACE,
    rightFace: CubeFace.WEAPON,
  },
  objects: [
    { type: "sword", position: { x: 2, y: 3 } },
    { type: "monster", position: { x: 4, y: 3 } },
  ],
};

export const tutorial7: LevelData = {
  id: "tutorial-7",
  name: "T7 — Escape Flow",
  difficulty: "Tutorial",
  minSteps: 0,
  isTutorial: true,
  tutorialTitle: {
    en: "Winning Condition",
    vi: "Điều kiện thắng",
  },
  tutorialBody: {
    en: "To escape the dungeon, you need: 1) To pick up the key, and 2) To stand in front of the door with the Keyhole face at bottom and the hero's face pointing towards the door.",
    vi: "Để thoát khỏi ngục tối, bạn cần: 1) Nhặt chìa khóa, và 2) Đứng trước cửa với mặt Ổ Khóa ở đáy và Mặt nhân vật hướng về cửa.",
  },
  tutorialSteps: {
    en: [],
    vi: [],
  },
  hero: {
    position: { x: 0, y: 3 },
    topFace: CubeFace.HEAD,
    frontFace: CubeFace.SHIELD,
    rightFace: CubeFace.FACE,
  },
  objects: [
    { type: "pillar", position: { x: 4, y: 0 } },
    { type: "box", position: { x: 1, y: 2 } },
    { type: "monster", position: { x: 2, y: 2 } },
    { type: "crystal", position: { x: 3, y: 2 } },
    { type: "pillar", position: { x: 0, y: 2 } },
    { type: "crystal", position: { x: 2, y: 1 } },
    { type: "key", position: { x: 4, y: 3 } },
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
  minSteps: 10,
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
  tutorial1,
  tutorial2,
  tutorial3,
  tutorial4,
  tutorial5,
  tutorial6,
  tutorial7,
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
