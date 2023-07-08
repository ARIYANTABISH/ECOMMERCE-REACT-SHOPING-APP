import React from "react";
import homeData from "./Data";
import Data from "./Screen";
import { Row, Col, Container } from "react-bootstrap";
import banner from "./skin _care.png";
const WomenSkinCare = () => {
  return (
    <>
      <div className="banner">
        <img className="baner" src={banner} alt="banner" />
      </div>
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

export default WomenSkinCare;
