import {
  LAT_ZAPORIZHZHIA,
  LNG_ZAPORIZHZHIA,
} from '../../constants';

import './Map.css';

export const Map = ({ center, zoom, children }) => {

  return (
    <div className="map-container">
      hello
    </div>
  )
}

Map.defaultProps = {
  children: null,
  center: {
    lat: LAT_ZAPORIZHZHIA,
    lng: LNG_ZAPORIZHZHIA,
  },
  zoom: 13,
}
