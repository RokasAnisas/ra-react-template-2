import { Theme } from './themeSwitcher.types';

const STORAGE_THEME_KEY = 'theme';

export const getStorageTheme = (): Theme | null => {
  const storeItem = localStorage.getItem(STORAGE_THEME_KEY);

  if (
    typeof storeItem === 'string' &&
    (storeItem === 'light' || storeItem === 'dark')
  ) {
    return storeItem;
  }

  return null;
};

export const setStorageTheme = (theme: Theme): void =>
  localStorage.setItem(STORAGE_THEME_KEY, theme);
