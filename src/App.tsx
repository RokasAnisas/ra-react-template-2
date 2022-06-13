import { FC } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { store } from '@/middleware/redux/redux.store';
import { queryClient } from '@/middleware/react-query/react-query.setup';

import { Example } from './features/example/components/Example';

const App: FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <Example />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
