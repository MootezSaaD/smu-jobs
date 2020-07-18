import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getValidToken, getUser } from '../api/token';

function NavBar(props) {
  const user = getUser();
  const notLoggedItem = (
    <>
      <li className='nav-item'>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href={'a'}>
          Register
        </a>
      </li>
    </>
  );
  const loggedItem = (
    <>
      {!!user ? (
        <>
          <li className='nav-item'>
            <span className='nav-link'>{`Hi, ${user.firstName} ${user.lastName}!`}</span>
          </li>
          {' | '}
          {'Recruiter' === user.role ? (
            <>
              <li className='nav-item'>
                <Link to='/new' className='nav-link'>
                  Post Job
                </Link>
              </li>
              {' | '}
              <li className='nav-item'>
                <Link to='/jobs' className='nav-link'>
                  Browse
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Browse
              </Link>
            </li>
          )}
        </>
      ) : null}
    </>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sw'>
      <span className='navbar-brand mb-0 h1'>
        <Link to='/' className='nav-link' style={{ color: 'white' }}>
          SMU Jobs
        </Link>
      </span>
      <ul className='navbar-nav ml-auto'>
        {!!getValidToken() ? loggedItem : notLoggedItem}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.entities.auth.userInfo,
  isLoggedIn: state.entities.auth.loggedIn,
});

export default connect(mapStateToProps)(NavBar);
