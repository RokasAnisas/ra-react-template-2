import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/config/redux/redux.hooks';
import { Button } from '@/components/Button';

import { selectTheme, toggleTheme } from '../themeSwitcher.slice';

export const ThemeSwitcherButton: FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);

  return (
    <Button onClick={() => dispatch(toggleTheme())}>{currentTheme}</Button>
  );
};
