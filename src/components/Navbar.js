import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCapsules } from 'react-icons/fa'; // Pharmacy icon
import "../Styles/StylesNavbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand">
          <FaCapsules className="brand-icon" /> Pharmacie Sarra Chehata
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/Services">Services</Nav.Link>
            <Nav.Link as={Link} to="/Produits">Produits</Nav.Link>
            <Nav.Link as={Link} to="/Contactez">Contactez-nous</Nav.Link>
            <Nav.Link as={Link} to="/A Propos">A Propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
