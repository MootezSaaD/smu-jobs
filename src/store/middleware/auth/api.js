import * as actions from '../../api';
import api, { setToken } from '../../../api/init';
import { setUser } from '../../../api/token';

const authApi = ({ dispatch }) => (next) => async (action) => {
  // If this is not an api call
  if (action.type !== actions.authApiCallBegan.type) {
    return next(action);
  }

  const { data, onSuccess, onError, onStart } = action.payload;
  if (onStart) {
    dispatch({ type: onStart });
  }

  next(action);

  try {
    const response = await api.post('/auth/login', data);
    setToken(response.data.accessToken);
    setUser(JSON.stringify(response.data));
    dispatch(actions.authApiCallSuccess(response.data));
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    // General error
    dispatch(actions.authApiCallSuccess(error.message));
    if (onError) {
      dispatch({ type: onError });
    }
  }
};

export default authApi;
