import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import FooterRoute from "./FooterRoute";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
const Footer = () => {
  const handleLinkClickFb = () => {
    window.open(
      `https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL`,
      "_blank"
    );
  };
  const handleLinkClickTw = () => {
    window.open(
      `https://www.facebook.com/dreamfession?mibextid=ZbWKwL`,
      "_blank"
    );
  };
  const handleLinkClickIns = () => {
    window.open(
      `https://www.facebook.com/dreamfession?mibextid=ZbWKwL`,
      "_blank"
    );
  };
  const handleLinkClickPin = () => {
    window.open(
      `https://www.facebook.com/dreamfession?mibextid=ZbWKwL`,
      "_blank"
    );
  };
  return (
    <>
      {/* this is all footer routes component  */}
      <FooterRoute />

      {/* footer home page  */}
      <footer className="footer">
        <div className="footer_border">
          <div className="footer-container">
            <div className="footer-left">
              <h3>
                <NavLink to="/">
                  {" "}
                  <span className="company_name "> xexone.com </span>
                </NavLink>
              </h3>
              <div className="f_web_desc">
                Welcome to Xexone.com, your ultimate destination for affiliate
                recommendations. Our team of experts diligently researches and
                tests products, ensuring you make informed buying decisions.
                With our comprehensive reviews and valuable advice, we empower
                you to find the perfect products effortlessly. From electronics
                to fashion, home essentials to fitness gear, Xexone.com is your
                trusted companion in making smart purchases. Join our community
                now and gain unlimited access to our powerful resources.
                Experience the power of informed shopping at Xexone.com and
                unlock a world of possibilities.
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-links">
                <Col className="mb-2 ml-3">
                  <NavLink className="navlink" to="/Contact">
                    Contact Us
                  </NavLink>
                  <NavLink className="navlink" to="/About">
                    About Us
                  </NavLink>
                </Col>

                <Col className="ml-3">
                  <NavLink className="navlink" to="/TermsCondition">
                    Terms & Conditions
                  </NavLink>
                </Col>
              </div>
              <br />
              <div className="footer-links">
                <Col className="mb-2">
                  <NavLink className="navlink" to="/Help">
                    Help Center
                  </NavLink>
                  <NavLink className="navlink" to="/Blog">
                    Blogs
                  </NavLink>
                </Col>

                <Col>
                  <NavLink className="navlink" to="/Faq">
                    FAQ
                  </NavLink>
                  <NavLink className="navlink" to="/PrivacyPolicy">
                    Privacy Policy
                  </NavLink>
                </Col>
              </div>
            </div>
          </div>
          <div className="down_line"></div>
          <div className="footer-social">
            <div className="facebook " onClick={handleLinkClickFb}>
              <BsFacebook />
            </div>
            <div className="twitter" onClick={handleLinkClickTw}>
              <AiFillTwitterCircle />
            </div>
            <div className="instagram" onClick={handleLinkClickIns}>
              <FiInstagram />
            </div>
            <div className="pinterest" onClick={handleLinkClickPin}>
              <BsPinterest />
            </div>
          </div>
        </div>
        <p className="p2 font-bold" style={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} xexone.com
        </p>
      </footer>
    </>
  );
};

export default Footer;
