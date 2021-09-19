import axios from 'axios';

const baseURL = __DEV__
  ? 'http://192.168.43.104:3000/fidelitas'
  : 'http://167.71.26.220/fidelitas';

const api = axios.create({
  baseURL,
});

export default api;
