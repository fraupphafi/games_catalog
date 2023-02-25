import {useQuery} from '@tanstack/react-query';

import {api} from '@shared/api';

import {QUERY_KEYS} from '../../../query-keys';

type Params = {
  searchParams?: Record<string, string | number>;
};

export const useGetGamesList = (options: Params) =>
  useQuery(QUERY_KEYS.all, () => api.getGamesList(options));
