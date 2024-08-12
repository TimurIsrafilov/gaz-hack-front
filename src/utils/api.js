const BASE_URL = "https://hackathonproject.sytes.net/api/v1";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://hackathonproject.sytes.net",
      Authorization: `Bearer 2177e520382dbdcfa3f1df67538708aad1451a37`,
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then(getResponse);
};

export const getProfileInfo = (userId) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://hackathonproject.sytes.net",
      Authorization: `Bearer 2177e520382dbdcfa3f1df67538708aad1451a37`,
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then(getResponse);
};

export const getUsersInfo = () => {
  return fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://hackathonproject.sytes.net",
      Authorization: `Bearer 2177e520382dbdcfa3f1df67538708aad1451a37`,
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then(getResponse);
};

export const getProjectsInfo = () => {
  return fetch(`${BASE_URL}/projects`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://hackathonproject.sytes.net",
      Authorization: `Bearer 2177e520382dbdcfa3f1df67538708aad1451a37`,
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then(getResponse);
};
