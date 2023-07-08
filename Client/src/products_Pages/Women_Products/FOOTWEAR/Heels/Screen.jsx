import React from "react"; 
import { Container } from "react-bootstrap";
import "../FootWear.css";
const Screen = ({ data }) => {
  
   const handleLinkClick1 = () => {
   window.open(data.link, "_blank");
  };
   
 
  return (
    <>
       <Container>
    <br />
    <div className="card" >
        <div className="click" onClick={handleLinkClick1}> 
      <img className="card_img" src={data.image} alt="women Jeans and Trouser" />
      <div className="card_body">
        <div className="card_name">{data.name}<div className="price">{data.price}</div> </div>
        <div className="card_title">{data.title}</div>
        </div>
        <p className="card_desc">{data.description}</p>
      </div>
    </div>
  </Container>
    </>
  );
};

export default Screen;
