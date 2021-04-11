import { goTo } from '../utils/goTo';

const baseUrl = 'http://localhost:3004';

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const baseFetch = (endpoint, method = 'GET', body = null) => {
  const promise = fetch(`${baseUrl}/${endpoint}`, {
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

const delayMs = 2000;

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

export const getApartments = (entranceId) => delay(delayMs).then(() => (
  baseFetch(`apartments?entranceId=${entranceId}`)
));
