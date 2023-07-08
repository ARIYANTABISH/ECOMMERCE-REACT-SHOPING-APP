import React from "react";
import "./Home.css";
import { Container, Col, Row } from "react-bootstrap";
import homeData from "./pages/Data";
import Data from "./pages/Map";
const Home = () => {
  return (
    <>
      <header className="header">{/* this is a header  */}</header>

      <Container>
        <div className="home">
          <h1 className="h1">TOP CATEGORY</h1>
          <Row>
            {homeData.map((data) => (
              <Col md={2}>
                <Data data={data} />
              </Col>
            ))}
          </Row>
        </div>
        <br />
      </Container>
    </>
  );
};

export default Home;
