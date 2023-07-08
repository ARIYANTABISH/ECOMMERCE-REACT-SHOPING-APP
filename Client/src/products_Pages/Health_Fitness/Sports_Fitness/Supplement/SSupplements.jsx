import React from 'react'
import homeData from "./Data";
import Data from "./Screen";
import { Row, Col, Container } from "react-bootstrap";
import "../../Health.css";

const SSupplements = () => {
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

export default SSupplements