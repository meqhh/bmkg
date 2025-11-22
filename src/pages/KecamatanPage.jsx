import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { loadKecamata } from "../hooks/DaerahHook";
import "../styles/Cuaca.css";

export default function KecamatanPage() {
    const navigate = useNavigate();
    const { kabCode } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const kab = query.get("kab");

    const [kecamatanList, setKecamatan] = useState([]);
    const [isReady, setReady] = useState(false);
    
    useEffect(() => {
        loadKecamata(kabCode).then(data => {
            setKecamatan(data.data);
            setReady(true);
        })
    }, [kabCode]);

    return (
        <section className="py-5 cuaca-section kabupaten">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col md={8}>
                        <h2 className="fw-bold"><span onClick={() => navigate(`/kabupaten-list/${kab}`)}>Kabupaten</span> / Kecamatan</h2>
                        <small className="text-muted">
                            Kecamatan Code: {kabCode}
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
                                {kecamatanList.map((item) => (
                                    <div
                                        key={item.code}
                                        className="p-3 border rounded hover-shadow w-100"
                                        onClick={() => navigate(`/kelurahan-list/${item.code}?kec=${kabCode}?kab=${kab}`)}
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
