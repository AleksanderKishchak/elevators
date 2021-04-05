import { useEffect, useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { getBuildings } from '../../api';
import { useAppState } from '../../hooks/useAppState';
import { BuildingList } from '../BuildingList';
import { CenteredContainer } from '../CenteredContainer';

export const AdminPage = () => {
  const { user } = useAppState();
  const [buildings, setBuildings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unmounted = false;

    getBuildings(user.id)
      .then((response) => {
        if (unmounted) return;

        setBuildings(response || null);
      })
      .catch((error) => {
        if (unmounted) return;

        setError(error);
      });

    return () => { unmounted = true; };
  }, []);

  return (
    <div className="table-container">
      <CenteredContainer>
        {(!error && !buildings) && <CircularProgress />}
        { buildings && <BuildingList buildings={buildings} />}
      </CenteredContainer>
    </div>
  );
};
