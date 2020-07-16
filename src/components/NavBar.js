import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sw'>
      <span className='navbar-brand mb-0 h1'>
        <Link to='/' className='nav-link' style={{ color: 'white' }}>
          SMU Jobs
        </Link>
      </span>
      <ul className='navbar-nav ml-auto'>
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
      </ul>
    </nav>
  );
}

export default NavBar;
