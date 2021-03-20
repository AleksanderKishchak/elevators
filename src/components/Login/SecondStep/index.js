import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { i18n } from '../../../appConfig';
import { useStyles } from '../useStyles';
import { useSecondStep } from './useSecondStep';

export const SecondStep = ({ onSuccess }) => {
  const classes = useStyles();
  const { formik, isLoading } = useSecondStep(onSuccess);

  return (
    <Container component="main" maxWidth="xs">
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n('SEND_CODE')}
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={i18n('SECOND_STEP_LABEL')}
            id="code"
            name="code"
            type="code"
            autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.code}
            error={!!formik.errors.code && formik.touched.code}
            helperText={i18n(formik.errors.code)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {i18n('SEND_CODE')}
          </Button>
        </form>
      </div>
    </Container>
  );
};

SecondStep.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};
