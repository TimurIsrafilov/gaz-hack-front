const BASE_URL = "https://hackathonproject.sytes.net/api/v1";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getProfileInfo = (userId) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://api.itf.nomoredomains.monster",
      Authorization: `Bearer 2177e520382dbdcfa3f1df67538708aad1451a37`,
    },
  }).then(getResponse);
};

export default getProfileInfo;
