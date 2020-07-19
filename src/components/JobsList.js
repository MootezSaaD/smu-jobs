import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// Redux
import { connect } from 'react-redux';
import { loadJobs, selectJobByID } from '../store/jobs/jobs';
//
import JobCard from './JobCard';

class JobsList extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <>
        <div className='d-flex h-100' id='wrapper'>
          <div className='bg-light border-right' id='sidebar-wrapper'>
            <div className='sidebar-heading'>Menu </div>
            <div className='list-group list-group-flush'>
              <a
                href={'/'}
                className='list-group-item list-group-item-action bg-light'
              >
                Home
              </a>
              <a
                href={'/'}
                className='list-group-item list-group-item-action bg-light'
              >
                Post
              </a>
            </div>
          </div>
          <div className='container-fluid h-100 bg-light'>
            <div className='row h-100'>
              <div className='col-md-10'>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='w-100 mb-3 mt-3'
                  />
                </Form>
                {this.props.jobs.map((job) => (
                  <JobCard
                    key={job._id}
                    course={job.course}
                    jobid={job._id}
                    author={
                      !!job.author
                        ? `${job.author.firstName} ${job.author.lastName}`
                        : 'SMU STAFF'
                    }
                    title={job.title}
                  >
                    {job.description}
                  </JobCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.entities.jobs.list,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(loadJobs()),
  selectJob: (jobid) => dispatch(selectJobByID(jobid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
