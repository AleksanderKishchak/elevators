import PropTypes from 'prop-types';

import map from 'lodash/map';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Row } from './Row';
import { i18n } from '../../appConfig';

const useStyles = makeStyles(() => ({
  listHeader: {
    padding: 12,
    marginBottom: 12,
  },
}));

export const BuildingList = ({ buildings }) => {
  const classes = useStyles();

  return (
    <div className="table-container">
      <Container>
        <Paper className={classes.listHeader}>
          <Typography>
            {i18n('BUILDINGS_LIST_NAME')}
          </Typography>
        </Paper>
        <div>
          {
            map(buildings, (building) => (
              <Row key={building.id} building={building} />
            ))
          }
        </div>
      </Container>
    </div>
  );
};

BuildingList.propTypes = {
  buildings: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
