import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import "../styles/Home.css";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { loadWeather } from "../hooks/WeatherHook";
import { CarouselSetting } from "../hooks/CarouselData";

export default function HomePage() {
	// Setting carousel
	const settings = CarouselSetting;
    const [isReady, setReady] = useState(false);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadWeather().then(data => {
            setWeather(data);
            setReady(true);
        });
    }, []);
	
return (
    <>
        {/* Hero Section */}
        <section className="py-5" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1 className="fw-bold">
                            Badan Meteorologi Klimatologi dan Geofisika
                        </h1>
                        <Button
                            as={RouterLink}
                            to="/provinsi-list"
                            variant="primary"
                            size="lg"
                            className="mt-3 btn"
                        >
                            Lihat Cuaca
                        </Button>
                    </Col>
                    <Col md={6}>
                        <img src="/landing.png" alt="BMKG" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Carousel Cuaca */}
        <section className="py-5 bg-light">
            <div className="container">
				{!isReady && (
					<div className="d-flex justify-content-center py-5">
						<Spinner animation="border" role="status" />
					</div>
				)}
				{isReady && (
					<>
						<h3 className="fw-bold mb-4">
							{`Prakiraan Cuaca:  ${weather.lokasi}`}
						</h3>
						<Slider {...settings}>
							{weather.data.flatMap((kel) =>
								kel.cuaca.map((c, idx) => (
									<div key={`${kel.kelurahan}-${idx}`}>
										<Card className="shadow-sm text-center p-3">
											<p className="text-muted">
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
											<h4>{c.t}°C</h4>
											<p>{c.weather_desc}</p>
										</Card>
									</div>
								))
							)}
						</Slider>
					</>
				)}
            </div>
        </section>
    </>
);
}
