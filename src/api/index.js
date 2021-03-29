import user from '../mocks/user.json';

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

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
