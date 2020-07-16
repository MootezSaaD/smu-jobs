import React from 'react';
import Description from './Description';
import MainSearch from './MainSearch';

function Home() {
  return (
    <>
      <div className='container-fluid h-100 bg-light'>
        <div className='row h-75'>
          <div className='col-md-6 mx-auto my-auto'>
            <Description />
            <MainSearch />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
