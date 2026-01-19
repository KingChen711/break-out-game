// Sound Manager for Break Out Dungeon

export type SoundType = "roll" | "rotate" | "pickKey" | "pickSword" | "levelComplete" | "stuck";

// Sound files are served from the public folder
const SOUND_PATHS: Record<SoundType, string> = {
  roll: "/sounds/roll.wav",
  rotate: "/sounds/rotate.wav",
  pickKey: "/sounds/pick-key.wav",
  pickSword: "/sounds/pick-sword.wav",
  levelComplete: "/sounds/level-complete.wav",
  stuck: "/sounds/stuck.mp3",
};

class SoundManager {
  private sounds: Map<SoundType, HTMLAudioElement> = new Map();
  private enabled: boolean = true;
  private volume: number = 0.5;
  private initialized: boolean = false;

  constructor() {
    // Defer initialization to avoid SSR issues
  }

  private init() {
    if (this.initialized || typeof window === "undefined") return;

    // Preload all sounds
    Object.entries(SOUND_PATHS).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.preload = "auto";
      audio.volume = this.volume;
      this.sounds.set(key as SoundType, audio);
    });

    this.initialized = true;
  }

  play(sound: SoundType) {
    if (!this.enabled) return;

    // Initialize on first play (handles browser autoplay policies)
    if (!this.initialized) {
      this.init();
    }

    const audio = this.sounds.get(sound);
    if (audio) {
      // Clone and play to allow overlapping sounds
      const clone = audio.cloneNode() as HTMLAudioElement;
      clone.volume = this.volume;
      clone.play().catch(() => {
        // Ignore autoplay errors - user hasn't interacted yet
      });
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    // Save preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("soundEnabled", String(enabled));
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach((audio) => {
      audio.volume = this.volume;
    });
    // Save preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("soundVolume", String(this.volume));
    }
  }

  getVolume(): number {
    return this.volume;
  }

  // Load saved preferences
  loadPreferences() {
    if (typeof window === "undefined") return;

    const savedEnabled = localStorage.getItem("soundEnabled");
    if (savedEnabled !== null) {
      this.enabled = savedEnabled === "true";
    }

    const savedVolume = localStorage.getItem("soundVolume");
    if (savedVolume !== null) {
      this.volume = parseFloat(savedVolume);
    }
  }
}

// Singleton instance
export const soundManager = new SoundManager();

// Convenience functions
export function playSound(sound: SoundType) {
  soundManager.play(sound);
}

export function setSoundEnabled(enabled: boolean) {
  soundManager.setEnabled(enabled);
}

export function isSoundEnabled(): boolean {
  return soundManager.isEnabled();
}

export function setSoundVolume(volume: number) {
  soundManager.setVolume(volume);
}

export function getSoundVolume(): number {
  return soundManager.getVolume();
}

export function loadSoundPreferences() {
  soundManager.loadPreferences();
}
