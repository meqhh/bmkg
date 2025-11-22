import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { loadKabupaten } from "../hooks/DaerahHook";
import "../styles/Cuaca.css";

export default function KabupatenPage() {
    const navigate = useNavigate();
    const { provCode } = useParams();
    const [kabupatenList, setKabupaten] = useState([]);
    const [isReady, setReady] = useState(false);
    
    useEffect(() => {
        loadKabupaten(provCode).then(data => {
            setKabupaten(data.data);
            setReady(true);
        })
    }, [provCode]);

    return (
        <section className="py-5 cuaca-section kabupaten">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col md={8}>
                        <h2 className="fw-bold"><span onClick={() => navigate(`/provinsi-list`)}>Provinsi</span> / Kabupaten</h2>
                        <small className="text-muted">
                            Provinsi Code: {provCode}
                        </small>
                    </Col>
                </Row>
                {!isReady && (
                    <div className="d-flex justify-content-center py-5">
                        <Spinner animation="border" role="status" />
                    </div>
                )}
                {isReady && (
                <>
                    <Row>
                        <Col xs={12}>
                            <div className="d-flex flex-column gap-2">
                                {kabupatenList.map((item) => (
                                    <div
                                        key={item.code}
                                        className="p-3 border rounded hover-shadow w-100"
                                        onClick={() => navigate(`/kecamatan-list/${item.code}?kab=${provCode}`)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <h5 className="mb-0">{item.name}</h5>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </>
                )}
            </Container>
        </section>
    );
}
