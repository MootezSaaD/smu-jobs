import decodeToken from 'jwt-decode';

const accessToken = 'accessToken';
const userItem = 'user';

export function storeToken(token) {
  if (token) {
    localStorage.setItem(accessToken, token);
  } else {
    localStorage.removeItem(accessToken);
  }
}

export function getValidToken() {
  const token = localStorage.getItem(accessToken);
  try {
    const decodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000;
    if (currentTime > decodedToken.exp) {
      return null;
    }
    return token;
  } catch (error) {
    return null;
  }
}

export function getToken() {
  // Returns decoded valid token (if exists)
  const token = getValidToken();
  if (token) {
    return decodeToken(token);
  } else {
    return null;
  }
}

export function setUser(user) {
  if (user) {
    localStorage.setItem(userItem, user);
  }
}

export function getUser() {
  const user = localStorage.getItem(userItem);
  if (user) {
    return JSON.parse(user);
  }
  return null;
}
