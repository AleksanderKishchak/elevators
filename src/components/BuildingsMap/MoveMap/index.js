import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const MoveMap = ({
  buildings, bounds,
}) => {
  const map = useMap();

  useEffect(() => {
    if (buildings) {
      map.fitBounds(bounds, {
        padding: [2, 2],
      });
    }
  }, [map, buildings, bounds]);

  return null;
};
