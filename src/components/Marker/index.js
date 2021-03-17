import { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Marker as DefaultMarker,
} from 'react-leaflet';

const MarkerEffect = () => {
  useEffect(() => {
    console.log('click simulation');
  }, [])

  return null;
}

export const Marker = ({ lat, lng }) => {

  return (
    <DefaultMarker position={[lat, lng]}>
      <MarkerEffect />
    </DefaultMarker>
  )
}

Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
}
