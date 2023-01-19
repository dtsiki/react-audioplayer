import { ReactElement } from 'react';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CoverProps {
  isPlaying: boolean;
}

const Cover = ({ isPlaying }: CoverProps): ReactElement => {
  return (
    <div className={`player__cover ${isPlaying ? 'playing' : 'waiting'}`}>
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
};

export default Cover;
