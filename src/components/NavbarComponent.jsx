import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom"; // untuk navigasi page
import { Link as ScrollLink } from "react-scroll"; // untuk scroll ke footer
import "../styles/Navbar.css";

export default function NavbarComponent() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="shadow-sm custom-navbar"
    >
      <Container>
        {/* Logo pakai RouterLink */}
        <Navbar.Brand
          as={RouterLink}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src="/Logo.png" // pastikan ada di folder public
            alt="Logo BMKG"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">BMKG</span>
        </Navbar.Brand>

        {/* Toggle button (mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={RouterLink} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/cuaca">
              Cuaca
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/tentang">
              Tentang
            </Nav.Link>

            {/* Scroll ke footer */}
            <Nav.Link
              as={ScrollLink}
              to="kontak"
              smooth={true}
              duration={500}
              offset={-70} // biar tidak ketutup navbar
            >
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
