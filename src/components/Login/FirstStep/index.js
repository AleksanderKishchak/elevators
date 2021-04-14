import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useTheme } from '@material-ui/core/styles';

import { i18n } from '../../../appConfig';
import { useStyles } from '../useStyles';
import { useFirstStep } from './useFirstStep';

const shouldShowError = (fieldName, formik) => (
  !!formik.errors[fieldName] && formik.touched[fieldName]
);

export const FirstStep = ({ onSuccess }) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    formik,
    isLoading,
    onRecaptchaChange,
  } = useFirstStep(onSuccess);

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
          {i18n('SIGN_IN')}
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={i18n('EMAIL_ADDRESS_LABEL')}
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={shouldShowError('email', formik)}
            helperText={i18n(formik.errors.email)}
          />
          <TextField
            className={classes.marginBottom}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={i18n('PASSWORD_LABEL')}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={shouldShowError('password', formik)}
            helperText={
              shouldShowError('password', formik)
              && i18n(formik.errors.password)
            }
          />
          <div className="flex-center">
            <ReCAPTCHA
              onChange={onRecaptchaChange}
              sitekey="6LfMfIcaAAAAAMLjS9J0yLsudH5cWfaWY1edFlfa"
              theme={theme.palette.type}
              hl="uk"
            />
          </div>
          {shouldShowError('isCaptchaCompleted', formik) && (
            <FormHelperText error variant="filled">
              {i18n(formik.errors.isCaptchaCompleted)}
            </FormHelperText>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {i18n('SIGN_IN')}
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="/" variant="body2">
              {i18n('FORGOT_PASSWORD')}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" variant="body2">
              {i18n('GO_TO_SIGN_UP')}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

FirstStep.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};
