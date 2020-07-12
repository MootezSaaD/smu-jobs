//Dependencies
import React, { useEffect } from 'react';
//Componenets
import Header from './components/Header';
import JosbList from './components/JobsList';
import ListFilters from './components/ListFilters';
//Styles
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'SMU Jobs';
  });

  return (
    <>
      <Header />
      <div className='container-fluid h-100'>
        <div className='row border h-100'>
          <div className='col-2'>
            <ListFilters />
          </div>
          <div className='col bg-light border-left'>
            <JosbList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
