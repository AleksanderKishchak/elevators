import { useState } from 'react';
import cx from 'classnames';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import { useAppState } from '../../hooks/useAppState';
import { useRequestOnMount } from '../../hooks/useRequestOnMount';
import { getBuildings } from '../../api';
import { BuildingList } from '../BuildingList';
import { BuildingsMap } from '../BuildingsMap';

import './index.css';

const localStorageViewKey = 'isListView';

export const BuildingRoute = () => {
  const { user } = useAppState();
  const [buildings, error, forceUpdate] = useRequestOnMount(() => getBuildings(user.id));
  const [isListView, setIsListView] = useState(!!localStorage.getItem(localStorageViewKey));

  const setView = (value) => () => {
    localStorage.setItem(localStorageViewKey, value);
    setIsListView(value);
  };

  return (
    <>
      <div
        className={cx('view-switch', {
          'view-switch-list': isListView,
          'view-switch-map': !isListView,
        })}
      >
        <ButtonGroup
          size="large"
          color="primary"
          variant="contained"
          aria-label="large contained primary button group"
        >
          <Button
            onClick={setView(true)}
            color={isListView ? 'primary' : 'default'}
          >
            <ListIcon />
          </Button>
          <Button
            onClick={setView(false)}
            color={!isListView ? 'primary' : 'default'}
          >
            <MapIcon />
          </Button>
        </ButtonGroup>
      </div>

      {isListView ? (
        <BuildingList
          forceUpdate={forceUpdate}
          buildings={buildings}
          error={error}
        />
      ) : (
        <BuildingsMap
          forceUpdate={forceUpdate}
          buildings={buildings}
          error={error}
        />
      )}
    </>
  );
};

export default BuildingRoute;
