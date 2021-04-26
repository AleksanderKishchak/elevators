import { goTo } from '../utils/goTo';

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

const delayMs = process.env.NODE_ENV === 'production' ? 0 : 2000;
// const delayMs = 0;

// eslint-disable-next-line no-unused-vars
export const postLogin = (login, pass) => delay(0).then(() => {
  const userId = login === 'admin@gmail.com' ? 1 : 0;

  return (
    baseFetch(`users/${userId}`)
  );
});

// eslint-disable-next-line no-unused-vars
export const postAuthCode = (code) => delay(delayMs).then(() => Promise.resolve());

// eslint-disable-next-line no-unused-vars
export const getUserData = (userId) => delay(delayMs).then(() => baseFetch(`users/${userId}`).then(async (user) => {
  const apartmentData = await baseFetch(`apartments/${user.apartmentId}`);
  const entranceData = await baseFetch(`entrances/${apartmentData.entranceId}`);
  const buildingData = await baseFetch(`buildings/${entranceData.buildingId}`);

  return {
    apartment: apartmentData,
    entrance: entranceData,
    building: buildingData,
  };
}));

// eslint-disable-next-line no-unused-vars
export const getBuildings = (adminId) => delay(delayMs).then(() => baseFetch('buildings'));

export const getEntrances = (buildingId) => delay(delayMs).then(() => (
  baseFetch(`buildings/${buildingId}?_embed=entrances`)
));

export const getApartments = (entranceId) => delay(delayMs).then(async () => {
  const apartments = await baseFetch(`apartments?entranceId=${entranceId}`);
  const userIds = apartments.map((a) => a.userId);
  const idParams = `id=${userIds.join('&id=')}`;

  const users = await baseFetch(`users?${idParams}`);

  const usersMap = users?.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {});

  return apartments?.map((a) => {
    const user = usersMap[a.userId];

    return {
      ...a,
      user,
    };
  });
});
