import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';

import { HomeRoute } from './routes/Home.route';
import { routes } from './config/react-router/routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomeRoute />} />
        <Route path="/theme" element={<ThemeSwitcherButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
