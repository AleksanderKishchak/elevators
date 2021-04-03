import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Row = ({ building }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
          {building.street}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          content with entrances
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

Row.propTypes = {
  building: PropTypes.shape({
    id: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
};
