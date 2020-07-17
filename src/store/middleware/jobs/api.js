import axios from 'axios';
import * as actions from '../../api';

const jobsApi = ({ dispatch }) => (next) => async (action) => {
  // If this is not an api call
  if (action.type !== actions.jobsApiCallBegan.type) {
    return next(action);
  }

  const { url, method, data, onSuccess, onError, onStart } = action.payload;
  if (onStart) {
    dispatch({ type: onStart });
  }

  next(action);

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:3001/api',
      url,
      method,
      data,
    });
    dispatch(actions.jobsApiCallSuccess(response.data));
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    // General error
    dispatch(actions.jobsApiCallFailed(error.message));
    if (onError) {
      dispatch({ type: onError });
    }
  }
};

export default jobsApi;
