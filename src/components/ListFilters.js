import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewJob from './NewJob';

function ListFilters() {
  return (
    <div className='row mt-3'>
      <div className='col'>
        {' '}
        <h5>Filters</h5>
        {[
          'CS425',
          'MATH348',
          'GOV101',
          'Library',
          'CS331',
          'CS350',
          'ISS396',
        ].map((type) => (
          <div className='custom-control custom-checkbox mb-1'>
            <input type='checkbox' className='custom-control-input' id={type} />
            <label className='custom-control-label' for={type}>
              {type}
            </label>
          </div>
        ))}
      </div>
      <div className='col'>
        <Router>
          <Link to='/new'>
            <button type='button' className='btn btn-success'>
              New
            </button>
          </Link>
          <Switch>
            <Route path='/new'>
              <NewJob />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default ListFilters;
