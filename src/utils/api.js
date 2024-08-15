const BASE_URL = "http://hackathonproject.sytes.net/api/v1";

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
  return fetch(`${BASE_URL}/users/402`, {
    // id 402 установлен для исключения этапа авторизации
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://hackathonproject.sytes.net/api/v1",
    },
  }).then(getResponse);
};

export const getWorkerInfo = (workerId) => {
  return fetch(`${BASE_URL}/users/${workerId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://hackathonproject.sytes.net/api/v1",
    },
  }).then(getResponse);
};

export const getUsersInfo = () => {
  return fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://hackathonproject.sytes.net/api/v1",
    },
  }).then(getResponse);
};

export const getProjectsInfo = () => {
  return fetch(`${BASE_URL}/projects`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://hackathonproject.sytes.net/api/v1",
    },
  }).then(getResponse);
};
