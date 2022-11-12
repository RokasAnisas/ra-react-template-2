import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Example } from '@/modules/example/components/Example';
import { useApplyTheme } from '@/modules/themeSwitcher/themeSwitcher.hooks';
import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';

const App: FC = () => {
  useApplyTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/theme" element={<ThemeSwitcherButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
