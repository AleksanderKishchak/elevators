import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { i18n } from '../../../appConfig';

export const Row = ({
  apartment: {
    floor, name, peopleLive,
  },
  user,
}) => (
  <TableRow>
    <TableCell align="center" component="th" scope="row">
      {floor}
    </TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center">{peopleLive}</TableCell>
    <TableCell align="center">
      {user?.status?.isPaid
        ? i18n('STATUS_PAID')
        : i18n('STATUS_UNPAID')}
    </TableCell>
  </TableRow>
);

Row.propTypes = {
  apartment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    floor: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    peopleLive: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    status: PropTypes.shape({
      isPaid: PropTypes.bool.isRequired,
    }),
  }),
};

Row.defaultProps = {
  user: {
    status: {
      isPaid: false,
    },
  },
};
