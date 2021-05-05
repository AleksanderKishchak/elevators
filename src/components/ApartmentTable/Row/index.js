import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { T9n } from '../../T9n';

export const Row = ({
  apartment: {
    floor, name, peopleLive, user,
  },
  showKeysModal,
}) => (
  <TableRow>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center" component="th" scope="row">
      {floor}
    </TableCell>
    <TableCell align="center">{peopleLive}</TableCell>
    <TableCell align="center">{`${user.firstName} ${user.lastName}`}</TableCell>
    <TableCell align="center">
      {user?.status?.isPaid
        ? <T9n t="STATUS_PAID" />
        : <T9n t="STATUS_UNPAID" />}
    </TableCell>
    <TableCell align="center">
      <IconButton
        variant="contained"
        onClick={showKeysModal}
      >
        <VpnKeyIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

Row.propTypes = {
  apartment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    floor: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    peopleLive: PropTypes.number.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      status: PropTypes.shape({
        isPaid: PropTypes.bool.isRequired,
      }),
    }),
  }).isRequired,
  showKeysModal: PropTypes.func.isRequired,
};
