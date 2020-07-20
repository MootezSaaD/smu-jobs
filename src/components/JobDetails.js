import React, { Component } from 'react';
import { getUser } from '../api/token';

class JobDetails extends Component {
  user = getUser();

  componentDidMount() {
    console.log('JD', this.props);
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
                <div className='mt-3'>
                  <h2>Job Title</h2>
                  <small>{this.props._id}</small>
                  <hr />
                  <h5>Description</h5>
                  <div>
                    <p>Cool description of the job. Weeee!</p>
                  </div>
                  <h5>Expiration Date</h5>
                  <div>
                    <p>01/01/1970</p>
                  </div>
                  {this.user.role === 'Applicant' ? (
                    <div className='d-flex flex-row-reverse'>
                      <button className='btn btn-primary'>Apply</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobDetails;
