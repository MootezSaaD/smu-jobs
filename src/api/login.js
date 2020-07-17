import api, { setToken } from './init';
import { getToken } from './token';

export default function login({ email, password }) {
  return api
    .post('/auth/login', { email, password })
    .then((res) => {
      const token = res.data.accessToken;
      setToken(token);
      return getToken();
    })
    .catch((res) => {
      if (res.response.status === 401) {
        console.log(res);
      }
    });
}
