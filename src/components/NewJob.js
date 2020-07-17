import React, { Component } from 'react';

export default class NewJob extends Component {
  render() {
    return (
      <div className='container-fluid h-100 bg-light'>
        <div className='row h-100'>
          <div className='col-md-6 mx-auto border border-info'>
            <div className='mt-3'>
              <h2>New Job</h2>
              <form>
                <div className='form-group w-25'>
                  <label htmlFor='job-title'>Job Title :</label>
                  <input
                    type='text'
                    className='form-control'
                    id='job-title'
                    placeholder='Title'
                  />
                </div>
                <div className='form-group w-25'>
                  <label htmlFor='job-course'>Course / Place :</label>
                  <input
                    type='text'
                    className='form-control'
                    id='job-course'
                    placeholder='Course / Place'
                  />
                </div>
                <div className='form-group w-50'>
                  <label htmlFor='job-description'>Description :</label>
                  <textarea
                    className='form-control'
                    id='job-description'
                    rows='3'
                  ></textarea>
                </div>
                <button type='button' className='btn btn-primary'>
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
