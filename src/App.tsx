import React from 'react';

import Player from './components/Player';
const App: React.FC = () => {
  return (
    <div className='layout'>
      <div className='container'>
        <Player src='assets/audio/song.mp3' />
      </div>
    </div>
  );
};

export default App;
