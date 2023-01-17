import { ReactElement, useEffect, useState } from 'react';
import moment from 'moment';

interface BarProps {
  duration?: number;
  currentTime: number;
}

const Bar = ({ duration, currentTime }: BarProps): ReactElement => {
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);

  useEffect(() => {
    if (duration) {
      setCurrentPercentage((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const formatTime = (time: number): string => {
    return moment.utc(time * 1000)
      .format('HH:mm:ss');
  };

  return (
    <div className='bar'>
      <div
        className='bar__progress'
        style={{
          background: `linear-gradient(to right, white ${currentPercentage}%, white 0)`
        }}>
        <div
          className='bar__knob'
          style={{ left: `${currentPercentage}%` }}
        />
      </div>
      <div className='bar__footer'>
        <span className='bar__time current'>{formatTime(currentTime)}</span>
        {duration && <span className='bar__time duration'>{formatTime(duration)}</span>}
      </div>
    </div>
  );
};

export default Bar;
