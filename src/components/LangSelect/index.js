import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import LanguageIcon from '@material-ui/icons/Language';

import { LANGS } from '../../constants';
import { useLangs } from '../../hooks/useLangs';
import { T9n } from '../T9n';

const WhiteIcon = () => (
  <KeyboardArrowDownIcon style={{ color: 'white' }} />
);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    transition: theme.transitions.easing.easeInOut,
    transitionDuration: theme.transitions.duration.shortest,
    borderRadius: '4px',
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: 'white',
    position: 'relative',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: 'none',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
}))(InputBase);

export const LangSelect = () => {
  const { lang, setLang } = useLangs();
  const classes = useStyles();

  return (
    <Select
      value={lang}
      onChange={(e) => { setLang(e.target.value); }}
      displayEmpty
      className={classes.root}
      inputProps={{ 'aria-label': 'Without label' }}
      IconComponent={WhiteIcon}
      input={(
        <BootstrapInput
          startAdornment={(
            <InputAdornment position="start">
              <LanguageIcon style={{ color: 'white' }} />
            </InputAdornment>
          )}
        />
      )}
    >
      <MenuItem value={LANGS.ENG}>
        <T9n t="LANGS_ENG" />
      </MenuItem>
      <MenuItem value={LANGS.UKR}>
        <T9n t="LANGS_UKR" />
      </MenuItem>
    </Select>
  );
};
