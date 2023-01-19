import { ReactElement } from 'react';

import Cover from '../Cover';

interface InfoProps {
  audioName: string;
  isPlaying: boolean;
}

const Info = ({ audioName, isPlaying }: InfoProps): ReactElement => {
  return (
    <div className='player__info'>
      <Cover isPlaying={isPlaying} />
      <div className='player__file'>{audioName}</div>
    </div>
  );
};

export default Info;
