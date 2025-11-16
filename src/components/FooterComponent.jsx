import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function FooterComponent() {
  return (
    <footer id="kontak" className="footer-section">
      <Container>
        <Row>
          {/* Kontak */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">KONTAK KAMI</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Jl. Angkasa I No.2 Kemayoran,
              <br />
              Jakarta Pusat 10610, PO Box 3540 Jkt.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">&nbsp;</h5>
            <p>
              <FaPhoneAlt className="me-2" />
              Contact Center (021) 196
              <br />
              Faks (021) 4246703
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">&nbsp;</h5>
            <p>
              <FaEnvelope className="me-2" />
              cc196[at]bmkg.go.id
            </p>
          </Col>
        </Row>

        {/* Media Sosial */}
        <Row className="mt-4">
          <Col>
            <h5 className="fw-bold">MEDIA SOSIAL</h5>
            <div className="social-icons">
              <FaYoutube />
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaTiktok />
              <FaWhatsapp />
            </div>
          </Col>
        </Row>

        {/* Garis */}
        <hr className="my-4 border-light" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2025 - Badan Meteorologi, Klimatologi, dan Geofisika
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
