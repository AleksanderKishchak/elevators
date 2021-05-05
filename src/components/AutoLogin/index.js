import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

import { useAppState } from '../../hooks/useAppState';
import { postLoginByToken } from '../../api';
import { useIsLoggedIn } from '../../hooks/config.hooks';
import { goTo } from '../../utils/goTo';
import { LazyLoader } from '../LazyLoader';

export const AutoLogin = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const { setUser, setAccessAllowed } = useAppState();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) return;

    if (!cookies.token) {
      goTo('/login');
      return;
    }

    postLoginByToken(cookies.token).then((user) => {
      setUser(user);
      setAccessAllowed(true);
    }).catch(() => {
      goTo('/login');
    });
  }, [cookies.token, isLoggedIn, setAccessAllowed, setUser]);

  return isLoggedIn
    ? children
    : <LazyLoader />;
};

AutoLogin.propTypes = {
  children: PropTypes.node,
};

AutoLogin.defaultProps = {
  children: null,
};
