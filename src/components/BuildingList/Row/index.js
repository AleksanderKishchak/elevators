import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/HomeRounded';

import { T9n } from '../../T9n';

const useRowStyles = makeStyles({

});

export const Row = ({
  building,
}) => {
  const classes = useRowStyles();
  const history = useHistory();

  const goToEntrances = () => {
    history.push(`buildings/${building.id}`);
  };

  return (
    <TableRow className={classes.root}>
      <TableCell>
        <HomeIcon />
      </TableCell>
      <TableCell component="th" scope="row">
        {building.street}
      </TableCell>
      <TableCell>{building.postCode}</TableCell>
      <TableCell align="right">
        <Button variant="contained" onClick={goToEntrances}>
          <T9n t="BUILDINGS_GO_TO_ENTRANCES" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

Row.propTypes = {
  building: PropTypes.shape({
    id: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
  }).isRequired,
};
