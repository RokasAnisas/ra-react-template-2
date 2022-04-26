import { FC } from 'react';
import classNames from 'classnames/bind';

import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  const className = 'button';

  return (
    <button className={cx(className)} onClick={onClick}>
      {children}
    </button>
  );
};
