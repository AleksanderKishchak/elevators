import CircularProgress from '@material-ui/core/CircularProgress';

import { MyDataTable } from './components/MyDataTable';
import { CenteredContainer } from '../CenteredContainer';
import { getUserData } from '../../api';
import { useAppState } from '../../hooks/useAppState';
import { useRequestOnMount } from '../../hooks/useRequestOnMount';
import { ErrorMessage } from '../ErrorMessage';

export const MyAccount = () => {
  const { user } = useAppState();

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
      peopleLive: data.apartment.peopleLive,
      status: user.status.isPaid,
    }),
  );

  return (
    <div className="table-container flex-center">
      <CenteredContainer>
        {!userData && error && <ErrorMessage onClick={forceUpdate} />}

        {!userData && !error && <CircularProgress />}

        {userData && !error && <MyDataTable users={[userData]} />}
      </CenteredContainer>
    </div>
  );
};

export default MyAccount;
