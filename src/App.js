//Dependencies
import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Componenets
import JosbList from './components/JobsList';
import ListFilters from './components/ListFilters';
import NewJob from './components/NewJob';
// Redux
import configureStore from './store/jobs/configureStore';
import JobsStoreContext from './contexts/jobsStoreContext';
//Styles
import './index.css';

// Store
const store = configureStore();

function App() {
  useEffect(() => {
    document.title = 'SMU Jobs';
  });

  return (
    <Router>
      <header>
        <Navbar bg='dark' variant='dark' className='shadow-sm'>
          <Link to='/'>
            <Navbar.Brand>SMU Jobs</Navbar.Brand>
          </Link>
          <Nav className='mr-auto'>
            <Link to='/new' style={{ color: 'white' }}>
              New
            </Link>
          </Nav>
        </Navbar>
      </header>
      <div className='container-fluid h-100'>
        <div className='row border h-100'>
          <div className='col-2'>
            <ListFilters />
          </div>
          <div className='col bg-light border-left'>
            <Switch>
              <Route exact path='/'>
                <JobsStoreContext.Provider value={store}>
                  <JosbList />
                </JobsStoreContext.Provider>
              </Route>
              <Route path='/new'>
                <NewJob />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
