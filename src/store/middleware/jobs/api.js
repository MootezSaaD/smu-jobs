import api from '../../../api/init';
import * as actions from '../../api';

const jobsApi = ({ dispatch }) => (next) => async (action) => {
  // If this is not an api call
  if (action.type !== actions.addJobApiCallBegan.type) {
    return next(action);
  }

  const { data, onSuccess, onError, onStart } = action.payload;
  if (onStart) {
    dispatch({ type: onStart });
  }
  console.log(action.type);
  next(action);

  switch (action.type) {
    case 'jobs/apiCallBegan': {
      try {
        console.log('DEFAULTS /API', api.defaults.headers);
        const response = await api.get('/jobs');
        console.log('RESPONSE', response);
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
      break;
    }
    case 'jobs/addJobApiCallBegan': {
      try {
        const response = await api.post('/jobs/new', data);
        console.log('RESPONSE [JOB ADDED]', response);
        dispatch(actions.addJobApiCallSuccess(response.data));
        if (onSuccess) {
          dispatch({ type: onSuccess, payload: response.data });
        }
      } catch (error) {
        // General error
        dispatch(actions.addJobApiCallFailed(error.message));
        if (onError) {
          dispatch({ type: onError });
        }
      }
      break;
    }

    default:
      break;
  }
};

export default jobsApi;
