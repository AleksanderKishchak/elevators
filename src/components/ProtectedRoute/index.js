import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAppState } from '../../hooks/useAppState';
import { AutoLogin } from '../AutoLogin';

export const ProtectedRoute = ({ children, forAdminOnly, ...props }) => {
  const { user } = useAppState();

  return (
    <AutoLogin>
      {
        forAdminOnly && !user?.isAdmin
          ? <Redirect to="/my-account" />
          // eslint-disable-next-line react/jsx-props-no-spreading
          : <Route {...props}>{children}</Route>
      }
    </AutoLogin>
  );
};

ProtectedRoute.propTypes = {
  ...Route.propTypes,
  forAdminOnly: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  forAdminOnly: false,
};
