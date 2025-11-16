import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import "../styles/Home.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import axios from "axios";
import { preconnect } from "react-dom";

// Data dummy prakiraan cuaca
const dataCuaca = [
	{
		kota: "Batam",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Hujan Ringan",
		icon: "🌧️",
	},
	{
		kota: "Tanjung Pinang",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Hujan Ringan",
		icon: "🌦️",
	},
	{
		kota: "Bintan",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Berawan",
		icon: "☁️",
	},
	{
		kota: "Karimun",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Hujan Ringan",
		icon: "🌧️",
	},
	{
		kota: "Natuna",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Berawan",
		icon: "☁️",
	},
	{
		kota: "Lingga",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Hujan Ringan",
		icon: "🌦️",
	},
	{
		kota: "Kepulauan Anambas",
		waktu: "09.00 WIB",
		suhu: "26°C",
		kondisi: "Hujan Ringan",
		icon: "🌧️",
	},
];


export default function HomePage() {
	// Setting carousel
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{ breakpoint: 992, settings: { slidesToShow: 2 } },
			{ breakpoint: 576, settings: { slidesToShow: 1 } },
		],
	};
	const [provinsi, setProvinsi] = useState([]);
	const [kecamatan, setKecamatan] = useState([]);
	const [kabupaten, setKabupaten] = useState([]);
	const [kelurahan, setKelurahan] = useState([]);

	const [bmkgData, setBmkgdata] = useState([]);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function load() {
			// preconnect('https://api.bmkg.go.id');
			const resProv = await axios.get('/provinsi/api/provinces.json');
			const provList = resProv.data.data;
			setProvinsi(provList);

			// randomizer provinsi
			const randProv = provList[Math.floor(Math.random() * provList.length)];
			if (!randProv) return;

			const resKab = await axios.get(`/kabupaten/${randProv.code}.json`);
			const kabList = resKab.data.data;
			setKabupaten(kabList);

			// randomizer kabupaten
			const randKab = kabList[Math.floor(Math.random() * kabList.length)];
			if (!randKab) return;

			const resKec = await axios.get(`/kecamatan/${randKab.code}.json`);
			const kecList = resKec.data.data;
			setKecamatan(kecList);

			// randomizer kecamatan
			const randkec = kecList[Math.floor(Math.random() * kecList.length)];
			if (!randkec) return;

			const resKelurahan = await axios.get(`/kelurahan/${randkec.code}.json`);
			const kelurahanList = resKelurahan.data.data;
			setKelurahan(kelurahanList);

			// randomieze kelurahan
			const randKelurahan = kelurahanList[Math.floor(Math.random() * kelurahanList.length)];
			if (!randKelurahan) return;

			// get data dari BMKG
			// const resBmkg = await axios.get(`/bmkg/prakiraan-cuaca?adm4=${randKelurahan.code}`);
			const resBmkg = await axios.get(`/bmkg/prakiraan-cuaca?adm4=31.71.03.1001`);
			
			// check ready render DOM ato kagak 
			if (resBmkg) {
				setBmkgdata(resBmkg);
				setIsReady(true);
			};
		};

		load();
	}, []);

	console.log(bmkgData);
	console.log('bmkgDatabmkgDatabmkgDatabmkgData');
	
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
                            to="/cuaca"
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
				{isReady && (
					<>
						<h3 className="fw-bold mb-4">
							{`Prakiraan Cuaca Provinsi ${bmkgData ? bmkgData?.data?.lokasi?.desa : 'Unfinished'}`}
						</h3>

						<Slider {...settings}>
							{dataCuaca.map((item, index) => (
								<div key={index}>
									<Card className="shadow-sm text-center p-3">
										<h5>{item.kota}</h5>
										<p className="text-muted">{item.waktu}</p>
										<h4>{item.suhu}</h4>
										<p>{item.kondisi}</p>
									</Card>
								</div>
							))}

							 
						</Slider>
					</>
				)}
            </div>
        </section>
    </>
);
}
