import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { T9n } from '../T9n';

const useStyles = makeStyles({
  statusRow: {
    minWidth: 120,
  },
  btn: {
    minWidth: 150,
  },
  lastCell: {
    paddingLeft: 0,
  },
});

export const AdminRow = ({
  keyData,
  onUpdate,
  onDelete,
}) => {
  const classes = useStyles();

  return (
    <TableRow key={keyData.name}>
      <TableCell component="th" scope="row">
        {keyData.name}
      </TableCell>
      <TableCell className={classes.statusRow} align="right">
        {keyData.isActive
          ? <T9n t="KEYS_MODAL_ACTIVE" />
          : <T9n t="KEYS_MODAL_INACTIVE" />}
      </TableCell>
      <TableCell align="right">
        <Button
          onClick={onUpdate}
          className={classes.btn}
          variant="contained"
          color={keyData.isActive ? 'secondary' : 'primary'}
        >
          {keyData.isActive
            ? <T9n t="KEYS_MODAL_REVOKE" />
            : <T9n t="KEYS_MODAL_GRANT" />}
        </Button>
      </TableCell>
      <TableCell className={classes.lastCell} align="right">
        <IconButton
          onClick={onDelete}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

AdminRow.propTypes = {
  keyData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
