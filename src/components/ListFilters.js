import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ListFilters() {
  return (
    <Card>
      <Card.Header>Filters</Card.Header>
      <Card.Body>
        {[
          'CS425',
          'MATH348',
          'GOV101',
          'Library',
          'CS331',
          'CS350',
          'ISS396',
        ].map((type) => (
          <div key={type} className='mb-3'>
            <Form.Check custom type={type} id={type} label={type} />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ListFilters;
