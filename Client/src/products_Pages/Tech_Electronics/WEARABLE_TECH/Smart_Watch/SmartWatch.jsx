import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import homeData from "./Data";
import Data from "./Map";

const SmartWatch = () => {
  return (
    <>
    <Container> 
      <Row>
        {homeData.map((data) => (
          <Col md={3}>
          <Data data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
  )
}

export default SmartWatch