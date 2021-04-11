import { useAppState } from './useAppState';

export const useIsAdmin = () => {
  const { user } = useAppState();

  return Boolean(user?.isAdmin);
};

export const useIsLoggedIn = () => {
  const { user, accessAllowed } = useAppState();

  return Boolean(user && accessAllowed);
};
