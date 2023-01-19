import { ReactElement } from 'react';
import { faPause, faPlay, faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons';

import Control, { ControlVariant } from '../Control/Control';

interface ControlProps {
  currentTime: number;
  isPlaying: boolean;
  setClickedTime: (clickedTime: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const TIME_SKIPPING = 30;

const Controls = ({ setClickedTime, currentTime, isPlaying, setIsPlaying }: ControlProps): ReactElement => {
  return (
    <div className='player__controls'>
      <Control
        onClick={() => setClickedTime(currentTime - TIME_SKIPPING)}
        name='Back'
        label='30'
        icon={faRotateLeft}
        variant={ControlVariant.SECONDARY}
      />
      <Control
        onClick={() => setIsPlaying(!isPlaying)}
        name={isPlaying ? 'Pause' : 'Play'}
        icon={isPlaying ? faPause : faPlay}
        className={isPlaying ? 'pause' : 'play'}
      />
      <Control
        onClick={() => setClickedTime(currentTime + TIME_SKIPPING)}
        name='Forward'
        label='30'
        icon={faRotateRight}
        variant={ControlVariant.SECONDARY}
      />
    </div>
  );
};

export default Controls;
