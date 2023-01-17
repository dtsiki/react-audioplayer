export interface IAudioPlayer {
  currentTime: number;
  duration?: number;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => any;
  setClickedTime: (clickedTime: number) => any;
  playbackRate: number;
  setPlaybackRate: (playbackRate: number) => any;
  audioName: string;
}
