import PropTypes from 'prop-types';
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    alignSelf: 'stretch',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  centered: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  hasInput: {
    [theme.breakpoints.down('xs')]: {
      minHeight: 100,
    },
  },
}));

export const PageName = ({
  children,
  hasInput,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Typography variant="h4" className={cx(classes.centered, { [classes.hasInput]: hasInput })}>
        {children}
      </Typography>
    </Paper>
  );
};

PageName.propTypes = {
  children: PropTypes.node.isRequired,
  hasInput: PropTypes.bool,
};

PageName.defaultProps = {
  hasInput: false,
};
