import { FC } from 'react';
import classNames from 'classnames/bind';

import { ButtonProps } from './Button.props';

import style from './Button.module.scss';
const cx = classNames.bind(style);

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  const className = 'button';

  return (
    <button className={cx(className)} onClick={onClick} disabled={disabled}>
      <span className={cx(`${className}__label`)}>{children}</span>
    </button>
  );
};
