import { useState } from 'react';

import { getEntrances } from '../../api';

export const useBuildingList = () => {
  const [entrances, setEntrances] = useState({});

  const fetchEntrances = (buildingId) => {
    getEntrances(buildingId).then((result) => {
      setEntrances((state) => ({
        ...state,
        [buildingId]: result,
      }));
    });
  };

  return {
    entrances,
    fetchEntrances,
  };
};
