import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReduxProvider } from '@/config/redux/redux.provider';
import { ReactQueryProvider } from '@/config/react-query/react-query.provider';

import App from './App';
import './config/styles/global/_index.scss';
import './config/styles/theme/_index.scss';
import { ThemeProvider } from './modules/themeSwitcher/components/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  </React.StrictMode>
);
