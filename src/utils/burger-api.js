const baseUrl = "https://norma.nomoreparties.space/api";
const baseHeaders = { "Content-Type": "application/json" };

const handleRequest = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const register = (email, password, name) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password, name }),
  }).then((res) => handleRequest(res));
};

export const login = (login, password) => {
  return fetch(`${baseUrl}/auth`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ login, password }),
  }).then((res) => handleRequest(res));
};

export const forgotPassword = (value) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email: value }),
  }).then((res) => handleRequest(res));
};

export const resetPassword = (password, token) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ password, token }),
  }).then((res) => handleRequest(res));
};
