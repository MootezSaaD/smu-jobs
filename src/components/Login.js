import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/auth/auth';
import { Redirect } from 'react-router-dom';
import { getValidToken } from '../api/token';

function Login(props) {
  const errorMessage = (
    <div
      className='alert alert-danger alert-dismissible fade show'
      role='alert'
    >
      Login Failed
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
  return (
    <>
      {getValidToken() ? <Redirect to='/' /> : null}
      <div className='container-fluid h-100 bg-light text-center'>
        <div className='row h-75 justify-content-center'>
          <div className='col-md-2 mx-auto my-auto shadow-sm'>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const elements = event.target.elements;
                const email = elements.email.value;
                const password = elements.password.value;
                props.login({ email, password });
              }}
            >
              <img
                className='mb-4 mt-2'
                src='https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg'
                alt=''
                width='72'
                height='72'
              />
              {props.failedLogin ? errorMessage : null}
              <div className='form-group text-left'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group text-left'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  Check me out
                </label>
              </div>
              <button type='submit' className='btn btn-primary mb-2'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// user : state.entities.user.userInfo
const mapStateToProps = (state) => ({
  user: state.entities.auth.userInfo,
  responseMessage: state.entities.auth.responseMessage,
  failedLogin: state.entities.auth.failedLogin,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
