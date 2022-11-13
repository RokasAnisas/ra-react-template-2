import { FC, ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from './react-query.setup';

interface Props {
  children: ReactNode;
}

export const ReactQueryProvider: FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />

    {children}
  </QueryClientProvider>
);
