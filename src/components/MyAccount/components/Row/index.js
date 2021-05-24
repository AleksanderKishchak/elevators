import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { T9n } from '../../../T9n';
import { useLangs } from '../../../../hooks/useLangs';
import { KeysModal } from '../../../KeysModal';
import { Row as KeysModalRow } from '../../../KeysModal/Row';

export const Row = ({
  rowData,
}) => {
  const { locale } = useLangs();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <TableRow>
      <TableCell>{`${rowData.firstName} ${rowData.lastName}`}</TableCell>
      <TableCell>{rowData.address.street}</TableCell>
      <TableCell>{rowData.address.entrance}</TableCell>
      <TableCell>{rowData.address.room}</TableCell>
      <TableCell>
        {rowData.users?.map((user, idx) => (
          <div>
            {idx + 1}
            {'. '}
            {user.firstName}
            {' '}
            {user.lastName}
          </div>
        )) || '-'}
      </TableCell>
      <TableCell>
        {rowData.status.isPaid
          ? <T9n t="STATUS_PAID" />
          : <T9n t="STATUS_UNPAID" />}
      </TableCell>
      <TableCell>
        <Button
          aria-label={locale.get('ROW_SHOW_KEYS')}
          variant="contained"
          onClick={() => setModalOpen(true)}
        >
          <T9n t="ROW_SHOW_KEYS" />
        </Button>
        <KeysModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          {rowData.keys.map((key) => (
            <KeysModalRow key={key.name} keyData={key} />
          ))}
        </KeysModal>
      </TableCell>
    </TableRow>
  );
};

const userPT = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  status: PropTypes.shape({
    isPaid: PropTypes.bool.isRequired,
  }),
});

Row.propTypes = {
  rowData: PropTypes.shape({
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
    keys: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })).isRequired,
    users: PropTypes.arrayOf(userPT),
  }).isRequired,
};
