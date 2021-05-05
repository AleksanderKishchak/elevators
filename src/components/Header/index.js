import { Link } from 'react-router-dom';
import { makeStyles/* , useTheme */ } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
// import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
// import Tooltip from '@material-ui/core/Tooltip';

import { ReactComponent as ElevatorIcon } from '../../images/elevator.svg';
import { LangSelect } from '../LangSelect';
import { useHeader } from './useHeader';
import { useIsLoggedIn } from '../../hooks/config.hooks';
import { T9n } from '../T9n';
// import { themeKeys } from '../../themes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.info.dark,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'inline-flex',
    textDecoration: 'none',
    color: 'white',
    alignItems: 'center',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const isLoggedIn = useIsLoggedIn();
  const {
    shouldShowGoToMyAccBtn,
    showMyBuildingsBtn,
    goToMyAcc,
    goToMyBuildings,
    handleMenu,
    handleClose,
    anchorEl,
    open,
    logOut,
  } = useHeader();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.title}>
          <Link to="/" className={classes.link}>
            <ElevatorIcon id="elevator-icon" />

            <Typography variant="h6">
              <T9n t="APP_NAME" />
            </Typography>
          </Link>
        </div>
        {/* <Tooltip title={i18n('SWITCH_THEME')} arrow>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
          >
            {
              theme === 'light'
                ? <Brightness4Icon />
                : <BrightnessHighIcon />
            }
          </IconButton>
        </Tooltip> */}
        <LangSelect />
        {isLoggedIn && (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {shouldShowGoToMyAccBtn && (
                <MenuItem onClick={goToMyAcc}>
                  <T9n t="GO_TO_MY_ACC" />
                </MenuItem>
              )}
              {showMyBuildingsBtn && (
                <MenuItem onClick={goToMyBuildings}>
                  <T9n t="GO_TO_MY_BUILDINGS" />
                </MenuItem>
              )}
              {isLoggedIn && (
                <MenuItem onClick={logOut}>
                  <T9n t="LOG_OUT" />
                </MenuItem>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
