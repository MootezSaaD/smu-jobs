import React from 'react';

function Login() {
  return (
    <>
      <div className='container-fluid h-100 bg-light text-center'>
        <div className='row h-75 justify-content-center'>
          <div className='col-md-2 mx-auto my-auto shadow-sm'>
            <form>
              <img
                className='mb-4 mt-2'
                src='https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg'
                alt=''
                width='72'
                height='72'
              />
              <div className='form-group text-left'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group text-left'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='password'
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
