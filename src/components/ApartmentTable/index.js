import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { KeysModal } from '../KeysModal';
import { AdminRow } from '../KeysModal/AdminRow';
import { useApartmentsTable } from './useApartmentsTable';
import { AddKeyRow } from '../KeysModal/AddKeyRow';

export const ApartmentTable = ({
  entranceId,
  apartmentsData,
  fetchApartments,
  updateApartmentData,
}) => {
  const { error, data } = apartmentsData || {};
  const {
    onUpdateKeys,
    onDeleteKey,
    onAddKey,
    openModal,
    keyModalParams,
    resetModalParams,
    modalTitle,
  } = useApartmentsTable({ apartmentsData, updateApartmentData });

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
    <>
      <KeysModal
        onClose={resetModalParams}
        isOpen={!!keyModalParams}
        title={modalTitle}
        headerCells={(
          <>
            <TableCell>
              <T9n t="KEYS_MODAL_KEY" />
            </TableCell>
            <TableCell align="right">
              <T9n t="KEYS_MODAL_STATUS" />
            </TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </>
        )}
      >
        {(keyModalParams?.keys || []).map((key) => (
          <AdminRow
            key={key.name}
            keyData={key}
            onUpdate={() => onUpdateKeys(keyModalParams, key)}
            onDelete={() => onDeleteKey(keyModalParams, key.id)}
          />
        ))}
        <AddKeyRow onSubmit={onAddKey(keyModalParams || {})} />
      </KeysModal>

      <Table size="small" aria-label="apartments list">
        <TableHead>
          <TableRow>
            <TableCell align="center"><T9n t="APARTMENTS_TABLE_NUMBER" /></TableCell>
            <TableCell align="left"><T9n t="APARTMENTS_TABLE_PEOPLE_LIVE" /></TableCell>
            <TableCell align="center"><T9n t="APARTMENTS_TABLE_OWNER_NAME" /></TableCell>
            <TableCell align="center"><T9n t="APARTMENTS_TABLE_STATUS" /></TableCell>
            <TableCell align="center"><T9n t="APARTMENTS_TABLE_SETTINGS" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((apartment) => (
            <Row
              key={apartment.id}
              apartment={apartment}
              showKeysModal={openModal(apartment)}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

ApartmentTable.propTypes = {
  entranceId: PropTypes.number.isRequired,
  apartmentsData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.shape({}),
  }),
  fetchApartments: PropTypes.func.isRequired,
  updateApartmentData: PropTypes.func.isRequired,
};

ApartmentTable.defaultProps = {
  apartmentsData: undefined,
};
