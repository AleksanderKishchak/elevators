import { Route, Redirect } from 'react-router-dom';

import isNil from 'lodash/isNil';

import { useAppState } from '../../hooks/useAppState';

export const ProtectedRoute = ({ children, ...props }) => {
  const { user } = useAppState();

  return isNil(user)
    ? <Redirect to="/login" />
    // eslint-disable-next-line react/jsx-props-no-spreading
    : <Route {...props}>{children}</Route>;
};

ProtectedRoute.propTypes = Route.propTypes;
