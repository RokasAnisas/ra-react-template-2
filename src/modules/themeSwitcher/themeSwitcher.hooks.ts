import { useEffect } from 'react';

import { useAppSelector } from '@/config/redux/redux.hooks';

import { selectTheme } from './themeSwitcher.slice';

export const useApplyTheme = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
};
