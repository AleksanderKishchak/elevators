import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { T9n } from '../T9n';
import { useLangs } from '../../hooks/useLangs';

const useStyles = makeStyles({
  lastCell: {
    paddingLeft: 0,
  },
  btn: {
    minWidth: 150,
  },
});

export const AddKeyRow = ({ onSubmit }) => {
  const classes = useStyles();
  const { locale } = useLangs();
  const [isFormActive, setFormActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue) return;

    onSubmit(inputValue);
    setInputValue('');
    setFormActive(false);
  };

  const handleClose = () => {
    setInputValue('');
    setFormActive(false);
  };

  return (
    <TableRow>
      {!isFormActive && (
        <>
          <TableCell colSpan={3} align="right">
            <Button
              onClick={() => setFormActive(true)}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              <T9n t="KEYS_MODAL_ADD_BTN" />
            </Button>
          </TableCell>
          <TableCell />
        </>
      )}
      {isFormActive && (
        <>
          <TableCell colSpan={2}>
            <TextField
              value={inputValue}
              onChange={handleChange}
              fullWidth
              label={<T9n t="KEYS_MODAL_KEY" />}
              placeholder={locale.get('KEYS_MODAL_KEY_EXAMPLE')}
            />
          </TableCell>
          <TableCell align="right">
            <Button
              onClick={handleSubmit}
              className={classes.btn}
              color="primary"
              variant="contained"
            >
              <T9n t="KEY_MODAL_SAVE_NEW" />
            </Button>
          </TableCell>
          <TableCell className={classes.lastCell}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

AddKeyRow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
