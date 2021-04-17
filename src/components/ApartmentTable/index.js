import { useEffect } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

import Typography from '@material-ui/core/Typography';
import { Row } from './Row';
import { CenteredContainer } from '../CenteredContainer';
import { ErrorMessage } from '../ErrorMessage';
import { T9n } from '../T9n';

export const ApartmentTable = ({
  entranceId,
  apartmentsData,
  fetchApartments,
}) => {
  const { error, data } = apartmentsData || {};

  useEffect(() => {
    if (!error && !data) {
      fetchApartments(entranceId);
    }
    // eslint-disable-next-line
  }, [fetchApartments, entranceId]);

  if (!data && !error) {
    return (
      <CenteredContainer>
        <CircularProgress />
      </CenteredContainer>
    );
  }

  if (!data && error) {
    return (
      <CenteredContainer>
        <ErrorMessage onClick={() => fetchApartments(entranceId)} />
      </CenteredContainer>
    );
  }

  if (isEmpty(data)) {
    return (
      <CenteredContainer>
        <Typography align="center">
          <T9n t="EMPTY_APARTMENTS_LIST" />
        </Typography>
      </CenteredContainer>
    );
  }

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell align="center"><T9n t="APARTMENTS_TABLE_NUMBER" /></TableCell>
          <TableCell align="center"><T9n t="APARTMENTS_TABLE_FLOOR" /></TableCell>
          <TableCell align="center"><T9n t="APARTMENTS_TABLE_PEOPLE_LIVE" /></TableCell>
          <TableCell align="center"><T9n t="APARTMENTS_TABLE_OWNER_NAME" /></TableCell>
          <TableCell align="center"><T9n t="APARTMENTS_TABLE_STATUS" /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(data, ((apartment) => (
          <Row key={apartment.id} apartment={apartment} />
        )))}
      </TableBody>
    </Table>
  );
};

ApartmentTable.propTypes = {
  entranceId: PropTypes.number.isRequired,
  apartmentsData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.shape({}),
  }),
  fetchApartments: PropTypes.func.isRequired,
};

ApartmentTable.defaultProps = {
  apartmentsData: undefined,
};
