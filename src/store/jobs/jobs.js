// Ducks Pattern

// Using redux toolkit to use less boilerplate code
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { jobsApiCallBegan } from '../api';

const slice = createSlice({
  name: 'jobs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null, // Used for caching
  },
  reducers: {
    jobRequestFailed: (jobs, action) => {
      jobs.loading = false;
    },
    jobsRequested: (jobs, action) => {
      jobs.loading = true;
    },
    jobsReceived: (jobs, action) => {
      jobs.list = action.payload;
      jobs.loading = false;
      jobs.lastFetch = Date.now();
    },
    // actions => action handlers
    jobAdded: (jobs, action) => {
      jobs.list.push(action.payload);
    },
    jobRemoved: (jobs, action) => {
      return jobs.list.filter((job) => job.id !== action.payload.id);
    },
  },
});

// Selector Functions (with memoization using reselect)
// (state, resulting_function())

export const selectJobByAuthorID = createSelector(
  (state) => state.entities.jobs,
  (jobs, authorId) => {
    const result = [];
    for (const job in jobs) {
      if (jobs[job].authorId === authorId) result.push(jobs[job]);
    }
    return result;
  }
);

const {
  jobAdded,
  jobsReceived,
  jobsRequested,
  jobRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action creator
const url = '/jobs';

export const loadJobs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.jobs;

  if (Date.now() - lastFetch < 10 * 60 * 1000) {
    return;
  } // Caching (do not fetch if last fetch was less than 10 mintues earlier)

  dispatch(
    jobsApiCallBegan({
      url,
      onStart: jobsRequested.type,
      onSuccess: jobsReceived.type,
      onError: jobRequestFailed.type,
    })
  );
};

export const addJob = (job) =>
  jobsApiCallBegan({
    url: `${url}/new`,
    method: 'post',
    data: job,
    onSuccess: jobAdded.type,
  });

// export const jobAdded = createAction('jobAdded');
// export const jobRemoved = createAction('jobRemoved'); [LEGACY]

// Action Types
// [LEGACY]
// const JOB_ADDED = 'jobAdded';
// const JOB_REMOVED = 'jobRemoved';

// Action creators
// [LEGACY]
// export const jobAdded = ({ id, title, author, description, course }) => ({
//   type: JOB_ADDED,
//   payload: {
//     id,
//     title,
//     author,
//     description,
//     course,
//   },
// });
//
// export const jobRemoved = (id) => ({
//   type: JOB_REMOVED,
//   payload: {
//     id,
//   },
// });

// Reducers

// export default createReducer([], {
//   [jobAdded.type]: (jobs, action) => {
//     jobs.push({ ...action.payload });
//   },
//   [jobRemoved.type]: (jobs, action) => {
//     return jobs.filter((job) => job.id !== action.payload.id);
//   },
// });

// [LEGACY]
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case jobAdded.type:
//       return [...state, action.payload];
//     case jobRemoved.type:
//       return state.filter((job) => !job.id);

//     default:
//       return state;
//   }
// }
