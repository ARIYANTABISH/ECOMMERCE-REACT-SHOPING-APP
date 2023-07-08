import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import homeData from "./Data";
import Data from "./Screen";

const DigestiveHealth = () => {
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
  );
};

export default DigestiveHealth;
