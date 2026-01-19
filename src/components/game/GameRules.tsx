"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";

type Language = "en" | "vi";

const rules = {
  en: {
    title: "Game Rules",
    movement: {
      title: "Movement",
      items: [
        "The hero cube can **roll** in 4 directions (up, down, left, right) or **rotate** in place.",
        "Rolling moves the cube one tile and changes which face is on the bottom.",
      ],
    },
    obstacles: {
      title: "Obstacles & Items",
      items: [
        "**Box, Monster, Pillar**: Cannot roll through these obstacles.",
        "**Key**: Can roll onto key only if the landing bottom face is the **Keyhole**. The key will be picked up automatically.",
        "**Crystal**: Can pass through crystal only if the landing bottom face is the **Keyhole** AND you have not picked up the key yet. After picking up the key, crystals will block you.",
        "**Sword**: Can always roll onto the sword position. If the landing bottom face is the **Weapon**, you will pick up the sword and the monster will flee from the map.",
      ],
    },
    rotation: {
      title: "Rotation",
      items: [
        "To rotate the cube in place, the bottom face must be the **Shield**.",
        "Cannot rotate if there is a **Monster** or **Box** in any adjacent tile. (not counting diagonal adjacency)",
      ],
    },
    winning: {
      title: "Winning Condition",
      items: [
        "To escape the dungeon, the hero must:",
        "1. Have the **Key** in possession",
        "2. Stand on the **Lock** position (in front of the door)",
        "3. Bottom face must be the **Keyhole**",
        "4. The hero's **Face** must be facing the door",
      ],
    },
    tips: {
      title: "Tips & Tricks",
      items: [
        "Don't hesitate to **start over** a challenge when you get lost. Starting from the beginning will often lead to new insights and will help solve the challenge.",
        "The **orientation** of the hero is the key to the game. Always think about the position the hero needs to arrive at in each step of the escape and plan accordingly: picking up the weapon to remove the monster, picking up the magic key, and facing the gate in upright position.",
        'Try making several **loops on a 2x2 grid**. See what happens to the orientation of the hero when you make these loops. You will notice that the "outside faces" of the hero (helmet, shield, backpack) will always stay on the outside of the loop and "inside faces" will land on every square of the 2x2 grid.',
        "When moving around on a **2x3 grid** however, you will notice there are a lot more possibilities and that you can orientate the hero in any way on any spot.",
        "If you are able to rotate on the **Shield** on any spot in the 4th column and you can roll freely via the middle column to the gate, you will always be able to escape. Knowing this, you can focus on getting the hero with his shield on one of these 4 spots, which will often be easier than trying to go to the door directly.",
      ],
    },
  },
  vi: {
    title: "Luật Chơi",
    movement: {
      title: "Di Chuyển",
      items: [
        "Khối anh hùng có thể **lăn** theo 4 hướng (lên, xuống, trái, phải) hoặc **xoay** tại chỗ.",
        "Lăn sẽ di chuyển khối một ô và thay đổi mặt nào ở dưới đáy.",
      ],
    },
    obstacles: {
      title: "Chướng Ngại Vật & Vật Phẩm",
      items: [
        "**Hộp, Quái vật, Cột**: Không thể lăn qua những chướng ngại vật này.",
        "**Chìa khóa**: Chỉ có thể lăn lên chìa khóa nếu mặt đáy là **Ổ khóa**. Chìa khóa sẽ được nhặt tự động.",
        "**Pha lê**: Chỉ có thể đi qua pha lê nếu mặt đáy là **Ổ khóa** VÀ bạn chưa nhặt chìa khóa. Sau khi nhặt chìa khóa, pha lê sẽ chặn đường.",
        "**Kiếm**: Luôn có thể lăn vào vị trí có kiếm. Nếu mặt đáy là **Vũ khí**, bạn sẽ nhặt kiếm và quái vật sẽ sợ hãi bỏ chạy khỏi bản đồ.",
      ],
    },
    rotation: {
      title: "Xoay",
      items: [
        "Để xoay khối tại chỗ, mặt đáy phải là **Khiên**.",
        "Không thể xoay nếu có **Quái vật** hoặc **Hộp** ở bất kỳ ô liền kề nào. (không tính liền kề chéo)",
      ],
    },
    winning: {
      title: "Điều Kiện Chiến Thắng",
      items: [
        "Để thoát khỏi ngục tối, anh hùng phải:",
        "1. Có **Chìa khóa** trong tay",
        "2. Đứng trên vị trí **Khóa cửa** (trước cửa ra)",
        "3. Mặt đáy phải là **Ổ khóa**",
        "4. **Mặt** của anh hùng phải hướng về cửa",
      ],
    },
    tips: {
      title: "Mẹo & Thủ Thuật",
      items: [
        "Đừng ngại **bắt đầu lại** thử thách khi bạn bị lạc. Bắt đầu từ đầu thường sẽ mang lại những hiểu biết mới và giúp giải quyết thử thách.",
        "**Hướng** của anh hùng là chìa khóa của trò chơi. Luôn nghĩ về vị trí mà anh hùng cần đến ở mỗi bước thoát hiểm và lên kế hoạch phù hợp: nhặt **Kiếm** để loại bỏ **Quái vật**, nhặt **Chìa khóa**, và đối mặt với **Cổng** ở tư thế đứng thẳng.",
        'Thử thực hiện nhiều **vòng lặp trên lưới 2x2**. Xem điều gì xảy ra với hướng của anh hùng khi bạn thực hiện các vòng lặp này. Bạn sẽ nhận thấy rằng "các mặt bên ngoài" của anh hùng (mũ giáp, khiên, ba lô) sẽ luôn ở bên ngoài vòng lặp và "các mặt bên trong" sẽ rơi vào mọi ô của lưới 2x2.',
        "Tuy nhiên, khi di chuyển trên **lưới 2x3**, bạn sẽ nhận thấy có nhiều khả năng hơn và bạn có thể định hướng anh hùng theo bất kỳ cách nào trên bất kỳ vị trí nào.",
        "Nếu bạn có thể xoay trên **Khiên** ở bất kỳ vị trí nào trong cột thứ 4 và bạn có thể lăn tự do qua cột giữa đến cổng, bạn sẽ luôn có thể thoát ra. Biết điều này, bạn có thể tập trung vào việc đưa anh hùng với khiên của mình đến một trong 4 vị trí này, điều này thường dễ hơn so với cố gắng đi thẳng đến cửa.",
      ],
    },
  },
};

function formatText(text: string) {
  // Convert **text** to bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold text-amber-400">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

interface GameRulesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameRulesDialog({ isOpen, onClose }: GameRulesDialogProps) {
  const [language, setLanguage] = useState<Language>("en");
  const t = rules[language];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-linear-to-br from-stone-800 to-stone-900 rounded-2xl shadow-2xl border border-amber-500/30 max-w-2xl w-full max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-700">
          <h2 className="text-2xl font-bold text-amber-400">{t.title}</h2>
          <div className="flex gap-2 items-center">
            <Button
              size="sm"
              variant={language === "en" ? "default" : "outline"}
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "bg-amber-600 hover:bg-amber-700 text-white h-8 px-3"
                  : "bg-stone-700 border-stone-600 hover:bg-stone-600 text-stone-300 h-8 px-3"
              }
            >
              EN
            </Button>
            <Button
              size="sm"
              variant={language === "vi" ? "default" : "outline"}
              onClick={() => setLanguage("vi")}
              className={
                language === "vi"
                  ? "bg-amber-600 hover:bg-amber-700 text-white h-8 px-3"
                  : "bg-stone-700 border-stone-600 hover:bg-stone-600 text-stone-300 h-8 px-3"
              }
            >
              VI
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="text-stone-400 hover:text-white hover:bg-stone-700 h-8 w-8 p-0 ml-2"
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Content */}
        <ScrollArea className="p-6 space-y-5 overflow-y-auto max-h-[calc(85vh-80px)]">
          {/* Movement */}
          <section>
            <h3 className="font-semibold text-cyan-400 mb-2 text-lg">🎲 {t.movement.title}</h3>
            <ul className="space-y-2 text-stone-300">
              {t.movement.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  • {formatText(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* Obstacles */}
          <section>
            <h3 className="font-semibold text-cyan-400 mb-2 text-lg">🧱 {t.obstacles.title}</h3>
            <ul className="space-y-2 text-stone-300">
              {t.obstacles.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  • {formatText(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* Rotation */}
          <section>
            <h3 className="font-semibold text-cyan-400 mb-2 text-lg">🔄 {t.rotation.title}</h3>
            <ul className="space-y-2 text-stone-300">
              {t.rotation.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  • {formatText(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* Winning */}
          <section>
            <h3 className="font-semibold text-cyan-400 mb-2 text-lg">🏆 {t.winning.title}</h3>
            <ul className="space-y-2 text-stone-300">
              {t.winning.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {formatText(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* Tips & Tricks */}
          <section>
            <h3 className="font-semibold text-yellow-400 mb-2 text-lg">💡 {t.tips.title}</h3>
            <ol className="space-y-3 text-stone-300 list-decimal list-inside">
              {t.tips.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {formatText(item)}
                </li>
              ))}
            </ol>
          </section>
        </ScrollArea>
      </div>
    </div>
  );
}

interface GameRulesButtonProps {
  onClick: () => void;
}

export function GameRulesButton({ onClick }: GameRulesButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full bg-stone-800/50 border-stone-600 hover:bg-stone-700 text-amber-100"
    >
      📜 Rules / Luật Chơi
    </Button>
  );
}
