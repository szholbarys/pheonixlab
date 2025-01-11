import { makeAutoObservable } from "mobx";

export class WatchProgressStore {
  progress: { [key: string]: number } = {};

  constructor() {
    makeAutoObservable(this);
    this.loadProgress();
  }

  loadProgress = () => {
    const stored = localStorage.getItem("watchProgress");
    if (stored) {
      this.progress = JSON.parse(stored);
    }
  };

  saveProgress = () => {
    localStorage.setItem("watchProgress", JSON.stringify(this.progress));
  };

  updateProgress = (movieId: string, timestamp: number) => {
    this.progress[movieId] = timestamp;
    this.saveProgress();
  };

  getProgress = (movieId: string): number => {
    return this.progress[movieId] || 0;
  };
}
