import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { i18n } from '../../../../appConfig';

export const Row = ({
  rowData,
}) => (
  <TableRow>
    <TableCell>{`${rowData.firstName} ${rowData.lastName}`}</TableCell>
    <TableCell>{rowData.address.street}</TableCell>
    <TableCell>{rowData.address.entrance}</TableCell>
    <TableCell>{rowData.address.floor}</TableCell>
    <TableCell>{rowData.address.room}</TableCell>
    <TableCell>{rowData.peopleLive}</TableCell>
    <TableCell>
      {rowData.status.isPaid
        ? i18n('STATUS_PAID')
        : i18n('STATUS_UNPAID')}
    </TableCell>
  </TableRow>
);

Row.propTypes = {
  rowData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      entrance: PropTypes.string.isRequired,
      room: PropTypes.string.isRequired,
      floor: PropTypes.string.isRequired,
    }).isRequired,
    peopleLive: PropTypes.string.isRequired,
    status: PropTypes.shape({
      isPaid: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
