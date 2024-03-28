import axios from "axios";
import apiConfig from "../config/apiConfig";

// function that create the api service

const { baseURL } = apiConfig;

const api = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { status } = error.response || {};
    //if (status === 401 || status === 403) logout();
    return Promise.reject(error);
  }
);

export default api;
