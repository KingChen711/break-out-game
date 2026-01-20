"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LevelData, Difficulty } from "@/lib/game-types";

const difficultyColors: Record<Difficulty, string> = {
  Tutorial: "text-gray-400 bg-gray-900/40",
  Starter: "text-lime-400 bg-lime-900/40",
  Junior: "text-yellow-400 bg-yellow-900/40",
  Expert: "text-red-400 bg-red-900/40",
  Master: "text-purple-400 bg-purple-900/40",
  Wizard: "text-blue-400 bg-blue-900/40",
};

interface LevelSelectorProps {
  levels: LevelData[];
  currentLevel: LevelData;
  onSelectLevel: (level: LevelData) => void;
}

export function LevelSelector({ levels, currentLevel, onSelectLevel }: LevelSelectorProps) {
  const tutorialLevels = levels.filter((l) => l.isTutorial);
  const normalLevels = levels.filter((l) => !l.isTutorial);
  const currentLevelButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to current level when component mounts or currentLevel changes
  useEffect(() => {
    if (currentLevelButtonRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        currentLevelButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [currentLevel.id]);

  const renderLevelButton = (level: LevelData) => {
    const isCurrentLevel = currentLevel.id === level.id;
    return (
      <Button
        key={level.id}
        ref={isCurrentLevel ? currentLevelButtonRef : null}
        variant="outline"
        onClick={() => onSelectLevel(level)}
        className={`w-full justify-start text-left h-auto py-2 px-3 ${
          isCurrentLevel
            ? "bg-amber-900/50 border-amber-500 text-amber-100"
            : "bg-stone-800/50 border-stone-700 text-stone-300 hover:bg-stone-700 hover:border-stone-500"
        }`}
      >
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate flex items-center gap-2">
              <span className="truncate">{level.name}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`text-xs px-1.5 py-0.5 rounded ${difficultyColors[level.difficulty]}`}
              >
                {level.difficulty}
              </span>
              <span className="text-xs text-stone-500">Min: {level.minSteps} steps</span>
            </div>
          </div>
          {isCurrentLevel && <span className="text-amber-400">▶</span>}
        </div>
      </Button>
    );
  };

  return (
    <Card className="bg-stone-900/90 border-stone-700 backdrop-blur h-full flex flex-col">
      <CardHeader className="pb-2 shrink-0">
        <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
          <span>🗺️</span> Select Level
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full px-6 pb-6">
          <div className="space-y-4">
            {tutorialLevels.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wide text-amber-300/80">Tutorial</div>
                <div className="space-y-2">{tutorialLevels.map(renderLevelButton)}</div>
              </div>
            )}

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wide text-stone-400">Levels</div>
              <div className="space-y-2">{normalLevels.map(renderLevelButton)}</div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
