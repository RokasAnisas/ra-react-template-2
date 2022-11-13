import { FC, ReactNode, useEffect } from 'react';

import { useAppSelector } from '@/config/redux/redux.hooks';

import { selectTheme } from '../themeSwitcher.slice';

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>{children}</>;
};
