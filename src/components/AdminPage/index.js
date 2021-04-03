import { useEffect, useState } from 'react';

import { getBuildings } from '../../api';
import { useAppState } from '../../hooks/useAppState';
import { BuildingList } from '../BuildingList';

export const AdminPage = () => {
  const { user } = useAppState();
  const [buildings, setBuildings] = useState(null);

  useEffect(() => {
    let unmounted = false;

    getBuildings(user.id).then((response) => {
      if (unmounted) return;

      setBuildings(response || null);
    });

    return () => { unmounted = true; };
  }, []);

  return (
    <>
      { buildings && <BuildingList buildings={buildings} />}
    </>
  );
};
