import React, {ReactElement} from 'react';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';

import {clientPersister} from './client-persister';

type QueryClientConfig = ConstructorParameters<typeof QueryClient>['0'];

const BASE_STALE_TIME = 1000 * 60 * 30;
const BASE_CACHE_TIME = 1000 * 60 * 60 * 24 * 365 * 100;

export const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: BASE_STALE_TIME,
      cacheTime: BASE_CACHE_TIME,
      retry: false,
    },
    mutations: {
      cacheTime: BASE_CACHE_TIME,
      retry: false,
    },
  },
};

export const queryClient = new QueryClient(QUERY_CLIENT_OPTIONS);

type Props = {
  children: ReactElement | ReactElement[];
};

export const ReactQueryProvider = ({children}: Props) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: clientPersister}}>
      {children}
    </PersistQueryClientProvider>
  );
};
