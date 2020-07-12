//Dependencies
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Componenets
import Header from './components/Header';
import Description from './components/Description';
import JosbList from './components/JobsList';
import ListFilters from './components/ListFilters';
//Styles
import './index.css';
import { Container } from 'react-bootstrap';

function App() {
  useEffect(() => {
    document.title = 'SMU Jobs';
  });

  return (
    <>
      <Header />
      <main role='main'>
        <Description />
        <Container fluid>
          <Row className='justify-content-center'>
            <Col>
              <ListFilters />
            </Col>
            <Col xs={8}>
              <JosbList />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
      <footer className='footer text-center mt-5'>
        <div className='container'>
          <span class='text-muted'>SMU Jobs - 2020.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
