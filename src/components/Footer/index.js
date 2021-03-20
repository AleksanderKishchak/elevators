import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { Copyright } from '../CopyRight';

export const useStyles = makeStyles(() => ({
  footer: {
    paddingBottom: '5px',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.footer}>
      <Copyright />
    </Box>
  );
};
