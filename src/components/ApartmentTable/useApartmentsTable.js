import { useState } from 'react';
import { useLangs } from '../../hooks/useLangs';
import {
  addKeyToUser,
  deleteKey, deleteKeyFromUser, patchKey, postKey,
} from '../../api';

export const useApartmentsTable = ({
  apartmentsData,
  updateApartmentData,
}) => {
  const { locale } = useLangs();
  const [keyModalParams, setKeyModalParams] = useState(null);
  const userName = `${keyModalParams?.user.firstName || ''} ${keyModalParams?.user.lastName || ''}`;
  const modalTitle = `${locale.get('KEYS_MODAL_ADMIN_TITLE')}${userName}`;

  const openModal = ({
    user, keys, id, entranceId,
  }) => () => {
    setKeyModalParams({
      keys,
      user,
      apartmentId: id,
      entranceId,
    });
  };

  const onUpdateKeys = async ({ entranceId, apartmentId }, key) => {
    let changedKey = null;
    try {
      changedKey = await patchKey(key.id, !key.isActive);
    } catch (error) {
      console.error(error);
    }

    const newApartment = apartmentsData.data.find(({ id }) => id === apartmentId);

    if (!newApartment || !changedKey) return;

    const newKeys = newApartment.keys
      .map((key) => {
        if (key.id !== changedKey.id) return key;

        return changedKey;
      });

    newApartment.keys = newKeys;

    updateApartmentData(entranceId, apartmentId, newApartment);
    setKeyModalParams((prev) => ({ ...prev, keys: newKeys }));
  };

  const onDeleteKey = async ({ entranceId, apartmentId, user }, keyId) => {
    await Promise.all([
      deleteKeyFromUser(user.id, keyId),
      deleteKey(keyId),
    ]);

    const newApartment = apartmentsData.data.find(({ id }) => id === apartmentId);
    if (!newApartment) return;

    const newKeys = newApartment.keys
      .filter((key) => key.id !== keyId);

    const newUser = {
      ...newApartment.user,
      keys: newKeys.map((k) => k.id),
    };

    newApartment.keys = newKeys;
    newApartment.user = newUser;

    updateApartmentData(entranceId, apartmentId, newApartment);
    setKeyModalParams((prev) => ({ ...prev, keys: newKeys, user: newUser }));
  };

  // eslint-disable-next-line no-unused-vars
  const onAddKey = ({ entranceId, apartmentId, user }) => async (keyValue) => {
    const key = await postKey(keyValue);
    await addKeyToUser(user.id, key.id);

    const newApartment = apartmentsData.data.find(({ id }) => id === apartmentId);
    const newKeys = newApartment.keys.concat(key);

    const newUser = {
      ...newApartment.user,
      keys: newKeys.map((k) => k.id),
    };

    newApartment.keys = newKeys;
    newApartment.user = newUser;

    updateApartmentData(entranceId, apartmentId, newApartment);
    setKeyModalParams((prev) => ({ ...prev, keys: newKeys, user: newUser }));
  };

  const resetModalParams = () => setKeyModalParams(null);

  return {
    openModal,
    onUpdateKeys,
    onDeleteKey,
    onAddKey,
    keyModalParams,
    resetModalParams,
    modalTitle,
  };
};
