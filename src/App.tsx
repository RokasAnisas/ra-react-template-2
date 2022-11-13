import { FC } from 'react';
import { Route } from 'react-router-dom';

import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';
import { HomeRoute } from '@/routes/Home.route';
import { routes } from '@/config/react-router/routes';
import { RouterProvider } from '@/config/react-router/router.provider';

const App: FC = () => {
  return (
    <RouterProvider>
      <Route path={routes.home} element={<HomeRoute />} />
      <Route path="/theme" element={<ThemeSwitcherButton />} />
    </RouterProvider>
  );
};

export default App;
