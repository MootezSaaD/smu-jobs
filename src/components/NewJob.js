import React, { Component } from 'react';

export default class NewJob extends Component {
  render() {
    return (
      <div className='mt-3'>
        <h5>New Job</h5>
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
      </div>
    );
  }
}
