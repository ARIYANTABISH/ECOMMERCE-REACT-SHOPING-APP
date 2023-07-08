import React from "react";
import {  Container } from "react-bootstrap";

const Map = ({ data }) => {
  return (
    <>
      <Container className="homeScreen">
        <br />
        <div className="card">
          <img src={data.image} alt="banner" />
          <div className="card_body">
            <div className="card_title">{data.name}</div>
            <p className="card_desc">{data.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Map;
