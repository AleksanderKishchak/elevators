import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { ApartmentTable } from '../../ApartmentTable';
import { T9n } from '../../T9n';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cursorHover: {
    cursor: 'pointer',
  },
});

export const Row = ({
  entrance,
  apartmentsData,
  fetchApartments,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={cx(classes.root, classes.cursorHover)} onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <b>{entrance.name}</b>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <T9n t="ENTRANCE_TABLE_APARTMENTS" />
              </Typography>
              <ApartmentTable
                entranceId={entrance.id}
                apartmentsData={apartmentsData}
                fetchApartments={fetchApartments}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

Row.propTypes = {
  entrance: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  apartmentsData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.shape({}),
  }),
  fetchApartments: PropTypes.func.isRequired,
};

Row.defaultProps = {
  apartmentsData: undefined,
};
