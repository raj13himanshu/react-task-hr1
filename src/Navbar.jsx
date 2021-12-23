import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import icon from "./images/back-icon.jpg";





function NavBar() {


  return (
    <Navbar
      className="navbar-custom "
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      {/* <Container className="border "> */}
<Container className="border-0">
      <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="me-auto flex ">
          <Row className="">
            <Row>
              <Col className=" ml-2 ">
                <Nav.Link as={Link} to="/lesson">
                  <img src={icon} alt="icon-img" className="icon" />
                  &nbsp; Class 6A - Maths -
                </Nav.Link>
              </Col>
            </Row>

            <Col className=" ml-lg-5">
              <Nav.Link as={Link} to="/">
                Overview
              </Nav.Link>
            </Col>

            <Col>
              <Nav.Link as={Link} to="/lesson">
                Lesson Plan
              </Nav.Link>
            </Col>

            <Col>
              <Nav.Link as={Link} to="/assignment">
                Assignment
              </Nav.Link>
            </Col>

            <Col>
              <Nav.Link as={Link} to="/resource">
                Resources
              </Nav.Link>
            </Col>

            <Col>
              <Nav.Link as={Link} to="/report">
                Reports
              </Nav.Link>
            </Col>

            <Col>
              <Nav.Link as={Link} to="/test">
                Test
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
