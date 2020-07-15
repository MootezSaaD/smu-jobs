import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// Redux
import JobsStoreContext from '../contexts/jobsStoreContext';
import * as actions from '../store/jobs/jobs';
//
import JobCard from './JobCard';

export default class JobsList extends Component {
  static contextType = JobsStoreContext;
  state = {
    jobs: [],
  };
  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.setState({ jobs: store.getState() });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  addJob() {
    const store = this.context;
    store.dispatch(
      actions.jobAdded({
        id: 55,
        title: 'Intership at the Applications Office',
        course: 'SMU',
        author: 'SMU Administration',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      })
    );
  }
  render() {
    return (
      <>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='w-100 mb-3 mt-3'
          />
          <button onClick={this.addJob}>Add</button>
        </Form>
        {this.state.jobs.map((job) => (
          <JobCard
            key={job.id}
            course={job.course}
            author={job.author}
            title={job.title}
          >
            {job.description}
          </JobCard>
        ))}
      </>
    );
  }
}
