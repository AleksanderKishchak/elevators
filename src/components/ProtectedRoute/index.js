import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import isNil from 'lodash/isNil';

import { useAppState } from '../../hooks/useAppState';

export const ProtectedRoute = ({ children, forAdminOnly, ...props }) => {
  const { user, accessAllowed } = useAppState();

  if (isNil(user) || !accessAllowed) {
    return <Redirect to="/login" />;
  }

  return forAdminOnly && !user?.isAdmin
    ? <Redirect to="/my-account" />
    // eslint-disable-next-line react/jsx-props-no-spreading
    : <Route {...props}>{children}</Route>;
};

ProtectedRoute.propTypes = {
  ...Route.propTypes,
  forAdminOnly: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  forAdminOnly: false,
};
