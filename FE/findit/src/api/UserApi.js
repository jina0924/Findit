import axios from "axios";

import ls from "../helper/LocalStorage";

axios.defaults.withCredentials = true;
// configuration
const UserApi = axios.create({
  baseURL: "https://findit.life/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

UserApi.interceptors.request.use(
  config => {
    const accessToken = ls.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default UserApi;
