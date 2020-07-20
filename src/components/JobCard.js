import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { selectJobByID } from '../store/jobs/jobs';
import { connect } from 'react-redux';

class JobCard extends Component {
  componentDidMount() {
    const data = selectJobByID(this.props.jobid)(this.props.state);
    console.log(data);
  }

  render() {
    return (
      <>
        <Card className='shadow-sm mb-2'>
          <Card.Body>
            <Card.Title>{`[${this.props.course}] ${this.props.title}`}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {this.props.author}
            </Card.Subtitle>
            <Card.Text>{this.props.children}</Card.Text>
            <Link
              to={{
                pathname: `jobs/${this.props.jobid}`,
                state: {},
              }}
            >
              Details
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(JobCard);
