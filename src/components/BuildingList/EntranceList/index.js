import { useEffect } from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { CenteredContainer } from '../../CenteredContainer';

export const EntranceList = ({ entrances, fetch }) => {
  useEffect(() => {
    if (!entrances) {
      fetch();
    }
  }, []);

  return (
    <>
      <CenteredContainer>
        {isNull(entrances) && <CircularProgress />}
        {isEmpty(entrances) && !isNull(entrances) && (
          <Typography>No entrances in this building</Typography>
        )}
      </CenteredContainer>

      {entrances && (
        <>
          <Typography gutterBottom component="div">
            Entrances:
          </Typography>
          {map(entrances, (entrance) => (
            <div key={entrance.id}>{entrance.name}</div>
          ))}
        </>
      )}
    </>
  );
};

EntranceList.propTypes = {
  entrances: PropTypes.arrayOf(PropTypes.object.isRequired),
  fetch: PropTypes.func.isRequired,
};

EntranceList.defaultProps = {
  entrances: null,
};
