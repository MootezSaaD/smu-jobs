import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// Redux
import JobsStoreContext from '../contexts/jobsStoreContext';
import JobCard from './JobCard';

export default class JobsList extends Component {
  static contextType = JobsStoreContext;
  state = { jobs: [] };
  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.state({ job: store.getState() });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
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
