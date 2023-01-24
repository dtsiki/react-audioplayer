import { ReactElement } from 'react';

import useAudioPlayer from '../../hooks/useAudioPlayer';
import Actions from '../Actions';
import Audio from '../Audio';
import Background from '../Background';
import { BackgroundVariant } from '../Background/Background';
import Bar from '../Bar';
import Controls from '../Controls';
import Info from '../Info';
import Settings from '../Settings';

interface PlayerProps {
  src: string;
}

const Player = ({ src }: PlayerProps): ReactElement => {
  const { audioName, currentTime, duration, isPlaying, setIsPlaying, setPlaybackRate, playbackRate, setClickedTime } =
    useAudioPlayer();

  return (
    <>
      <div className='player'>
        <Settings
          currentTime={currentTime}
          audioName={audioName}
        />
        <Info
          audioName={audioName}
          isPlaying={isPlaying}
        />
        <Audio src={src} />
        <Controls
          setClickedTime={setClickedTime}
          isPlaying={isPlaying}
          currentTime={currentTime}
          setIsPlaying={setIsPlaying}
        />
        <Bar
          currentTime={currentTime}
          duration={duration}
          setClickedTime={setClickedTime}
        />
        <Actions
          playbackRate={playbackRate}
          setPlaybackRate={setPlaybackRate}
        />
      </div>
      <Background
        variant={BackgroundVariant.WAVES}
        isAnimated={isPlaying}
      />
    </>
  );
};

export default Player;
