import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getValidToken, getUser } from '../api/token';
import { addJob } from '../store/jobs/jobs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const user = getUser();

class NewJob extends Component {
  state = {
    date: null,
  };

  successMessage = (
    <div
      className='alert alert-success alert-dismissible fade show'
      role='alert'
    >
      Job has been successfully added!
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );

  render() {
    return (
      <>
        {!!getValidToken() && user.role === 'Recruiter' ? null : (
          <Redirect to='/' />
        )}
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
                <div className='mt-3'>
                  {this.props.success ? this.successMessage : null}
                  <h2>New Job</h2>
                  <hr />
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const elements = event.target.elements,
                        title = elements.title.value,
                        course = elements.course.value,
                        description = elements.description.value;
                      console.log({
                        title,
                        course,
                        description,
                        date: this.state.date.toISOString(),
                      });
                      this.props.postJob({
                        title,
                        course,
                        description,
                        expirationDate: this.state.date.toISOString(),
                      });
                    }}
                  >
                    <div className='form-group w-25'>
                      <label htmlFor='job-title'>Job Title :</label>
                      <input
                        type='text'
                        className='form-control'
                        id='job-title'
                        placeholder='Title'
                        name='title'
                      />
                    </div>
                    <div className='form-group w-25'>
                      <label htmlFor='job-course'>Course / Place :</label>
                      <input
                        type='text'
                        className='form-control'
                        id='job-course'
                        name='course'
                        placeholder='Course / Place'
                      />
                    </div>
                    <div className='form-group w-25'>
                      <label htmlFor='job-course'>Expiration Date :</label>
                      <div>
                        <DatePicker
                          dateFormat='yyyy/MM/dd'
                          selected={this.state.date}
                          onChange={(date) => this.setState({ date })}
                        />
                      </div>
                    </div>
                    <div className='form-group w-50'>
                      <label htmlFor='job-description'>Description :</label>
                      <textarea
                        className='form-control'
                        id='job-description'
                        name='description'
                        rows='3'
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.entities.auth.userInfo,
  success: state.entities.jobs.success,
});

const mapDispatchToProps = (dispatch) => ({
  postJob: (job) => dispatch(addJob(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewJob);
