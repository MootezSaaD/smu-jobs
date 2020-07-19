import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { selectJobByID } from '../store/jobs/jobs';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import JobDetails from './JobDetails';

function JobCard(props) {
  const [jobState, setState] = useState({});
  useEffect(
    () =>
      setState(() => {
        const data = selectJobByID(props.jobid)(props.state);
        return data;
      }),
    []
  );
  return (
    <>
      <Card className='shadow-sm mb-2'>
        <Card.Body>
          <Card.Title>{`[${props.course}] ${props.title}`}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.author}
          </Card.Subtitle>
          <Card.Text>{props.children}</Card.Text>
          <Link to={`/jobs/${props.jobid}`}>Details</Link>
        </Card.Body>
      </Card>
      {console.log(jobState)}
    </>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(JobCard);
