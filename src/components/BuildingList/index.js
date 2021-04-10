import { useEffect, useState } from 'react';

import map from 'lodash/map';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Row } from './Row';
import { i18n } from '../../appConfig';
import { useAppState } from '../../hooks/useAppState';
import { getBuildings } from '../../api';
import { CenteredContainer } from '../CenteredContainer';

const useStyles = makeStyles({
  firstColumn: {
    width: 200,
  },
});

export const BuildingList = () => {
  const classes = useStyles();
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

  const renderList = () => (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.firstColumn}>{i18n('BUILDINGS_LIST_NAME')}</TableCell>
            <TableCell align="left">{i18n('BUILDINGS_STREET_TITLE')}</TableCell>
            <TableCell>{i18n('BUILDINGS_POST_CODE_TITLE')}</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            map(buildings, (building) => (
              <Row
                key={building.id}
                building={building}
              />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className="table-container">
      <CenteredContainer>
        {(!error && !buildings) && <CircularProgress />}
        { buildings && renderList()}
      </CenteredContainer>
    </div>
  );
};
