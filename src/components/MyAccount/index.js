import { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MyDataTable } from './components/MyDataTable';
import { CenteredContainer } from '../CenteredContainer';
import { getUserData } from '../../api';
import { useAppState } from '../../hooks/useAppState';
import { useStyles } from './useStyles';
import { i18n } from '../../appConfig';

export const MyAccount = () => {
  const classes = useStyles();
  const { user } = useAppState();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let isUnmounted = false;

    setUserData(null);
    setError(null);

    getUserData(user.id)
      .then((data) => {
        if (isUnmounted) return;

        setUserData({
          firstName: user.firstName,
          lastName: user.lastName,
          address: {
            street: data.building.street,
            entrance: data.entrance.name,
            room: data.apartment.name,
            floor: data.apartment.floor,
          },
          peopleLive: data.apartment.peopleLive,
          status: user.status.isPaid,
        });
      })
      .catch((requestError) => {
        if (isUnmounted) return;

        setError(requestError);
      });

    return () => { isUnmounted = true; };
  }, [trigger]);

  return (
    <div className="table-container flex-center">
      <CenteredContainer>
        {!userData && error && (
        <>
          <div className={classes.error}>
            <Typography align="center" color="secondary">
              {i18n('REQUEST_ERROR')}
            </Typography>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => { setTrigger(trigger + 1); }}
          >
            {i18n('RELOAD_PAGE')}
          </Button>
        </>
        )}

        {!userData && !error && <CircularProgress />}

        {userData && !error && <MyDataTable users={[userData]} />}
      </CenteredContainer>
    </div>
  );
};
