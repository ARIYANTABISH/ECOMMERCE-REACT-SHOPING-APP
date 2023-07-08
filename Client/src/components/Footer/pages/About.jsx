import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import aboutImage from "../../../assets/about_image.jpg";
const About = () => {
  // youtube acount link
  const handleLinkClickYT = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  // Pinterest acount link
  const handleLinkClickPN = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  // Facebook acount link
  const handleLinkClickFB = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  // twitter acount link
  const handleLinkClickTW = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  // Instagram acount link
  const handleLinkClickIN = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  // tiktok acount link
  const handleLinkClickTK = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091797910850&mibextid=ZbWKwL",
      "_blank"
    );
  };
  return (
    <Container>
      <div className="section">
        <p className="p-top">
          We thoroughly review and recommend products. Purchases made through
          our links may earn us a commission.{" "}
          <a href="/About" style={{ textDecoration: "none" }}>
            Learn more..
          </a>
        </p>
        <h1 className="h1">About Us</h1>
        <div className="about_details">
          <p className="p1">
            <a href="/">Xexone </a>is dedicated to offering meaningful
            suggestions. We thoroughly assess and analyze thousands of products
            each year, enabling you to easily find the perfect items. Our
            objective is to streamline your shopping experience and save you
            time, whether you need everyday essentials or gifts for loved ones.
          </p>

          <p className="p1">
            At Xexone, our commitment is to become the most reliable product
            recommendation service. We maintain complete editorial autonomy and
            only publish recommendations that have undergone meticulous
            reporting and testing by our dedicated team of writers and editors.
          </p>

          <p className="p1">
            Xexone was founded in jun 2019. Our revenue is generated through
            subscriptions and affiliate marketing programs. When you make a
            purchase through our retailer links, we may earn commissions.
            However, our recommendations are purely based on extensive research,
            analysis, interviews, and independent testing conducted by our team.
            We have no motivation to endorse inferior products or succumb to
            manufacturer influence. Our primary focus is the satisfaction of our
            readers. Our editorial and product testing standards guide our
            decision-making process, completely separate from any affiliate
            agreements or advertising partnerships. If a reader returns a
            purchase due to dissatisfaction or a faulty recommendation, we do
            not receive any affiliate commission. Our commitment lies in
            maintaining a fair and trustworthy system that always prioritizes
            the best interests of our readers.
          </p>

          <p className="p1">
            {" "}
            Our reviews are the result of extensive research spanning weeks or
            even months, combined with our years of experience in the field. We
            don't solely rely on our own expertise; we also seek insights from
            various trusted sources such as engineers, scientists,{" "}
            <a href="/Designing"> designers, </a>
            and a diverse range of subject-matter experts, including barbers,
            cat café staff (and residents), and even cornhole champions. We
            meticulously analyze customer reviews to understand what truly
            matters to those who have firsthand experience with the products we
            evaluate. In a world where overpriced items with unnecessary
            features are often considered the standard, we strive to recommend
            high-quality products that justify their price and avoid promoting
            unnecessary extras that you're unlikely to use frequently.
          </p>
          {/* about us image  */}
          <div className="about-img">
            <img src={aboutImage} alt="aboutimage" />
          </div>

          <p className="p1">
            Our process is not only thorough but also filled with intriguing and
            enjoyable tasks. Picture designing an obstacle course for robot
            vacuums or conducting fireproof tests that involve setting a room
            ablaze. We apply our diligent approach and exceptional research
            skills to evaluate over 1,000 product categories. From{" "}
            <a href="Cleaning-Supplies">washing machines, </a>{" "}
            <a href="/Monitors"> TVs, </a> and artificial Christmas trees to
            bath towels, nonstick pans, and soundbars, we cover a wide range of
            items. Whether it's storage bins,{" "}
            <a href="/Furniture"> office chairs </a>, headlamps,{" "}
            <a href="/Rome-Electronics">sewing machines</a> , mattresses, wine
            glasses, <a href="/Rome-Electronics">air purifiers,</a> space
            heaters, treadmills, iPhone cases,{" "}
            <a href="/Networking-Products"> Wi-Fi routers, </a> carry-on
            suitcases, cloth face masks, or even wire cutters, we are committed
            to helping you quickly and effortlessly discover the best products
            while providing transparent insights on what items are not worth
            buying. Our aim is to simplify your life, enabling you to focus on
            living it to the fullest.
          </p>

          <p className="p1">
            The products we recommend are the very ones we select for ourselves
            and confidently suggest to our loved ones. When we endorse an item
            and advise you to invest your valuable funds in it, we treat the
            recommendation with the same level of seriousness and consideration
            as if it were our own money at stake.{" "}
          </p>

          <p className="p1">
            Reader trust is paramount to us. We prioritize transparency and
            integrity, knowing that recommending products based on bias or
            laziness would erode that trust. We encourage readers to fact-check
            our articles, as we diligently invest significant time, effort, and
            logical reasoning into researching, interviewing experts, and
            extensively testing the products. This rigorous process often
            entails countless hours of work. Every guide we create clearly
            presents the evidence and rationale behind our selections,
            empowering you to make your own informed judgments. <br />
            <a href="/">xexone.com</a>{" "}
          </p>

          {/* social media links  */}
          <p className="p1">Follow us on</p>
          <p className="Social_link">
            <div className="a" onClick={handleLinkClickYT}>
              Youtube
            </div>
            <div className="a" onClick={handleLinkClickFB}>
              {" "}
              Facebook
            </div>
            <div className="a" onClick={handleLinkClickTW}>
              {" "}
              Twitter
            </div>
            <div className="a" onClick={handleLinkClickIN}>
              {" "}
              Instagram
            </div>
            <div className="a" onClick={handleLinkClickPN}>
              {" "}
              Pinterest
            </div>
            <div className="a" onClick={handleLinkClickTK}>
              {" "}
              Tiktok
            </div>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
