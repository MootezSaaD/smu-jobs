import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' className='shadow-sm'>
        <Navbar.Brand href='#home'>SMU Jobs</Navbar.Brand>
      </Navbar>
    </header>
  );
}

export default Header;
