import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import {
    FaTint,
    FaWind,
    FaEye,
    FaTemperatureHigh,
    FaCloudRain,
} from "react-icons/fa";
import "../styles/Cuaca.css";
import { weatherKelurahan, windDirectionTranslate, FormatTanggalDetailCuaca } from "../hooks/WeatherHook";
import { MdHeight } from "react-icons/md";
import Slider from "react-slick";
import { CarouselSetting } from "../hooks/CarouselData";

export default function CuacaDetailPage() {
    const settings = CarouselSetting;
    const { kelCode } = useParams();
    const [bmkgData, setBMKG] = useState(null);
    const [current, setCurrentWeather] = useState(null);
    const [dataForecast, setForecast] = useState([]);
    const [isReady, setReady] = useState(false);
    useEffect(() => {
        weatherKelurahan(kelCode).then(data => {
            setBMKG(data);
            const dataForecast = data.data[0].cuaca.flat();
            setForecast(dataForecast);
            setCurrentWeather(data.data[0].cuaca[0][0]);
            if (data.data.length) {
                setReady(true);
            };
        });
    }, [kelCode]);


return (
    <section className="py-5 cuaca-section">
        <Container>
            {/* Judul */}
            <div className="mb-4">
                <h2 className="fw-bold">Prakiraan Cuaca Saat Ini</h2>
                <p className="text-muted">Prakiraan cuaca di {isReady ? bmkgData.lokasi.desa : ''}</p>
            </div>

            {!isReady && (
                <div className="d-flex align-items-center justify-content-center py-5 detail-cuaca-spinner">
                    <Spinner animation="border" role="status" />
                </div>
            )}
            {isReady && (
            <>
                {/* Cuaca Saat Ini */}
                <Card className="shadow-sm p-4 mb-5">
                    <Row className="align-items-center">
                        <Col md={6} className="weather-main mb-3 mb-md-0">
                            <img
                                src={current?.image}
                                alt={current?.weather_desc}
                                style={{ width: 100 }}
                            />
                            <div className="weather-info">
                                <p>Saat Ini</p>
                                <h3 className="fw-bold mb-1">{current?.t}°C</h3>
                                <p className="mb-2">{current?.weather_desc}</p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <FaTint className="me-2 text-info" /> Kelembapan:{" "}
                                    <b>{current?.hu}%</b>
                                </li>
                                <li>
                                    <FaWind className="me-2 text-success" /> Kecepatan Angin:{" "}
                                    <b>{current?.ws} Km/Jam</b>
                                </li>
                                <li>
                                    <FaWind className="me-2 text-secondary" /> Arah Angin:{" "}
                                    <b>{windDirectionTranslate(current?.wd)}</b>
                                </li>
                                <li>
                                    <FaEye className="me-2 text-muted" /> Jarak Pandang:{" "}
                                    <b>{current?.vs_text}</b>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Card>

                {/* Forecast Harian */}
                <h4 className="fw-bold mb-3">Perkiraan Cuaca {FormatTanggalDetailCuaca()}</h4>
                <Slider {...settings}>
                    {dataForecast.map((c, idx) => (
                        <div key={idx}>
                            <Card className="shadow-sm text-center weather-hour-card">
                                <p className="text-muted fw-bold">
                                    {new Date(c.local_datetime).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                    {" • "}
                                    {new Date(c.local_datetime).toLocaleTimeString("id-ID", {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </p>
                                <img
                                    src={c.image}
                                    alt={c.weather_desc}
                                    width="60"
                                    height="60"
                                    className="d-block mx-auto my-2"
                                />
                                <h5 className="fw-bold">{c.t}°C</h5>
                                <p className="mb-1">{c.weather_desc}</p>
                                <small className="text-muted">
                                    {c.hu}% | {c.ws} Km/jam
                                </small>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </>
            )}
        </Container>
    </section>
    );
};