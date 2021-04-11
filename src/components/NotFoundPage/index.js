import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';
import { i18n } from '../../appConfig';

const useStyles = makeStyles({
  root: {
    padding: '20px 0',
  },
  sidePadding: {
    padding: '0 20px 20px 20px',
  },
  padding: {
    padding: '20px 20px 0 20px',
  },
  lineBreak: {
    borderBottom: '1px solid rgba(160,160,160,0.2);',
  },
});

export const NotFoundPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const goTo = (url) => {
    history.replace(url);
  };

  const goToMyAcc = () => {
    goTo('/my-account');
  };

  const goToMyBuildings = () => {
    goTo('/buildings');
  };

  return (
    <div className="table-container">
      <Container>
        <Paper elevation={3} className={classes.root}>
          <Typography variant="h3" className={classes.sidePadding}>
            {i18n('NOT_FOUND_PAGE_TITLE')}
          </Typography>
          <Typography className={classes.sidePadding}>
            {i18n('NOT_FOUND_PAGE_SUBTITLE')}
          </Typography>
          <div className={classes.lineBreak} />
          <div className={classes.padding}>
            <Button onClick={goToMyAcc} color="primary">
              {i18n('GO_TO_MY_ACC')}
            </Button>
            <Button onClick={goToMyBuildings} color="primary">
              {i18n('GO_TO_MY_BUILDINGS')}
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};
