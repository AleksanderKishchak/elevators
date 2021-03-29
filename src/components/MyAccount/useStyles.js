import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  error: {
    marginBottom: 20,
  },
}));
