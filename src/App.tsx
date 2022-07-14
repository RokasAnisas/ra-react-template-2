import { FC } from 'react';

import { Example } from '@/features/example/components/Example';
import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { toggleTheme } from '@/features/themeSwitcher/themeSwitcher.slice';
import { useAppDispatch } from '@/middleware/redux/redux.hooks';

const App: FC = () => {
  const dispatch = useAppDispatch();
  useApplyTheme();

  return (
    <>
      <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
      <Example />
    </>
  );
};

export default App;
