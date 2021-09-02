import axios from 'axios';

const baseURL = 'http://192.168.43.104:3000';

const api = axios.create({
  baseURL,
});

export default api;
