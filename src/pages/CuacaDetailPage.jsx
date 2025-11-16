import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaTint,
  FaWind,
  FaEye,
  FaTemperatureHigh,
  FaCloudRain,
} from "react-icons/fa";
import "../styles/Cuaca.css";

const CuacaDetailPage = () => {
  const { kota } = useParams();

  return (
    <section className="py-5 cuaca-section">
      <Container>
        {/* Judul */}
        <div className=" mb-4">
          <h2 className="fw-bold">Prakiraan Cuaca Saat Ini</h2>
          <p className="text-muted">Prakiraan cuaca di {kota}</p>
        </div>

        {/* Cuaca Saat Ini */}
        <Card className="shadow-sm p-4 mb-5">
          <Row className="align-items-center">
            <Col md={6} className="weather-main mb-3 mb-md-0">
              <FaCloudRain size={100} className="weather-icon" />
              <div className="weather-info">
                <p>Saat Ini</p>
                <h3 className="fw-bold mb-1">26°C</h3>
                <p className="mb-2">Hujan Ringan</p>
              </div>
            </Col>

            <Col md={6}>
              <ul className="list-unstyled mb-0">
                <li>
                  <FaTint className="me-2 text-info" /> Kelembapan: <b>84%</b>
                </li>
                <li>
                  <FaWind className="me-2 text-success" /> Kecepatan Angin:{" "}
                  <b>13 Km/jam</b>
                </li>
                <li>
                  <FaWind className="me-2 text-secondary" /> Arah Angin:{" "}
                  <b>Tenggara</b>
                </li>
                <li>
                  <FaEye className="me-2 text-muted" /> Jarak Pandang:{" "}
                  <b>&lt; 10 Km</b>
                </li>
              </ul>
            </Col>
          </Row>
        </Card>

        {/* Forecast Harian */}
        <h4 className="fw-bold mb-3">Perkiraan Cuaca 25 Agustus 2025</h4>
        <div className="d-flex gap-2 mb-4">
          <Button variant="primary">25 Agt</Button>
          <Button variant="outline-primary">26 Agt</Button>
          <Button variant="outline-primary">27 Agt</Button>
        </div>

        <div className="weather-hourly">
          {[1, 2, 3, 4].map((i) => (
            <div className="weather-hour-card" key={i}>
              <p className="fw-bold text-muted">09.00 WIB</p>
              <FaCloudRain className="weather-icon" />
              <h5 className="fw-bold">26°C</h5>
              <p className="mb-1">Hujan Ringan</p>
              <small className="text-muted">84% | 13 Km/jam</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CuacaDetailPage;
