export const getBounds = (buildingsCoordsList) => {
  const alts = buildingsCoordsList.map((coords) => coords[0]);
  const lgts = buildingsCoordsList.map((coords) => coords[1]);

  const minAlt = Math.min(...alts);
  const maxAlt = Math.max(...alts);
  const minLgt = Math.min(...lgts);
  const maxLgt = Math.max(...lgts);

  return [
    [minAlt, minLgt],
    [maxAlt, maxLgt],
  ];
};
