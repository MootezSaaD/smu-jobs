import { combineReducers } from 'redux';
import jobsReducer from './jobs/jobs';
import authReducer from './auth/auth';

export default combineReducers({
  jobs: jobsReducer,
  auth: authReducer,
});
