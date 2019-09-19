import React from 'react';

// import './scss/_app.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from './components/Alert';
import AlertDismissable from './components/AlertDismissable';

function App() {
  return (
    // <div className="container">
    <Container fluid={true}>
      <Row>
        <Col></Col>
        <Col sm={12} lg='auto'>
          <Alert/>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Button>butstrap</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <AlertDismissable/>
        </Col>
      </Row>
    </Container>    
    // </div>
  );
}

export default App;
