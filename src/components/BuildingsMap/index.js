/* eslint-disable */
import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';

import { ZP } from '../../constants';
import { BuildingMarker, BuildingPropType } from './Marker';
import { ErrorMessage } from '../ErrorMessage';
import { CenteredContainer } from '../CenteredContainer';
import { getBounds } from '../../utils/getBounds';
import { MoveMap } from './MoveMap';

import './index.css';

export const BuildingsMap = ({
  buildings,
  error,
  forceUpdate,
}) => {
  if (error) {
    return (
      <CenteredContainer>
        <ErrorMessage onClick={forceUpdate} />
      </CenteredContainer>
    );
  }

  const bounds = buildings
    ? getBounds(buildings?.map((b) => b.coords))
    : {};

  return (
    <div className="map-container">
      <MapContainer center={[ZP.alt, ZP.lgt]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MoveMap buildings={buildings} bounds={bounds} />
         {buildings?.map((building) => (<BuildingMarker building={building} key={building.id} />))}
      </MapContainer>
    </div>
  );
};

BuildingsMap.propTypes = {
  buildings: PropTypes.arrayOf(BuildingPropType),
  error: PropTypes.oneOf([null, PropTypes.object]),
  forceUpdate: PropTypes.func.isRequired,
};

BuildingsMap.defaultProps = {
  buildings: [],
  error: null,
};
