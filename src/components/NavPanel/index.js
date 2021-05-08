import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    padding: 0,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  arrowLeft: {
    transform: 'rotate(180deg)',
  },
}));

export const NavPanel = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container>
      <Paper elevation={0} square className={classes.paper}>
        <Button
          aria-label="go back button"
          onClick={() => history.goBack()}
        >
          <ArrowRightAltIcon className={classes.arrowLeft} />
        </Button>

        <Button
          aria-label="go forward button"
          onClick={() => history.goForward()}
        >
          <ArrowRightAltIcon />
        </Button>
      </Paper>
    </Container>
  );
};
