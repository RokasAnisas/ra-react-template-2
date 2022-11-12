import { FC } from 'react';

import { Example } from '@/modules/example/components/Example';
import { useApplyTheme } from '@/modules/themeSwitcher/themeSwitcher.hooks';
import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';

const App: FC = () => {
  useApplyTheme();

  return (
    <>
      <ThemeSwitcherButton />
      <Example />
    </>
  );
};

export default App;
