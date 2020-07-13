import React from 'react';

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
          <div className='custom-control custom-checkbox mb-1' key={type}>
            <input type='checkbox' className='custom-control-input' id={type} />
            <label className='custom-control-label' htmlFor={type}>
              {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListFilters;
