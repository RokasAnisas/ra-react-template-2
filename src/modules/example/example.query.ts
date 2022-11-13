import { useQuery } from 'react-query';

import { apiRoutes } from '@/config/api/api.routes';

export const useGetExample = () => {
  const exampleQuery = apiRoutes.getCatFact;

  return useQuery('example', exampleQuery, {
    select: data => data.data,
    cacheTime: Infinity,
  });
};
