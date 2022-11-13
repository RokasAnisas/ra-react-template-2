import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/config/redux/redux.store';

import { Theme } from './themeSwitcher.types';
import { getStorageTheme, setStorageTheme } from './themeSwitcher.storage';

// Define a type for the slice state
interface ThemeSwitcherState {
  theme: Theme;
}

const STORAGE_THEME_KEY = 'theme';

// Define the initial state using that type
const initialState: ThemeSwitcherState = {
  theme: getStorageTheme() || 'light',
};

export const themeSwitcherSlice = createSlice({
  name: 'ThemeSwitcher',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      setStorageTheme(action.payload);
    },
    toggleTheme: state => {
      switch (state.theme) {
        case 'light':
          state.theme = 'dark';
          setStorageTheme('dark');
          break;
        case 'dark':
          state.theme = 'light';
          setStorageTheme('light');
          break;
        default:
          state.theme = 'light';
          localStorage.setItem(STORAGE_THEME_KEY, 'light');
          break;
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSwitcherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.themeSwitcher.theme;

export default themeSwitcherSlice.reducer;
