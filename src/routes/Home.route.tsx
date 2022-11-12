import { FC } from 'react';

import { Example } from '@/modules/example/components/Example';
import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';

export const HomeRoute: FC = () => {
  return (
    <>
      <Example />
      <ThemeSwitcherButton />
    </>
  );
};
