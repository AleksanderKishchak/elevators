import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Popup, Marker } from 'react-leaflet';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { T9n } from '../../T9n';

export const BuildingMarker = ({ building }) => {
  const match = useRouteMatch();
  const history = useHistory();

  if (!building.coords) {
    return null;
  }

  const onClick = () => {
    history.push(`${match.url}/${building.id}`);
  };

  return (
    <Marker position={building.coords}>
      <Popup>
        <Typography>
          {building.street}
        </Typography>
        <Button onClick={onClick}>
          <T9n t="BUILDINGS_GO_TO_ENTRANCES" />
        </Button>
      </Popup>
    </Marker>
  );
};

export const BuildingPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  street: PropTypes.string.isRequired,
  postCode: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number),
});

BuildingMarker.propTypes = {
  building: BuildingPropType.isRequired,
};
