import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { useIsAdmin } from '../../hooks/config.hooks';
import { useAppState } from '../../hooks/useAppState';

export const useHeader = () => {
  const [,, removeCookie] = useCookies(['token']);
  const history = useHistory();
  const location = useLocation();
  const isAdmin = useIsAdmin();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const {
    setUser,
    setAccessAllowed,
  } = useAppState();

  const isPath = (url) => location.pathname.includes(url);

  const isLogin = isPath('/login');
  const isMyAcc = isPath('/my-account');
  const isMyBuildings = isPath('/buildings');

  const shouldShowGoToMyAccBtn = !isLogin && !isMyAcc;
  const showMyBuildingsBtn = !isLogin && !isMyBuildings && isAdmin;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logOut = () => {
    setUser(null);
    setAccessAllowed(false);
    removeCookie('token');
    handleClose();
  };

  const goTo = (url) => {
    history.push(url);
  };

  const goToMyAcc = () => {
    handleClose();
    setTimeout(() => { goTo('/my-account'); }, 200);
  };

  const goToMyBuildings = () => {
    handleClose();
    setTimeout(() => { goTo('/buildings'); }, 200);
  };

  // const toggleTheme = () => {
  //   const newTheme = theme === themeKeys.light ? themeKeys.dark : themeKeys.light;
  //   localStorage.setItem('theme', newTheme);
  //   setTheme(newTheme);
  // };

  return {
    shouldShowGoToMyAccBtn,
    showMyBuildingsBtn,
    goToMyAcc,
    goToMyBuildings,
    handleMenu,
    handleClose,
    anchorEl,
    open,
    logOut,
  };
};
