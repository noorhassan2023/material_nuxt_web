import axios from 'axios';
import CONFIG from './config';


axios.defaults.baseURL = CONFIG.API_URL;

const apiAxios = axios.create({
  baseURL: CONFIG.API_URL,
  common: {
    Accept: 'text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

apiAxios.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer 32996|lfezrmu2wOYHQWnLkgYc7SdLju2GJGKw3MfOjlG6';
  config.headers.Lang = localStorage.getItem("locale");
  return config
});


// export const setAxiosHeader = async (token) => {
//   apiAxios.defaults.headers.common['X-XSRF-TOKEN'] = token;
//   apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export default apiAxios;

