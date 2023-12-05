import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link href="#about">
            <FaInfo /> About
          </Nav.Link>
          <Nav.Link href="#contact">
            <FaEnvelope /> Contact
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
