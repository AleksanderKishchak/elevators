import { useState, useEffect } from 'react';

const defaultResponseTransformer = (s) => s;

export const useRequest = ({
  fetch,
  responseTransformer = defaultResponseTransformer,
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);
  const forceUpdate = () => setTrigger((s) => s + 1);

  useEffect(() => {
    const unmounted = false;

    setData(null);
    setError(null);

    fetch().then((response) => {
      if (unmounted) return;

      setData(responseTransformer(response) || null);
    }).catch((error) => {
      if (unmounted) return;
      setError(error);
    });
  }, [fetch, responseTransformer, trigger]);

  return [data, error, forceUpdate];
};
