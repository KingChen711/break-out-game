"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroState, CubeFace, FACE_LABELS } from "@/lib/game-types";

interface GameInfoProps {
  hero: HeroState;
  moveCount: number;
  hasWon: boolean;
}

export function GameInfo({ hero, moveCount, hasWon }: GameInfoProps) {
  return (
    <Card className="bg-stone-900/90 border-stone-700 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
          <span>📊</span> Hero Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Win state */}
        {hasWon && (
          <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-center font-bold animate-pulse">
            🎉 Victory! 🎉
          </div>
        )}

        {/* Step counter */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-400">Steps:</span>
          <span className="text-amber-300 font-mono text-lg">{moveCount}</span>
        </div>

        {/* Key status */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-400">Key:</span>
          <span className={hero.hasKey ? "text-green-400" : "text-red-400"}>
            {hero.hasKey ? "✓ Collected" : "✗ Not found"}
          </span>
        </div>
        {/* Key status */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-400">Sword:</span>
          <span className={hero.hasSword ? "text-green-400" : "text-red-400"}>
            {hero.hasSword ? "✓ Collected" : "✗ Not found"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
