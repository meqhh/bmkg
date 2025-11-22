import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { loadKelurahan } from "../hooks/DaerahHook";
import "../styles/Cuaca.css";

export default function KelurahanPage() {
    const navigate = useNavigate();
    const { kecCode } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const kec = query.get("kec");

    const [kelurahanList, setKelurahan] = useState([]);
    const [isReady, setReady] = useState(false);
    
    useEffect(() => {
        loadKelurahan(kecCode).then(data => {
            setKelurahan(data.data);
            setReady(true);
        })
    }, [kecCode]);

    return (
        <section className="py-5 cuaca-section kabupaten">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col md={8}>
                        <h2 className="fw-bold"><span onClick={() => navigate(`/kecamatan-list/${kec}`)}>Kecamatan</span> / Kelurahan</h2>
                        <small className="text-muted">
                            Kelurahan Code: {kecCode}
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
                                {kelurahanList.map((item) => (
                                    <div
                                        key={item.code}
                                        className="p-3 border rounded hover-shadow w-100"
                                        onClick={() => navigate(`/cuaca/${item.code}`)}
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
