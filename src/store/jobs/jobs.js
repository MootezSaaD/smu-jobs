// Duck Pattern

// Initial State

const initialState = {
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
};

// Actions types
const JOB_ADDED = 'jobAdded';

// Action creators
export const jobAdded = ({ id, title, author, description }) => ({
  type: JOB_ADDED,
  payload: {
    id,
    title,
    author,
    description,
  },
});

// Reducer

export default function reducer(state = initialState.jobs, action) {
  switch (action.type) {
    case JOB_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
}
