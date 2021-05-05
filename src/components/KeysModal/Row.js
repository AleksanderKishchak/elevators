import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { T9n } from '../T9n';

export const Row = ({ keyData }) => (
  <TableRow key={keyData.name}>
    <TableCell component="th" scope="row">
      {keyData.name}
    </TableCell>
    <TableCell align="right">
      {keyData.isActive
        ? <T9n t="KEYS_MODAL_ACTIVE" />
        : <T9n t="KEYS_MODAL_INACTIVE" />}
    </TableCell>
  </TableRow>
);

Row.propTypes = {
  keyData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};
