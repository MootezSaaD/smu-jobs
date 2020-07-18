import axios from 'axios';
import { storeToken, getValidToken } from './token';

const baseURL = 'http://localhost:3001/api/'; // To be moved to .env

const api = axios.create({
  baseURL,
});

export function setToken(token) {
  storeToken(token);
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
}

setToken(getValidToken());

export default api;
