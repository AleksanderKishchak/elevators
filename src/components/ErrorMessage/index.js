import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { i18n } from '../../appConfig';
import { useStyles } from './useStyles';

export const ErrorMessage = ({ onClick }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.error}>
        <Typography align="center" color="secondary">
          {i18n('REQUEST_ERROR')}
        </Typography>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClick}
      >
        {i18n('RELOAD_PAGE')}
      </Button>
    </>
  );
};

ErrorMessage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
