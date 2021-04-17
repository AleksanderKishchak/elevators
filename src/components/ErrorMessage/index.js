import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './useStyles';
import { T9n } from '../T9n';

export const ErrorMessage = ({ onClick }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.error}>
        <Typography align="center" color="secondary">
          <T9n t="REQUEST_ERROR" />
        </Typography>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClick}
      >
        <T9n t="RELOAD_PAGE" />
      </Button>
    </>
  );
};

ErrorMessage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
