import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Row } from '../Row';
import { T9n } from '../../../T9n';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const MyDataTable = ({ users }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><T9n t="ROW_NAME" /></TableCell>
            <TableCell><T9n t="ROW_ADDRESS_STREET" /></TableCell>
            <TableCell><T9n t="ROW_ADDRESS_ENTRANCE" /></TableCell>
            <TableCell><T9n t="ROW_ADDRESS_FLOOR" /></TableCell>
            <TableCell><T9n t="ROW_ADDRESS_FLAT" /></TableCell>
            <TableCell><T9n t="ROW_ADDRESS_PEOPLE_LIVE" /></TableCell>
            <TableCell><T9n t="ROW_STATUS_IS_PAID" /></TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((userData) => (
            <Row rowData={userData} key={`${userData.firstName}_${userData.lastName}`} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MyDataTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      entrance: PropTypes.string.isRequired,
      room: PropTypes.string.isRequired,
      floor: PropTypes.number.isRequired,
    }).isRequired,
    peopleLive: PropTypes.number.isRequired,
    status: PropTypes.shape({
      isPaid: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};
