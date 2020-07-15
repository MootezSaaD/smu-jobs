// Duck Pattern
import { createAction } from '@reduxjs/toolkit';

// Initial State

const initialState = {
  entities: {
    jobs: [
      {
        id: 2547,
        title: 'Teaching Assistant',
        course: 'CS425',
        author: 'Prof. John Doe',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 8740,
        title: 'Library Team',
        course: 'Library',
        author: 'Prof. Jacques Montali',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 9758,
        title: 'Webmaster',
        course: 'SMU-COMS',
        author: 'SMU Communication Team',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 1478,
        title: 'Intership at the Applications Office',
        course: 'SMU',
        author: 'SMU Administration',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ],
    auth: {},
    ui: {},
  },
};

// Actions types [LEGACY] - Replaced using Redux Toolkit
// const JOB_ADDED = 'jobAdded';

// Action creators
export const jobAdded = createAction('jobAdded');

// Reducer

export default function reducer(state = initialState.entities.jobs, action) {
  switch (action.type) {
    case jobAdded.type:
      return [...state, action.payload];
    default:
      return state;
  }
}
