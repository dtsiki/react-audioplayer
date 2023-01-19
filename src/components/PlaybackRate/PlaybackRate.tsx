import { ReactElement } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PlaybackRateProps {
  playbackRate: number;
  setPlaybackRate: (playbackRate: number) => void;
}

const PlaybackRate = ({ playbackRate, setPlaybackRate }: PlaybackRateProps): ReactElement => {
  const playbackRates = [1, 1.5, 1.75, 2, 2.25, 2.5];

  const onChangePlacbackRate = (): void => {
    const currentRate = playbackRates.findIndex((rate) => rate === playbackRate);

    if (currentRate !== -1) {
      setPlaybackRate(currentRate !== playbackRates.length - 1 ? playbackRates[currentRate + 1] : 1);
    }
  };

  return (
    <button
      className='player__action rate'
      onClick={onChangePlacbackRate}>
      {playbackRate}
      <FontAwesomeIcon
        icon={faXmark}
        size='2xs'
      />
    </button>
  );
};

export default PlaybackRate;
