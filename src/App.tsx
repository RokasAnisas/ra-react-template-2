import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useApplyTheme } from '@/modules/themeSwitcher/themeSwitcher.hooks';
import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';

import { HomeRoute } from './routes/Home.route';

const App: FC = () => {
  useApplyTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/theme" element={<ThemeSwitcherButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
