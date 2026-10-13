"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  Cart
} from "react-bootstrap-icons";

// 1. TopMenu Component
const TopMenu = () => (
  <Navbar bg="light" expand="lg" className="py-1">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#"><Facebook /></Nav.Link>
        <Nav.Link href="#"><Twitter /></Nav.Link>
        <Nav.Link href="#"><Pinterest /></Nav.Link>
        <Nav.Link href="#"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end align-items-center">
        <Nav.Link href="#"><HouseFill /></Nav.Link>
        <Nav.Link href="#"><Search /></Nav.Link>
        <Nav.Link href="#"><PersonFill /></Nav.Link>
        <NavDropdown title={<Cart />} id="cart-dropdown">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

// 2. IslandSnowLogo Component
const IslandSnowLogo = () => (
  <Row className="my-3">
    <Col className="text-center">
      <Image 
        src="/experience-islandsnow-bootstrap-logo.png" 
        alt="Island Snow Logo" 
        fluid 
        className="mx-auto d-block"
      />
    </Col>
  </Row>
);

// 3. MiddleMenu Component
const MiddleMenu = () => (
  <Row className="justify-content-center py-2 fw-bold">
    <Col xs="auto">
      <NavDropdown title="MEN" id="men-dropdown">
        <NavDropdown.Item>Tank Tops</NavDropdown.Item>
        <NavDropdown.Item>Shirts</NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col xs="auto">
      <NavDropdown title="WOMEN" id="women-dropdown">
        <NavDropdown.Item>Tank Tops</NavDropdown.Item>
        <NavDropdown.Item>Shirts</NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col xs="auto">
      <NavDropdown title="KIDS" id="kids-dropdown">
        <NavDropdown.Item>Shirts</NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col xs="auto">
      <NavDropdown title="BRANDS" id="brands-dropdown">
        <NavDropdown.Item>Island Snow</NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col xs="auto" className="d-flex align-items-center">
      <Nav.Link href="#" className="p-0 text-dark">SEARCH</Nav.Link>
    </Col>
  </Row>
);

// 4. FullWidthImage Component
const FullWidthImage = () => (
  <Row className="justify-content-center my-2">
    <Col xs={12} className="px-0">
      <Image 
        src="/experience-islandsnow-bootstrap-main.png" 
        alt="Island Snow Main" 
        fluid 
        className="w-100"
      />
    </Col>
  </Row>
);

// 5. FooterMenu Component
const FooterMenu = () => (
  <footer className="bg-dark text-white py-4 mt-auto">
    <Container>
      <Row>
        <Col md={4}>
          <h6 className="fw-bold">NAVIGATION</h6>
          <hr className="bg-white my-2" />
          <p className="mb-1">About Us</p>
          <p className="mb-1">Employment</p>
          <p className="mb-1">Videos</p>
        </Col>
        <Col md={4}>
          <h6 className="fw-bold">MAIN MENU</h6>
          <hr className="bg-white my-2" />
          <p className="mb-1">Men</p>
          <p className="mb-1">Women</p>
          <p className="mb-1">Kids</p>
        </Col>
        <Col md={4}>
          <h6 className="fw-bold">CONNECT</h6>
          <hr className="bg-white my-2" />
          <p className="mb-2">Sign up for the latest updates</p>
          <div className="d-flex">
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="form-control me-2 rounded-0" 
            />
            <button className="btn btn-dark border-light rounded-0">Join</button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Main Page Layout
export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Container fluid className="px-0">
        <TopMenu />
        <Container>
          <IslandSnowLogo />
          <MiddleMenu />
        </Container>
        <FullWidthImage />
        <FooterMenu />
      </Container>
    </main>
  );
}