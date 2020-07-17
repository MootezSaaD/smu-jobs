import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function MainSearch() {
  return (
    <div className='d-flex'>
      <div className='p-2 w-100 flex-grow-1 '>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='w-100' />
        </Form>
      </div>
      <div className='p-2'>
        <button type='button' className='btn btn-primary'>
          Search
        </button>
      </div>
      <div className='p-2'>
        <button type='button' className='btn btn-success'>
          All
        </button>
      </div>
    </div>
  );
}

export default MainSearch;
