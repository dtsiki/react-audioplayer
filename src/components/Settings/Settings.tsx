import { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

interface SettingsProps {
  currentTime: number;
  audioName: string;
}

const Settings = ({ currentTime, audioName }: SettingsProps): ReactElement => {
  const [savedTime, setSavedTime] = useState<number | null>();

  const onSaveClicked = (): void => {
    localStorage.setItem(audioName, currentTime.toString());
    setSavedTime(Number(localStorage.getItem(audioName)));
  };

  const onRemoveClicked = (): void => {
    setSavedTime(null);
    localStorage.removeItem(audioName);
  };

  useEffect(() => {
    setSavedTime(Number(localStorage.getItem(audioName)));
  }, [audioName]);

  return (
    <div className='player__settings'>
      <button
        className={`player__setting ${!!savedTime && savedTime === currentTime && 'active'}`}
        onClick={onSaveClicked}>
        <FontAwesomeIcon icon={faHeart} />
        <span className='visually-hidden'>Save progress</span>
      </button>
      <button
        className='player__setting remove'
        onClick={onRemoveClicked}
        disabled={!savedTime}>
        <FontAwesomeIcon icon={faTrash} />
        <span className='subicon'>
          <FontAwesomeIcon
            icon={faHeart}
            size='2xs'
          />
        </span>
        <span className='visually-hidden'>Remove saved progress</span>
      </button>
    </div>
  );
};

export default Settings;
