import { useCallback } from 'react';

import { useRequest } from './useRequest';

export const useRequestOnMount = (fetch, responseTransformer) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedFetch = useCallback(fetch, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedResponseTransformer = useCallback(responseTransformer, []);

  return useRequest({
    fetch: cachedFetch,
    responseTransformer: cachedResponseTransformer,
  });
};
