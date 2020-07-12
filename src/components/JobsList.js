import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//
import JobCard from './JobCard';

export default class JobsList extends Component {
  state = {
    jobs: [
      {
        title: 'Teaching Assistant',
        course: 'CS425',
        author: 'Prof. John Doe',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        title: 'Library Team',
        course: 'Library',
        author: 'Prof. Jacques Montali',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        title: 'Webmaster',
        course: 'SMU-COMS',
        author: 'SMU Communication Team',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        title: 'Intership at the Applications Office',
        course: 'SMU',
        author: 'SMU Administration',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ],
  };
  render() {
    return (
      <>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='w-100 mb-3'
          />
        </Form>
        {this.state.jobs.map((job) => (
          <JobCard title={job.title} course={job.course} author={job.author}>
            {job.description}
          </JobCard>
        ))}
      </>
    );
  }
}
