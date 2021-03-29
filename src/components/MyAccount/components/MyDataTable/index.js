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
import { i18n } from '../../../../appConfig';
import { UserType } from '../../../../commonPropTypes/user';

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
            <TableCell>{i18n('ROW_NAME')}</TableCell>
            <TableCell>{i18n('ROW_ADDRESS_STREET')}</TableCell>
            <TableCell>{i18n('ROW_ADDRESS_ENTRANCE')}</TableCell>
            <TableCell>{i18n('ROW_ADDRESS_FLAT')}</TableCell>
            <TableCell>{i18n('ROW_STATUS_IS_PAID')}</TableCell>
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
  users: PropTypes.arrayOf(UserType.isRequired).isRequired,
};
