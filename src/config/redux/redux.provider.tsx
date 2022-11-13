import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './redux.store';

interface Props {
  children: ReactNode;
}

export const ReduxProvider: FC<Props> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
