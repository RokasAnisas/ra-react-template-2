import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/middleware/redux/store';

import { Example } from './features/example/components/Example';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
};

export default App;
