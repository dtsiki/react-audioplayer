import React from 'react';
import { faMusic, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bar from './components/Bar';
import useAudioPlayer from './hooks/useAudioPlayer';

const App: React.FC = () => {
  const playbackRates = [0.5, 1, 1.5, 1.75, 2];

  const { audioName, currentTime, duration, isPlaying, setIsPlaying, setPlaybackRate, playbackRate } = useAudioPlayer();

  return (
    <div className='layout'>
      <div className='container'>
        <div className='player'>
          <div className='player__info'>
            <div className={`player__cover ${isPlaying ? 'playing' : 'waiting'}`}>
              <FontAwesomeIcon icon={faMusic} />
            </div>
            <div className='player__file'>{audioName}</div>
          </div>
          <audio id='audio'>
            <source src='./assets/audio/song.mp3' />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <div className='player__controls'>
            <button
              className={`player__control ${isPlaying ? 'pause' : 'play'}`}
              onClick={() => setIsPlaying(!isPlaying)}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              <span className='visually-hidden'>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
          <Bar
            currentTime={currentTime}
            duration={duration}
          />
          <div className='player__actions'>
            {playbackRates.map((item) => (
              <button
                key={item}
                className={`player__action ${playbackRate === item && 'active'}`}
                onClick={() => setPlaybackRate(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
