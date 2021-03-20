const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const delayMs = 1000;

// eslint-disable-next-line no-unused-vars
export const postLogin = (login, pass) => delay(delayMs);

// eslint-disable-next-line no-unused-vars
export const postAuthCode = (code) => delay(delayMs);
