import { useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { getEntrances } from '../../api';
import { CenteredContainer } from '../CenteredContainer';
import { NavPanel } from '../NavPanel';
import { Row } from './Row';
import { i18n } from '../../appConfig';
import { useRequestOnMount } from '../../hooks/useRequestOnMount';
import { ErrorMessage } from '../ErrorMessage';
import { useApartmentsData } from '../../hooks/useApartmentsData';

const useStyles = makeStyles({
  title: {
    flex: '1 1 100%',
    padding: 15,
  },
  firstCell: {
    maxWidth: 62,
  },
  fab: {
    float: 'left',
    transform: 'translateX(80px)',
  },
});

export const EntranceList = () => {
  const classes = useStyles();
  const { buildingId } = useParams();
  const [entrancesData, error, forceUpdate] = useRequestOnMount(() => getEntrances(buildingId));

  const {
    apartmentsData,
    fetchApartments,
  } = useApartmentsData();

  if (!entrancesData && !error) {
    return (
      <div className="table-container">
        <CenteredContainer>
          <CircularProgress />
        </CenteredContainer>
      </div>
    );
  }

  if (!entrancesData && error) {
    return (
      <div className="table-container">
        <CenteredContainer>
          <ErrorMessage onClick={forceUpdate} />
        </CenteredContainer>
      </div>
    );
  }

  if (isEmpty(entrancesData?.entrances)) {
    return (
      <CenteredContainer>
        <Typography align="center">
          {i18n('EMPTY_ENTRANCES_LIST')}
        </Typography>
      </CenteredContainer>
    );
  }

  return (
    <div className="table-container">
      <NavPanel />
      <CenteredContainer>
        <TableContainer component={Paper}>
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {entrancesData.street}
            {', '}
            {entrancesData.postCode}
          </Typography>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.firstCell}>{i18n('ENTRANCE_TABLE_NAME')}</TableCell>
                <TableCell>{i18n('ENTRANCE_TABLE_ENTRANCE_COLUMN')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entrancesData?.entrances?.map((entrance) => (
                <Row
                  key={entrance.id}
                  entrance={entrance}
                  apartmentsData={apartmentsData[entrance.id]}
                  fetchApartments={fetchApartments}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CenteredContainer>
    </div>
  );
};
