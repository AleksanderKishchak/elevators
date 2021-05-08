import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    alignSelf: 'stretch',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

export const PageName = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Typography variant="h4">
        {children}
      </Typography>
    </Paper>
  );
};

PageName.propTypes = {
  children: PropTypes.node.isRequired,
};
