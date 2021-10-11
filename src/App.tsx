import React from 'react';
import PointApp from "./component/PointApp";
import {Container} from "react-bootstrap";

function App() {
  return (
      <Container fluid={true} className="app d-flex align-items-center justify-content-center">
        <PointApp />
      </Container>
  );
}

export default App;
