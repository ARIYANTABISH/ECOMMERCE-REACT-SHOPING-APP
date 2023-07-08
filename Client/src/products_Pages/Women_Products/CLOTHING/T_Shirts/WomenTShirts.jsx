import React from 'react'
import homeData from "./Data";
import Data from './Screen'
import banner from './t-shirt.png'
import { Row, Container, Col } from "react-bootstrap";

const WomenTShirts = () => {
  return (
    <>
    <div className="banner"><img className="baner" src={banner} alt="banner" /></div>
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

export default WomenTShirts