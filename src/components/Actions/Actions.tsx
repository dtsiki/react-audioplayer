import { ReactElement } from 'react';

import PlaybackRate from '../PlaybackRate';

interface ActionsProps {
  playbackRate: number;
  setPlaybackRate: (playbackRate: number) => void;
}

const Actions = ({ playbackRate, setPlaybackRate }: ActionsProps): ReactElement => {
  return (
    <div className='player__actions'>
      <PlaybackRate
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
      />
    </div>
  );
};

export default Actions;
