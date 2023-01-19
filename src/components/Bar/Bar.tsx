import { ChangeEvent, ReactElement } from 'react';
import moment from 'moment';

interface BarProps {
  duration?: number;
  currentTime: number;
  setClickedTime: (clickedTime: number) => void;
}

const Bar = ({ duration, currentTime, setClickedTime }: BarProps): ReactElement => {
  const formatTime = (time: number): string => {
    return moment.utc(time * 1000)
      .format('HH:mm:ss');
  };

  const onChangeProgress = (event: ChangeEvent<HTMLInputElement>): void => {
    setClickedTime(event.target.valueAsNumber);
  };

  return (
    <div className='bar'>
      <div className='bar__progress'>
        <input
          className='bar__input'
          type='range'
          id='duration'
          name='duration'
          step='1'
          min={0}
          value={currentTime}
          max={duration}
          onChange={onChangeProgress}
        />
        <label
          htmlFor='volume'
          className='visually-hidden'>
          Progress
        </label>
      </div>
      <div className='bar__footer'>
        <span className='bar__time current'>{formatTime(currentTime)}</span>
        {duration && <span className='bar__time duration'>{formatTime(duration)}</span>}
      </div>
    </div>
  );
};

export default Bar;
