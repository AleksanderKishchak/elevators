import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { T9n } from '../T9n';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 550,
  },
  dialogContent: {
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  paper: {
    maxWidth: 700,
  },
}));

export const KeysModal = ({
  isOpen,
  onClose,
  children,
  headerCells,
  title,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="dialogTitle"
      classes={{ paper: classes.paper }}
    >
      <DialogTitle id="dialogTitle" className={classes.dialogTitle}>
        <Typography variant="inherit">
          <b><T9n t={title} /></b>
        </Typography>
        {onClose ? (
          <IconButton aria-label="close keys modal" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="keys table">
            <TableHead>
              <TableRow>
                {headerCells}
              </TableRow>
            </TableHead>
            <TableBody>
              {children}
            </TableBody>
          </Table>
        </TableContainer>

      </DialogContent>
    </Dialog>
  );
};

KeysModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  headerCells: PropTypes.node,
  title: PropTypes.string,
};

KeysModal.defaultProps = {
  title: 'KEYS_MODAL_TITLE',
  headerCells: (
    <>
      <TableCell>
        <T9n t="KEYS_MODAL_KEY" />
      </TableCell>
      <TableCell align="right">
        <T9n t="KEYS_MODAL_STATUS" />
      </TableCell>
    </>
  ),
};
