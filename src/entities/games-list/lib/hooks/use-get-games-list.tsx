import {useQuery} from '@tanstack/react-query';

import {api} from '@shared/api';

import {QUERY_KEYS} from '../../../query-keys';

export const useGetGamesList = () =>
  useQuery(QUERY_KEYS.all, () => api.getGamesList());
