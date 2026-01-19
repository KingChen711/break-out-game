"use client";

import { Button } from "@/components/ui/button";
import { Direction, Rotation } from "@/lib/game-types";

interface GameControlsProps {
  onRoll: (direction: Direction) => void;
  onRotate: (rotation: Rotation) => void;
  disabled: boolean;
}

export function GameControls({ onRoll, onRotate, disabled }: GameControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Direction controls */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-amber-400/80 uppercase tracking-wider mb-1">
          Roll
        </h3>

        {/* Up button */}
        <Button
          variant="outline"
          size="lg"
          onClick={() => onRoll("up")}
          disabled={disabled}
          className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-stone-700 hover:border-amber-500/50 text-amber-100 text-xl transition-all"
        >
          ↑
        </Button>

        {/* Left, Down, Right buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRoll("left")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-stone-700 hover:border-amber-500/50 text-amber-100 text-xl transition-all"
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRoll("down")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-stone-700 hover:border-amber-500/50 text-amber-100 text-xl transition-all"
          >
            ↓
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRoll("right")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-stone-700 hover:border-amber-500/50 text-amber-100 text-xl transition-all"
          >
            →
          </Button>
        </div>
      </div>

      {/* Rotation controls */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <h3 className="text-sm font-semibold text-cyan-400/80 uppercase tracking-wider mb-1">
          Rotate
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRotate("clockwise")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-cyan-900/50 hover:border-cyan-500/50 text-cyan-100 text-xl transition-all"
          >
            ↻
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRotate("turnaround")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-cyan-900/50 hover:border-cyan-500/50 text-cyan-100 text-xl transition-all"
            title="Turn around (180°)"
          >
            ↶
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRotate("counterclockwise")}
            disabled={disabled}
            className="w-14 h-14 bg-stone-800/80 border-stone-600 hover:bg-cyan-900/50 hover:border-cyan-500/50 text-cyan-100 text-xl transition-all"
          >
            ↺
          </Button>
        </div>
      </div>
    </div>
  );
}
