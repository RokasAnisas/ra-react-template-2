import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReduxProvider } from '@/config/redux/redux.provider';
import { ReactQueryProvider } from '@/config/react-query/react-query.provider';

import App from './App';
import './config/styles/global/_index.scss';
import './config/styles/theme/_index.scss';
import { ThemeProvider } from './modules/themeSwitcher/components/ThemeProvider';

const initApp = () => {
  const root = document.getElementById('root');

  if (!root) return;

  ReactDOM.createRoot(root).render(
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
};

initApp();
