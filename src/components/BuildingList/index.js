import map from 'lodash/map';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Row } from './Row';
import { CenteredContainer } from '../CenteredContainer';
import { ErrorMessage } from '../ErrorMessage';
import { BuildingPropType } from '../BuildingsMap/Marker';
import { T9n } from '../T9n';

const useStyles = makeStyles({
  firstColumn: {
    width: 200,
  },
});

export const BuildingList = ({
  buildings,
  error,
  forceUpdate,
}) => {
  const classes = useStyles();

  const renderList = () => (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.firstColumn}>
              <T9n t="BUILDINGS_LIST_NAME" />
            </TableCell>
            <TableCell align="left">
              <T9n t="BUILDINGS_STREET_TITLE" />
            </TableCell>
            <TableCell>
              <T9n t="BUILDINGS_POST_CODE_TITLE" />
            </TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            map(buildings, (building) => (
              <Row
                key={building.id}
                building={building}
              />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className="table-container">
      <CenteredContainer>
        {(!error && !buildings) && <CircularProgress />}
        {(error && !buildings) && <ErrorMessage onClick={forceUpdate} />}
        {buildings && renderList()}
      </CenteredContainer>
    </div>
  );
};

BuildingList.propTypes = {
  buildings: PropTypes.arrayOf(BuildingPropType),
  error: PropTypes.oneOf([null, PropTypes.object]),
  forceUpdate: PropTypes.func.isRequired,
};

BuildingList.defaultProps = {
  buildings: [],
  error: null,
};
