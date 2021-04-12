import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Popup, Marker } from 'react-leaflet';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { i18n } from '../../../appConfig';

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
          ,
          {building.postCode}
        </Typography>
        <Button onClick={onClick}>
          {i18n('BUILDINGS_GO_TO_ENTRANCES')}
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
