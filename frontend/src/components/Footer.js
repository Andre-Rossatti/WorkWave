import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ showMailchimpForm, footerStyle }) => {
  return (
    <footer className="footer" style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          {showMailchimpForm && <MailchimpForm />}
          <Col size={12} sm={6}>
            <h1 style={{color: "white"}}>Workwave</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};