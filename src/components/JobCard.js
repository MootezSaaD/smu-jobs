import React from 'react';
import Card from 'react-bootstrap/Card';

function JobCard(props) {
  return (
    <Card className='shadow-sm mb-2'>
      <Card.Body>
        <Card.Title>{`[${props.course}] ${props.title}`}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.author}
        </Card.Subtitle>
        <Card.Text>{props.children}</Card.Text>
        <Card.Link href='#'>Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
