import React from "react";
import {
    Container,
    Table,
    Row,
    Col,
    InputGroup,
    FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
    FaSearch,
    FaTint,
    FaTemperatureHigh,
    FaCloudRain,
    FaCloud,
    FaSun,
    FaBolt,
    FaSmog,
} from "react-icons/fa";
import "../styles/Cuaca.css";
import { dataProvinsi } from "../hooks/Provinsi";
import env from "../env";

export default function ProvinsiPage() {
    const navigate = useNavigate();

    return (
        <section className="py-5 cuaca-section">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col md={8}>
                        <h2 className="fw-bold">Provinsi</h2>
                    </Col>
                </Row>

                <Row>
                    {dataProvinsi.map((prov) => (
                        <Col
                            key={prov.code}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="mb-3"
                        >
                            <div
                                className="p-3 border rounded d-flex align-items-center gap-3 hover-shadow h-100"
                                onClick={() => navigate(`/kabupaten-list/${prov.code}?prov=${prov.code}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={`${env.api.provinsiLogo}${(prov.icon)}`}
                                    alt={prov.name}
                                    style={{
                                        width: "36x",
                                        height: "36px",
                                        objectFit: "contain",
                                    }}
                                />
                                <div>
                                    <h5 className="mb-1">{prov.name}</h5>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}
