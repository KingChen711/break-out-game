"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { GameState, Direction, Rotation, LevelData } from "@/lib/game-types";
import {
  createGameStateFromLevel,
  rollHero,
  rotateHero,
  canRotate,
  canRoll,
} from "@/lib/game-logic";
import { ALL_LEVELS, getNextLevel, getLevelById } from "@/lib/levels";
import { playSound, loadSoundPreferences } from "@/lib/sound-manager";
import { GameBoard3D } from "./GameBoard3D";
import { GameControls } from "../game/GameControls";
import { GameInfo } from "../game/GameInfo";
import { LevelSelector } from "../game/LevelSelector";
import { GameRulesDialog, GameRulesButton } from "../game/GameRules";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TutorialPanel({
  level,
  lang,
  onChangeLang,
  onNextTutorial,
  hasNextTutorial,
}: {
  level: LevelData;
  lang: "en" | "vi";
  onChangeLang: (lang: "en" | "vi") => void;
  onNextTutorial: () => void;
  hasNextTutorial: boolean;
}) {
  if (!level.isTutorial) return null;

  const titleEn = level.tutorialTitle?.en ?? level.name;
  const titleVi = level.tutorialTitle?.vi ?? level.name;
  const bodyEn = level.tutorialBody?.en;
  const bodyVi = level.tutorialBody?.vi;
  const stepsEn = level.tutorialSteps?.en ?? [];
  const stepsVi = level.tutorialSteps?.vi ?? [];
  const showEn = lang === "en";
  const title = showEn ? titleEn : titleVi;
  const body = showEn ? bodyEn : bodyVi;
  const steps = showEn ? stepsEn : stepsVi;

  return (
    <Card className="bg-stone-900/90 border-amber-700/40 backdrop-blur">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg text-amber-300 flex items-center gap-2">
            <span>📘</span> Tutorial
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex rounded bg-stone-800/80 border border-stone-600 overflow-hidden">
              <Button
                size="sm"
                variant={showEn ? "default" : "outline"}
                onClick={() => onChangeLang("en")}
                className={`h-7 px-2 text-xs ${
                  showEn
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-transparent border-0 text-stone-300 hover:bg-stone-700"
                }`}
              >
                EN
              </Button>
              <Button
                size="sm"
                variant={!showEn ? "default" : "outline"}
                onClick={() => onChangeLang("vi")}
                className={`h-7 px-2 text-xs ${
                  !showEn
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-transparent border-0 text-stone-300 hover:bg-stone-700"
                }`}
              >
                VI
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="space-y-1">
          <div className="font-semibold text-stone-100">{title}</div>
        </div>

        {body && (
          <div className="space-y-1 pt-1">
            <div className="text-stone-200 whitespace-pre-line">{body}</div>
          </div>
        )}

        {steps.length > 0 && (
          <div className="pt-2 space-y-1">
            {steps.map((step, i) => (
              <div key={i} className="border-l border-amber-500/30 pl-2 space-y-0.5">
                <div className="text-stone-200">- {step}</div>
              </div>
            ))}
          </div>
        )}

        {hasNextTutorial && (
          <div className="pt-3">
            <Button
              variant="outline"
              onClick={onNextTutorial}
              className="w-full bg-stone-800/50 border-amber-600/60 text-amber-300 hover:bg-amber-900/40"
            >
              Next Tutorial →
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Deep clone game state for history
function cloneGameState(state: GameState): GameState {
  return {
    hero: {
      ...state.hero,
      position: { ...state.hero.position },
      faceRotations: { ...state.hero.faceRotations },
    },
    objects: state.objects.map((obj) => ({
      ...obj,
      position: { ...obj.position },
    })),
    hasWon: state.hasWon,
    moveCount: state.moveCount,
  };
}

// Component that tracks camera angle and reports it back
function CameraAngleTracker({ onAngleChange }: { onAngleChange: (angle: number) => void }) {
  const { camera } = useThree();

  useFrame(() => {
    // Calculate azimuthal angle (horizontal rotation around Y axis)
    // Camera looks at origin, so we use camera position to determine angle
    const angle = Math.atan2(camera.position.x, camera.position.z);
    onAngleChange(angle);
  });

  return null;
}

// Transform WASD input direction based on camera angle
function getCameraRelativeDirection(inputDirection: Direction, cameraAngle: number): Direction {
  // Normalize camera angle to determine which quadrant we're viewing from
  // Camera angle 0 = looking from +Z axis (front view)
  // We divide into 4 sectors of 90 degrees each

  // Normalize angle to 0-2PI
  const normalizedAngle = ((cameraAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  // Determine camera sector (0-3, each 90 degrees)
  // Sector 0: 315-45 degrees (front view, -Z direction)
  // Sector 1: 45-135 degrees (right view, -X direction)
  // Sector 2: 135-225 degrees (back view, +Z direction)
  // Sector 3: 225-315 degrees (left view, +X direction)

  // Offset by 45 degrees so sectors align with cardinal directions
  const offsetAngle = normalizedAngle + Math.PI / 4;
  const sector = Math.floor(offsetAngle / (Math.PI / 2)) % 4;

  // Direction mapping based on sector
  // Each sector rotates the input by 90 degrees
  const directionMaps: Record<number, Record<Direction, Direction>> = {
    0: { up: "up", down: "down", left: "left", right: "right" }, // Front view
    1: { up: "left", down: "right", left: "down", right: "up" }, // Right view
    2: { up: "down", down: "up", left: "right", right: "left" }, // Back view
    3: { up: "right", down: "left", left: "up", right: "down" }, // Left view
  };

  return directionMaps[sector][inputDirection];
}

function Scene({
  gameState,
  isAnimating,
  animationDirection,
  targetPosition,
  onCameraAngleChange,
  isStuck,
}: {
  gameState: GameState;
  isAnimating: boolean;
  animationDirection: string;
  targetPosition: { x: number; y: number } | null;
  onCameraAngleChange: (angle: number) => void;
  isStuck?: boolean;
}) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />

      {/* Environment for reflections */}
      <Environment preset="warehouse" />

      {/* Game board */}
      <GameBoard3D
        gameState={gameState}
        isAnimating={isAnimating}
        animationDirection={animationDirection}
        targetPosition={targetPosition}
        isStuck={isStuck}
      />

      {/* Ground shadow */}
      <ContactShadows position={[0, -0.49, 0]} opacity={0.4} scale={10} blur={2} far={4} />

      {/* Track camera angle for relative controls */}
      <CameraAngleTracker onAngleChange={onCameraAngleChange} />

      {/* Camera controls - drag to rotate, scroll to zoom */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={4}
        maxDistance={12}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 0, 0]}
      />
    </>
  );
}

// Calculate target position based on direction
function getTargetPosition(
  current: { x: number; y: number },
  direction: string
): { x: number; y: number } {
  switch (direction) {
    case "up":
      return { x: current.x, y: current.y - 1 };
    case "down":
      return { x: current.x, y: current.y + 1 };
    case "left":
      return { x: current.x - 1, y: current.y };
    case "right":
      return { x: current.x + 1, y: current.y };
    default:
      return current;
  }
}

export function Game3D() {
  // Initialize with default level to avoid hydration mismatch
  const [currentLevel, setCurrentLevel] = useState<LevelData>(ALL_LEVELS[0]);
  const [gameState, setGameState] = useState<GameState>(() =>
    createGameStateFromLevel(ALL_LEVELS[0])
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [history, setHistory] = useState<GameState[]>([]);
  const [showVictoryDialog, setShowVictoryDialog] = useState(false);
  const [targetPosition, setTargetPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [showUniKeyWarning, setShowUniKeyWarning] = useState(false);
  const [tutorialLang, setTutorialLang] = useState<"en" | "vi">("en");

  // Track camera angle for relative controls
  const cameraAngleRef = useRef(Math.PI / 4); // Default angle (45 degrees)

  // Track previous state to detect pickups
  const prevStateRef = useRef<GameState | null>(null);

  // Load sound preferences on mount
  useEffect(() => {
    loadSoundPreferences();
  }, []);

  // Load last played level from localStorage after mount (client-side only)
  // This runs only once after hydration to avoid hydration mismatch
  useEffect(() => {
    // Use setTimeout to make state updates asynchronous and avoid linter warning
    const timeoutId = setTimeout(() => {
      try {
        const lastLevelId = localStorage.getItem("breakout-last-level");
        if (lastLevelId) {
          const lastLevel = getLevelById(lastLevelId);
          if (lastLevel) {
            setCurrentLevel(lastLevel);
            setGameState(createGameStateFromLevel(lastLevel));
          }
        }
      } catch {
        // Ignore localStorage errors (e.g., in private browsing)
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Detect pickups and level completion to play sounds
  useEffect(() => {
    const prevState = prevStateRef.current;
    if (prevState) {
      // Check if key was picked up
      if (!prevState.hero.hasKey && gameState.hero.hasKey) {
        playSound("pickKey");
      }
      // Check if sword was picked up
      if (!prevState.hero.hasSword && gameState.hero.hasSword) {
        playSound("pickSword");
      }
      // Check if level was completed
      if (!prevState.hasWon && gameState.hasWon) {
        playSound("levelComplete");
      }
    }
    prevStateRef.current = gameState;
  }, [gameState]);

  // Delay victory dialog to allow door animation
  useEffect(() => {
    if (gameState.hasWon && !showVictoryDialog) {
      const timer = setTimeout(() => {
        setShowVictoryDialog(true);
      }, 1200); // Delay to let door open animation play
      return () => clearTimeout(timer);
    }
  }, [gameState.hasWon, showVictoryDialog]);

  const loadLevel = useCallback((level: LevelData) => {
    setCurrentLevel(level);
    setGameState(createGameStateFromLevel(level));
    setHistory([]); // Clear history when loading new level
    setShowVictoryDialog(false);
    // Save last played level to localStorage
    try {
      localStorage.setItem("breakout-last-level", level.id);
    } catch {
      // Ignore localStorage errors (e.g., in private browsing)
    }
  }, []);

  const handleCameraAngleChange = useCallback((angle: number) => {
    cameraAngleRef.current = angle;
  }, []);

  const handleRoll = useCallback(
    (direction: Direction) => {
      if (isAnimating || gameState.hasWon || isStuck) return;

      // Check if the roll is valid BEFORE starting animation
      if (!canRoll(gameState, direction)) {
        // Play stuck animation and sound
        playSound("stuck");
        const directionMap: Record<Direction, string> = {
          up: "up",
          down: "down",
          left: "left",
          right: "right",
        };
        setAnimationDirection(directionMap[direction]);
        setIsStuck(true);

        setTimeout(() => {
          setIsStuck(false);
          setAnimationDirection("");
        }, 200);
        return;
      }

      // Play roll sound
      playSound("roll");

      // Save current state to history before making the move
      setHistory((prev) => [...prev, cloneGameState(gameState)]);

      const directionMap: Record<Direction, string> = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
      };

      // Calculate target position for smooth movement animation
      const target = getTargetPosition(gameState.hero.position, direction);
      setTargetPosition(target);
      setAnimationDirection(directionMap[direction]);
      setIsAnimating(true);

      // Update state after animation completes (faces change at the end)
      setTimeout(() => {
        setGameState((prev) => rollHero(prev, direction));
        setIsAnimating(false);
        setAnimationDirection("");
        setTargetPosition(null);
      }, 300);
    },
    [isAnimating, gameState, isStuck]
  );

  // Handle roll with camera-relative direction transformation
  const handleRollRelative = useCallback(
    (inputDirection: Direction) => {
      const actualDirection = getCameraRelativeDirection(inputDirection, cameraAngleRef.current);
      handleRoll(actualDirection);
    },
    [handleRoll]
  );

  const handleRotate = useCallback(
    (rotation: Rotation) => {
      if (isAnimating || gameState.hasWon || isStuck) return;

      // Check if rotation is valid BEFORE starting animation
      if (!canRotate(gameState)) {
        // Play stuck animation and sound
        playSound("stuck");
        const animDir =
          rotation === "clockwise"
            ? "rotate-cw"
            : rotation === "counterclockwise"
              ? "rotate-ccw"
              : "rotate-180";
        setAnimationDirection(animDir);
        setIsStuck(true);

        setTimeout(() => {
          setIsStuck(false);
          setAnimationDirection("");
        }, 200);
        return;
      }

      // Play rotate sound
      playSound("rotate");

      // Save current state to history before making the move
      setHistory((prev) => [...prev, cloneGameState(gameState)]);

      const animDir =
        rotation === "clockwise"
          ? "rotate-cw"
          : rotation === "counterclockwise"
            ? "rotate-ccw"
            : "rotate-180"; // turnaround
      setAnimationDirection(animDir);
      setIsAnimating(true);

      setTimeout(() => {
        setGameState((prev) => rotateHero(prev, rotation));
        setIsAnimating(false);
        setAnimationDirection("");
      }, 300);
    },
    [isAnimating, gameState, isStuck]
  );

  const handleUndo = useCallback(() => {
    if (isAnimating || history.length === 0 || isStuck) return;

    const newHistory = [...history];
    const previousState = newHistory.pop()!;
    setHistory(newHistory);
    setGameState(previousState);
  }, [isAnimating, history, isStuck]);

  const handleReset = useCallback(() => {
    setGameState(createGameStateFromLevel(currentLevel));
    setHistory([]); // Clear history on reset
    setShowVictoryDialog(false);
  }, [currentLevel]);

  const handleNextLevel = useCallback(() => {
    const next = getNextLevel(currentLevel.id);
    if (next) {
      loadLevel(next);
    }
  }, [currentLevel.id, loadLevel]);

  // Keyboard controls - now camera-relative
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;

      // Detect Vietnamese characters (UniKey warning)
      if (
        e.key === "ư" ||
        e.key === "ơ" ||
        e.key === "ă" ||
        e.key === "đ" ||
        e.key === "â" ||
        e.key === "ê" ||
        e.key === "ô" ||
        e.key === "ứ" ||
        e.key === "ừ" ||
        e.key === "ử" ||
        e.key === "ữ" ||
        e.key === "ự"
      ) {
        setShowUniKeyWarning(true);
        setTimeout(() => setShowUniKeyWarning(false), 3000);
        return;
      }

      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        handleReset();
        return;
      }

      // Allow undo (Z key)
      if (e.key === "z" || e.key === "Z") {
        e.preventDefault();
        handleUndo();
        return;
      }

      if (gameState.hasWon && (e.key === "n" || e.key === "N")) {
        e.preventDefault();
        handleNextLevel();
        return;
      }

      if (gameState.hasWon) return;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          handleRollRelative("up");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          handleRollRelative("down");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          handleRollRelative("left");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          handleRollRelative("right");
          break;
        case "q":
        case "Q":
          e.preventDefault();
          handleRotate("clockwise");
          break;
        case "e":
        case "E":
          e.preventDefault();
          handleRotate("counterclockwise");
          break;
        case "x":
        case "X":
          e.preventDefault();
          handleRotate("turnaround");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isAnimating,
    gameState.hasWon,
    handleRollRelative,
    handleRotate,
    handleReset,
    handleUndo,
    handleNextLevel,
  ]);

  const hasNextLevel = !!getNextLevel(currentLevel.id);
  const canUndoMove = history.length > 0;
  const currentIndex = ALL_LEVELS.findIndex((l) => l.id === currentLevel.id);
  const hasNextTutorial =
    currentIndex >= 0 && ALL_LEVELS.slice(currentIndex + 1).some((l) => l.isTutorial);

  const handleNextTutorial = useCallback(() => {
    const idx = ALL_LEVELS.findIndex((l) => l.id === currentLevel.id);
    if (idx < 0) return;
    const nextTutorial = ALL_LEVELS.slice(idx + 1).find((l) => l.isTutorial);
    if (nextTutorial) {
      loadLevel(nextTutorial);
    }
  }, [currentLevel.id, loadLevel]);

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-950 via-stone-900 to-slate-950 flex flex-col lg:flex-row">
      {/* Left sidebar */}
      <div className="w-full lg:w-72 p-4 flex flex-col gap-4 order-2 lg:order-1 lg:h-screen">
        <div className="shrink-0">
          <GameInfo
            hero={gameState.hero}
            moveCount={gameState.moveCount}
            hasWon={gameState.hasWon}
            currentLevel={currentLevel}
          />
        </div>
        <div className="flex-1 min-h-0">
          <LevelSelector
            levels={ALL_LEVELS}
            currentLevel={currentLevel}
            onSelectLevel={loadLevel}
          />
        </div>
        <div className="shrink-0 space-y-2">
          <GameRulesButton onClick={() => setShowRules(true)} />
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://youtu.be/XCLB17N7vOg?si=HXSTf_kelEaxNfsv&t=191", "_blank")
            }
            className="w-full bg-stone-800/50 border-stone-600 hover:bg-stone-700 text-amber-100"
          >
            🎥 Tutorial
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/16fcbP4WJAOgFI4lWsRmQjqoE_6f8d3M8/view?usp=sharing",
                "_blank"
              )
            }
            className="w-full bg-stone-800/50 border-stone-600 hover:bg-stone-700 text-amber-100"
          >
            💡 Solutions
          </Button>
        </div>
      </div>

      {/* Main game area */}
      <div className="flex-1 flex flex-col order-1 lg:order-2">
        {/* Header */}
        <div className="text-center py-4 px-4">
          <h1 className="text-4xl font-bold bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
            Break Out Dungeon
          </h1>
          <p className="text-lg text-stone-400 mt-1">{currentLevel.name}</p>
          <p className="text-sm text-stone-500 mt-1">Made by King Chen 💖</p>
        </div>

        {/* 3D Canvas */}
        <div className="flex-1 min-h-[400px] lg:min-h-0">
          <Canvas
            shadows
            camera={{ position: [6, 6, 6], fov: 50 }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <Scene
                gameState={gameState}
                isAnimating={isAnimating}
                animationDirection={animationDirection}
                targetPosition={targetPosition}
                onCameraAngleChange={handleCameraAngleChange}
                isStuck={isStuck}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Controls hint */}
        <div className="text-center py-2">
          <p className="text-xs text-stone-500">
            🎲 WASD/Arrows to roll (camera-relative) • 🖱️ Drag to rotate view • Scroll to zoom • Q/E
            to rotate • X to turn around • Z to undo • R to reset
          </p>
        </div>
      </div>

      {/* Right sidebar - Tutorial + Controls */}
      <div className="w-full lg:w-72 p-4 order-3">
        <div className="sticky top-4 space-y-4">
          {/* Tutorial panel on the right side, scrollable to avoid full-page scroll */}
          <div className="max-h-[55vh] overflow-y-auto pr-1">
            <TutorialPanel
              level={currentLevel}
              lang={tutorialLang}
              onChangeLang={setTutorialLang}
              onNextTutorial={handleNextTutorial}
              hasNextTutorial={hasNextTutorial}
            />
          </div>

          <GameControls
            onRoll={handleRollRelative}
            onRotate={handleRotate}
            disabled={isAnimating || gameState.hasWon || isStuck}
          />
          <div className="flex gap-2">
            <Button
              onClick={handleUndo}
              variant="outline"
              disabled={!canUndoMove || isAnimating || isStuck}
              className={`flex-1 bg-stone-800/50 border-stone-600 text-amber-100 transition-all ${
                canUndoMove && !isAnimating && !isStuck
                  ? "hover:bg-stone-700 hover:border-amber-500/50"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              ↩️ Undo (Z)
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1 bg-stone-800/50 border-stone-600 hover:bg-stone-700 text-amber-100"
            >
              🔄 Reset (R)
            </Button>
          </div>
        </div>
      </div>

      {/* Win overlay */}
      {showVictoryDialog && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-in fade-in duration-500">
          <div className="bg-linear-to-br from-stone-800 to-stone-900 p-8 rounded-2xl shadow-2xl border border-amber-500/30 text-center max-w-md mx-4">
            <div className="text-6xl mb-4">
              {gameState.moveCount <= currentLevel.minSteps ? "⭐" : "🏆"}
            </div>
            <h2 className="text-3xl font-bold text-amber-400 mb-2">Victory!</h2>
            {gameState.moveCount <= currentLevel.minSteps && (
              <p className="text-yellow-400 font-bold text-lg mb-2 animate-pulse">✨ Perfect! ✨</p>
            )}
            <p className="text-stone-300 mb-2">
              You completed{" "}
              <span className="text-amber-400 font-semibold">{currentLevel.name}</span>
            </p>
            <p className="text-stone-300 mb-1">
              in <span className="text-cyan-400 font-bold">{gameState.moveCount}</span> steps!
            </p>
            <p className="text-stone-500 text-sm mb-6">(Min: {currentLevel.minSteps} steps)</p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="bg-stone-700 border-stone-600 hover:bg-stone-600 text-stone-100"
              >
                🔄 Retry (R)
              </Button>
              {hasNextLevel && (
                <Button
                  onClick={handleNextLevel}
                  size="lg"
                  className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold"
                >
                  Next Level (N) →
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* UniKey Warning */}
      {showUniKeyWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-linear-to-r from-red-600 to-orange-600 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-red-400 max-w-md">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⚠️</div>
              <div>
                <div className="font-bold text-lg">Vui lòng tắt UniKey để chơi tốt nhất!</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rules Dialog */}
      <GameRulesDialog isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}
