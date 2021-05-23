import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { T9n } from '../../T9n';

export const Row = ({
  apartment: {
    name, user, usersInFlat,
  },
  showKeysModal,
}) => (
  <TableRow>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="left">
      {usersInFlat?.map((user, idx) => (
        <div>
          {idx + 1}
          {'. '}
          {user.firstName}
          {' '}
          {user.lastName}
        </div>
      )) || '-'}
    </TableCell>
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

const userPT = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  status: PropTypes.shape({
    isPaid: PropTypes.bool.isRequired,
  }),
});

Row.propTypes = {
  apartment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    floor: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    peopleLive: PropTypes.number.isRequired,
    user: userPT,
    usersInFlat: PropTypes.arrayOf(userPT),
  }).isRequired,
  showKeysModal: PropTypes.func.isRequired,
};
