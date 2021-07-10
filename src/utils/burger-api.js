import { getCookie, setCookie } from ".";

const baseUrl = "https://norma.nomoreparties.space/api";
const baseHeaders = { "Content-Type": "application/json" };

export const BURGER_API_WSS_FEED = "wss://norma.nomoreparties.space/orders/all";

const BURGER_API_WSS_ORDERS = "wss://norma.nomoreparties.space/orders";

export const getWssOrderUrlWithToken = () =>
  `${BURGER_API_WSS_ORDERS}?token=${
    getCookie("token") ? getCookie("token").replace("Bearer ", "") : ""
  }`;

const handleRequest = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((error) => Promise.reject(error));
};

export const getIngredients = async () => {
  const res = await fetch(`${baseUrl}/ingredients`);
  return await handleRequest(res);
};

export const getOrderNumber = async (orderData) => {
  return await fetchWithRefresh(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({ ingredients: orderData }),
  });
};

export const getOrderRequest = async (orderNumber) => {
  const res = await fetch(`${baseUrl}/orders/${orderNumber}`, {
    method: "GET",
    headers: baseHeaders,
  });
  return await handleRequest(res);
};

export const getUserOrderRequest = async (orderNumber) => {
  return await fetchWithRefresh(`${baseUrl}/orders/${orderNumber}`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const register = async (email, password, name) => {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password, name }),
  });
  return await handleRequest(res);
};

export const login = async (email, password) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password }),
  });
  return await handleRequest(res);
};

export const forgotPassword = async (email) => {
  const res = await fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email }),
  });
  return await handleRequest(res);
};

export const resetPassword = async (password, token) => {
  const res = await fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ password, token }),
  });
  return await handleRequest(res);
};

export const logout = async () => {
  const res = await fetch(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
  return await handleRequest(res);
};

export const refreshToken = async () => {
  const res = await fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
  return await handleRequest(res);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await handleRequest(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      setCookie("token", refreshData.accessToken.split("Bearer ")[1]);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await handleRequest(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const getUser = async () => {
  return await fetchWithRefresh(`${baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const updateUser = async (name, email, password) => {
  return await fetchWithRefresh(`${baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      ...baseHeaders,
      authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({ name, email, password }),
  });
};
