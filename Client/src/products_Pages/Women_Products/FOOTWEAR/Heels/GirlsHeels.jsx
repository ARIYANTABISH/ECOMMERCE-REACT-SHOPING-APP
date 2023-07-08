import React from "react";
import homeData from "./Data";
import Data from "./Screen";
import { Row, Col, Container } from "react-bootstrap";
import banner from "./Heels.png";
const GirlsHeels = () => {
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

export default GirlsHeels;
