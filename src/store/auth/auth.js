import { createSlice } from '@reduxjs/toolkit';
import { authApiCallBegan } from '../api';

const slice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
    loggedIn: false,
    loading: false,
  },
  reducers: {
    loginFailed: (user, action) => {
      user.loading = false;
    },
    loginRequested: (user, action) => {
      user.loading = true;
    },
    loginSuccess: (user, action) => {
      user.userInfo = action.payload;
      user.loggedIn = true;
      user.loading = false;
    },
    loggedIn: (user, action) => {
      user.userInfo = action.payload;
      user.loggedIn = true;
    },
  },
});
const { loginFailed, loginRequested, loginSuccess } = slice.actions;
export default slice.reducer;

// Action creatoe

const url = '/auth';

export const login = (user) =>
  authApiCallBegan({
    url: `${url}/login`,
    data: user,
    method: 'post',
    onStart: loginRequested.type,
    onSuccess: loginSuccess.type,
    onError: loginFailed.type,
  });
