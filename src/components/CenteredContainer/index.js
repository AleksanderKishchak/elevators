import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const CenteredContainer = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container className={classes.center} {...props}>
      {children}
    </Container>
  );
};

CenteredContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
