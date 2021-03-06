import { goTo } from '../utils/goTo';
import { toHashMap } from '../utils/toHashMap';

const baseUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3004'
  : 'https://zp-elevators.herokuapp.com';

const baseApiUrl = `${baseUrl}/api`;

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const baseFetch = (endpoint, method = 'GET', body = null) => {
  const promise = fetch(`${baseApiUrl}/${endpoint}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return promise
    .then((response) => response.json())
    .then((response) => {
      if (response && response.errors) {
        return Promise.reject(response);
      }
      return response;
    })
    .catch((err) => {
      if (err?.errors) {
        const unauthenticated = err.errors
          .some(({ status }) => status === 401);

        if (unauthenticated) {
          goTo('/login');
        }
      }
      return {};
    });
};

const delayMs = process.env.NODE_ENV === 'production' ? 0 : 0;
// const delayMs = 0;

// eslint-disable-next-line no-unused-vars
export const postLogin = (login, pass) => delay(delayMs).then(() => {
  // const userId = login === 'admin@gmail.com' ? 1 : 0;
  const userId = new RegExp('0954289684').test(login) ? 1 : 0;

  return (
    baseFetch(`users/${userId}`)
  );
});

export const postLoginByToken = (token) => delay(delayMs).then(() => baseFetch(`users/${token}`));

// eslint-disable-next-line no-unused-vars
export const postAuthCode = (code) => delay(delayMs).then(() => Promise.resolve());

// eslint-disable-next-line no-unused-vars
export const getUserData = (userId) => delay(delayMs).then(() => baseFetch(`users/${userId}`).then(async (user) => {
  let keysDataPromise = Promise.resolve([]);

  if (user.keys?.length !== 0) {
    const keysParams = `id=${user.keys.join('&id=')}`;
    keysDataPromise = baseFetch(`keys?${keysParams}`);
  }

  const apartmentData = await baseFetch(`apartments/${user.apartmentId}`);
  const usersPromise = baseFetch(`users?apartmentId=${apartmentData.id}`);
  const entranceData = await baseFetch(`entrances/${apartmentData.entranceId}`);
  const buildingData = await baseFetch(`buildings/${entranceData.buildingId}`);
  const keysData = await keysDataPromise;
  const usersData = await usersPromise;

  return {
    apartment: apartmentData,
    entrance: entranceData,
    building: buildingData,
    keys: keysData.filter(({ isDeleted }) => !isDeleted),
    users: usersData,
  };
}));

// eslint-disable-next-line no-unused-vars
export const getBuildings = (adminId) => delay(delayMs).then(() => baseFetch('buildings'));

export const getEntrances = (buildingId) => delay(delayMs).then(() => (
  baseFetch(`buildings/${buildingId}?_embed=entrances`)
));

export const getApartments = (entranceId) => delay(delayMs).then(async () => {
  const apartments = await baseFetch(`apartments?entranceId=${entranceId}`);
  const apartmentIds = apartments.map((a) => a.id);
  const idParams = `apartmentId=${apartmentIds.join('&apartmentId=')}`;

  const users = await baseFetch(`users?${idParams}`);

  const keyIds = users
    .map((u) => u.keys)
    .flat();
  const keysParams = `id=${keyIds.join('&id=')}`;
  const keys = await baseFetch(`keys?${keysParams}`);

  const usersMap = toHashMap(users, 'id');

  return apartments?.map((a) => {
    const user = usersMap[a.userId];
    const usersInFlat = users.filter((u) => a.id === u.apartmentId);

    return {
      ...a,
      user,
      usersInFlat,
      keys: keys
        .filter(({ isDeleted }) => !isDeleted)
        .filter((key) => user.keys.includes(key.id)),
    };
  });
});

export const patchKey = (keyId, isActive) => baseFetch(
  `keys/${keyId}`,
  'PATCH',
  JSON.stringify({ isActive }),
);

export const deleteKey = (keyId) => baseFetch(
  `keys/${keyId}`,
  'PATCH',
  JSON.stringify({ isDeleted: true }),
);

export const postKey = (keyValue) => baseFetch(
  'keys',
  'POST',
  JSON.stringify({ isActive: false, name: keyValue }),
);

const patchUserKeys = async (keysTransformer, userId) => {
  const user = await baseFetch(`users/${userId}`);

  const newKeys = keysTransformer(user.keys);

  return baseFetch(
    `users/${userId}`,
    'PATCH',
    JSON.stringify({ keys: newKeys }),
  );
};

export const deleteKeyFromUser = (userId, keyId) => {
  const keysTransformer = (keys) => keys.filter((id) => id !== keyId);

  return patchUserKeys(keysTransformer, userId);
};

export const addKeyToUser = async (userId, keyId) => {
  const keysTransformer = (keys) => keys.concat(keyId);

  return patchUserKeys(keysTransformer, userId);
};
