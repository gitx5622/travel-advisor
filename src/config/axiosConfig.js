import axios from 'axios';

const axiosConfig = axios;

axiosConfig.defaults.headers = {
  'Content-Type': 'application/json'
};

axiosConfig.defaults.baseURL = `https://api.themoviedb.org/3/`;
axiosConfig.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      return  "There was an error processing the api";
    }
    return Promise.reject(error);
  }
);
export default axiosConfig;
