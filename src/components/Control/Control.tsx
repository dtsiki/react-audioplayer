import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export enum ControlVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ControlProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ControlVariant;
  onClick: (any: any) => void;
  icon: IconProp;
  name: string;
  label?: string;
}

const Control = ({
  variant = ControlVariant.PRIMARY,
  onClick,
  icon,
  name,
  label,
  ...restProps
}: ControlProps): ReactElement => {
  return (
    <button
      className={`player__control ${variant} ${restProps.className}`}
      onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span className='visually-hidden'>{name}</span>
      {label && <span className='player__label'>{label}</span>}
    </button>
  );
};

export default Control;
