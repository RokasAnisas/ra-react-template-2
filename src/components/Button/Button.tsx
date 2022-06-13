import { FC } from 'react';

import { ButtonProps } from './Button.props';
import { button, label } from './Button.css';

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={button} onClick={onClick}>
      <span className={label}>{children}</span>
    </button>
  );
};
