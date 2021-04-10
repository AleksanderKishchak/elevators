/* eslint-disable */
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { Copyright } from '../CopyRight';
import './index.css';

export const useStyles = makeStyles(() => ({
  footer: {
    paddingBottom: '5px',
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return null;
  return (
    <div className="footer-container">
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
    </div>
  );
};
