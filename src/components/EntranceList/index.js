import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getEntrances } from '../../api';
import { CenteredContainer } from '../CenteredContainer';
import { Row } from './Row';
import { i18n } from '../../appConfig';

export const EntranceList = () => {
  const { buildingId } = useParams();
  const [entrances, setEntrances] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unmounted = false;

    getEntrances(buildingId).then((response) => {
      if (unmounted) return;

      setEntrances(response);
    }).catch((error) => {
      if (unmounted) return;

      setError(error);
    });
  }, []);

  const renderList = () => (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>{i18n('ENTRANCE_TABLE_NAME')}</TableCell>
            <TableCell>{i18n('ENTRANCE_TABLE_ENTRANCE_COLUMN')}</TableCell>
            <TableCell align="right">{i18n('SOMETHING_ELSE')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entrances.map((entrance) => (
            <Row key={entrance.id} entrance={entrance} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className="table-container">
      <CenteredContainer>
        {(!error && !entrances) && <CircularProgress />}
        { entrances && renderList()}
      </CenteredContainer>
    </div>
  );
};
