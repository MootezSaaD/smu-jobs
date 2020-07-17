import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getValidToken } from '../api/token';

function NavBar(props) {
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
      <li className='nav-item'>
        <span className='nav-link'>{`Hi, ${props.user.firstName} ${props.user.lastName}!`}</span>
      </li>
      {' | '}
      {'Recruiter' === props.user.role ? (
        <>
          <li className='nav-item'>
            <Link to='/new' className='nav-link'>
              Post Job
            </Link>
          </li>
          {' | '}
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
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
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sw'>
      <span className='navbar-brand mb-0 h1'>
        <Link to='/' className='nav-link' style={{ color: 'white' }}>
          SMU Jobs
        </Link>
      </span>
      <ul className='navbar-nav ml-auto'>
        {!!getValidToken() && props.isLoggedIn ? loggedItem : notLoggedItem}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.entities.auth.userInfo,
  isLoggedIn: state.entities.auth.loggedIn,
});

export default connect(mapStateToProps)(NavBar);
