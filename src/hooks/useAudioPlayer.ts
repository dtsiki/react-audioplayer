import { useState, useEffect } from 'react';

import { IAudioPlayer } from '../interfaces';

const useAudioPlayer = (): IAudioPlayer => {
  const [duration, setDuration] = useState<number | undefined>();
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [clickedTime, setClickedTime] = useState<number | null>(null);
  const [audioName, setAudioName] = useState<string>('');

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    const setAudioData = (): void => {
      const fileName = audio.currentSrc.replace(/^.*[\\//]/, '');

      if (fileName) {
        setAudioName(fileName);
      }

      const savedCurrentTime = localStorage.getItem(fileName);

      if (savedCurrentTime) {
        audio.currentTime = Number(savedCurrentTime);
      }

      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = (): void => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioPlaybackRate = (): void => {
      audio.playbackRate = playbackRate;
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('timeupdate', setAudioPlaybackRate);

    isPlaying ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;

      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  });

  return {
    currentTime,
    duration,
    isPlaying,
    setIsPlaying,
    setClickedTime,
    playbackRate,
    setPlaybackRate,
    audioName
  };
};

export default useAudioPlayer;
