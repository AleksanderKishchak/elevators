import { useState } from 'react';
import cx from 'classnames';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useAppState } from '../../hooks/useAppState';
import { useRequestOnMount } from '../../hooks/useRequestOnMount';
import { getBuildings } from '../../api';
import { BuildingList } from '../BuildingList';
import { BuildingsMap } from '../BuildingsMap';

import './index.css';
import { T9n } from '../T9n';
import { useLangs } from '../../hooks/useLangs';

const localStorageViewKey = 'isListView';

export const BuildingRoute = () => {
  const { user } = useAppState();
  const { locale } = useLangs();
  const [buildings, error, forceUpdate] = useRequestOnMount(() => getBuildings(user.id));
  const [isListView, setIsListView] = useState(localStorage.getItem(localStorageViewKey) === 'true');
  const [searchText, setSearchText] = useState('');
  const filteredBuildings = !buildings
    ? undefined
    : buildings.filter((bldg) => new RegExp(searchText, 'i').test(bldg.street));

  const handleChane = ({ target }) => {
    setSearchText(target.value);
  };

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
        {!isListView && (
          <Paper>
            <TextField
              label={<T9n t="SEARCH_LABEL" />}
              placeholder={locale.get('SEARCH_PLACEHOLDER')}
              variant="outlined"
              value={searchText}
              size="small"
              onChange={handleChane}
            />
          </Paper>
        )}
        <div style={{ width: '10px', height: '10px' }} />
        <ButtonGroup
          size="large"
          color="primary"
          variant="contained"
          aria-label="view switcher"
        >
          <Button
            aria-label="list view"
            onClick={setView(true)}
            color={isListView ? 'primary' : 'default'}
          >
            <ListIcon />
          </Button>
          <Button
            aria-label="map view"
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
          buildings={filteredBuildings}
          error={error}
          searchText={searchText}
          handleSearchChange={handleChane}
        />
      ) : (
        <BuildingsMap
          forceUpdate={forceUpdate}
          buildings={filteredBuildings}
          error={error}
        />
      )}
    </>
  );
};

export default BuildingRoute;
