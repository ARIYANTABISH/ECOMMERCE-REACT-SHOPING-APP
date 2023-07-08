import React from "react";
import homeData from "./Data";
import Data from "./Screen";
import "../../Women.css";
import { Row, Container, Col } from "react-bootstrap";
import banner from "./1jeans1.png";
const JeansandTrousers = () => {
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

export default JeansandTrousers;
