import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import {
  LAT_ZAPORIZHZHIA,
  LNG_ZAPORIZHZHIA,
  ZOOM,
} from '../../constants';

import './Map.css';

export const Map = ({ lat, lng, zoom, children }) => {

  return (
    <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}

Map.defaultProps = {
  children: null,
  lat: LAT_ZAPORIZHZHIA,
  lng: LNG_ZAPORIZHZHIA,
  zoom: ZOOM,
};

