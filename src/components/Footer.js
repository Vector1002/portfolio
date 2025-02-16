import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillSkype,AiFillMail } from "react-icons/ai";
import { FaTelegram,FaTelegramPlane } from "react-icons/fa";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by DAVID LI</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DL</h3>
        </Col>
        <Col md="4" >
          <h3 id="contact">
            <div>
            <AiFillMail /> scotttoby02@gmail.com
            </div>
            <div>
              <AiFillSkype/> live:.cid.2b3791a76f72d3d7
            </div>
            <div>
              <FaTelegramPlane/> bove102
            </div>
            </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
