import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { store } from '@/config/redux/redux.store';
import { queryClient } from '@/config/react-query/react-query.setup';

import App from './App';
import './config/styles/global/_index.scss';
import './config/styles/theme/_index.scss';
import { ThemeProvider } from './modules/themeSwitcher/components/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
