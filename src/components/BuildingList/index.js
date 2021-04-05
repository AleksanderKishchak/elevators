import PropTypes from 'prop-types';

import map from 'lodash/map';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import { Row } from './Row';
import { useBuildingList } from './useBuildingList';
import { i18n } from '../../appConfig';

const useStyles = makeStyles({
  firstColumn: {
    width: 200,
  },
});

export const BuildingList = ({ buildings }) => {
  const classes = useStyles();
  const { entrances, fetchEntrances } = useBuildingList();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.firstColumn}>{i18n('BUILDINGS_LIST_NAME')}</TableCell>
            <TableCell align="left">{i18n('BUILDINGS_STREET_TITLE')}</TableCell>
            <TableCell align="left">{i18n('BUILDINGS_POST_CODE_TITLE')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            map(buildings, (building) => (
              <Row
                key={building.id}
                building={building}
                entrances={entrances[building.id]}
                fetchEntrances={() => fetchEntrances(building.id)}
              />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

BuildingList.propTypes = {
  buildings: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
