import { ReactElement } from 'react';

interface AudioProps {
  src: string;
}

const Audio = ({ src }: AudioProps): ReactElement => {
  return (
    <audio id='audio'>
      <source src={src} />
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};

export default Audio;
