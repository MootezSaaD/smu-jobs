import { createAction } from '@reduxjs/toolkit';

export const jobsApiCallBegan = createAction('jobs/apiCallBegan');
export const jobsApiCallSuccess = createAction('jobs/apiCallSuccess');
export const jobsApiCallFailed = createAction('jobs/apiCallFailed');

export const authApiCallBegan = createAction('auth/apiCallBegan');
export const authApiCallSuccess = createAction('auth/apiCallSuccess');
export const authApiCallFailed = createAction('auth/apiCallFailed');
