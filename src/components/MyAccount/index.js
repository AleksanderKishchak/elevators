import CircularProgress from '@material-ui/core/CircularProgress';

import { MyDataTable } from './components/MyDataTable';
import { CenteredContainer } from '../CenteredContainer';
import { getUserData } from '../../api';
import { useAppState } from '../../hooks/useAppState';
import { useRequestOnMount } from '../../hooks/useRequestOnMount';
import { ErrorMessage } from '../ErrorMessage';
import { T9n } from '../T9n';
import { PageName } from '../PageName';
import { useIsAdmin } from '../../hooks/config.hooks';
import { NavPanel } from '../NavPanel';

export const MyAccount = () => {
  const { user } = useAppState();
  const isAdmin = useIsAdmin();

  const [userData, error, forceUpdate] = useRequestOnMount(
    () => getUserData(user.id),
    (data) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      address: {
        street: data.building.street,
        entrance: data.entrance.name,
        room: data.apartment.name,
        floor: data.apartment.floor,
      },
      users: data.users,
      keys: data.keys,
      status: {
        isPaid: user.status.isPaid,
      },
    }),
  );

  return (
    <div className="table-container flex-center">
      <CenteredContainer>
        {isAdmin && (
          <NavPanel />
        )}
        <PageName>
          <T9n t="GO_TO_MY_ACC" />
        </PageName>
        {!userData && error && <ErrorMessage onClick={forceUpdate} />}

        {!userData && !error && <CircularProgress />}

        {userData && !error && <MyDataTable users={[userData]} />}
      </CenteredContainer>
    </div>
  );
};

export default MyAccount;
