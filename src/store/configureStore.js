import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func';
import jobsApi from './middleware/jobs/api';
import authApi from './middleware/auth/api';

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger, func, jobsApi, authApi],
  });
}

// Redux toolkit to dispatch async actions and
// to allow coms with dev tools
