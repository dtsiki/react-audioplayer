import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface SaveProps {
  currentTime: number;
  audioName: string;
}

const Save = ({ currentTime, audioName }: SaveProps): ReactElement => {
  const onSaveClicked = (): void => {
    localStorage.setItem(audioName, currentTime.toString());
  };

  return (
    <button
      className='player__save'
      onClick={onSaveClicked}>
      <FontAwesomeIcon icon={faHeart} />
      <span className='visually-hidden'>Save</span>
    </button>
  );
};

export default Save;
