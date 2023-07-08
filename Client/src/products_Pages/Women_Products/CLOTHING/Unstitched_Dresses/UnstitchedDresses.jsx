import React from 'react'
import homeData from "./Data";
import Data from './Screen'
import { Row, Container, Col } from "react-bootstrap";

const UnstitchedDresses = () => {
  return (
    <Container>
    <Row>
      {homeData.map((data) => (
        <Col md={3}>
        <Data data={data} />
        </Col>
      ))}
    </Row>
  </Container> 
  )
}

export default UnstitchedDresses