/* eslint-disable */
import user from '../mocks/user.json';
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

const delayMs = 1000;

// eslint-disable-next-line no-unused-vars
export const postLogin = (login, pass) => delay(delayMs);

// eslint-disable-next-line no-unused-vars
export const postAuthCode = (code) => delay(delayMs).then(() => Promise.resolve(user));

// eslint-disable-next-line no-unused-vars
export const getUserData = (userId) => delay(delayMs).then(() => {
  if (!userId) {
    return Promise.resolve(user);
  }

  return Promise.reject(new Error('test error'));
});

// eslint-disable-next-line no-unused-vars
export const getBuildings = (adminId) => {
  return baseFetch('buildings')
};
