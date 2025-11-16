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

export default function CuacaPage() {
  const navigate = useNavigate();

  const data = [
    {
      kota: "Bintan",
      cuaca: [
        "Hujan Ringan",
        "Hujan Ringan",
        "Berawan",
        "Udara Kabur",
        "Hujan Ringan",
      ],
    },
    {
      kota: "Karimun",
      cuaca: [
        "Hujan Petir",
        "Hujan Ringan",
        "Cerah Berawan",
        "Berawan",
        "Berawan",
      ],
    },
    {
      kota: "Natuna",
      cuaca: [
        "Hujan Ringan",
        "Hujan Ringan",
        "Berawan",
        "Udara Kabur",
        "Berawan",
      ],
    },
    {
      kota: "Lingga",
      cuaca: ["Hujan Ringan", "Hujan Ringan", "Berawan", "Berawan", "Berawan"],
    },
    {
      kota: "Kepulauan Anambas",
      cuaca: [
        "Hujan Petir",
        "Hujan Ringan",
        "Hujan Ringan",
        "Berawan",
        "Cerah Berawan",
      ],
    },
    {
      kota: "Kota Batam",
      cuaca: [
        "Hujan Petir",
        "Hujan Ringan",
        "Berawan",
        "Berawan",
        "Udara Kabur",
      ],
    },
    {
      kota: "Tanjung Pinang",
      cuaca: ["Hujan Ringan", "Hujan Ringan", "Berawan", "Berawan", "Berawan"],
    },
  ];

  const tanggal = [
    "Sen, 01 Sep",
    "Sel, 02 Sep",
    "Rab, 03 Sep",
    "Kam, 04 Sep",
    "Jum, 05 Sep",
  ];

  // fungsi untuk pilih ikon berdasarkan kondisi cuaca
  const getWeatherIcon = (condition) => {
    if (condition.includes("Petir"))
      return <FaBolt size={20} className="mb-2 weather-icon text-warning" />;
    if (condition.includes("Hujan"))
      return (
        <FaCloudRain size={20} className="mb-2 weather-icon text-primary" />
      );
    if (condition.includes("Cerah"))
      return <FaSun size={20} className="mb-2 weather-icon text-warning" />;
    if (condition.includes("Berawan"))
      return <FaCloud size={20} className="mb-2 weather-icon text-secondary" />;
    if (condition.includes("Kabur"))
      return <FaSmog size={20} className="mb-2 weather-icon text-muted" />;
    return <FaCloudRain size={20} className="mb-2 weather-icon" />;
  };

  return (
    <section className="py-5 cuaca-section">
      <Container>
        {/* Judul */}
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="fw-bold">Prakiraan Cuaca Provinsi Kepulauan Riau</h2>
            <p>Prakiraan cuaca kabupaten dan kota di Provinsi Kepulauan Riau</p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <InputGroup className="search-input">
              <InputGroup.Text className="search-icon">
                <FaSearch size={16} color="#192c50" />
              </InputGroup.Text>
              <FormControl placeholder="Cari kabupaten/kota..." />
            </InputGroup>
          </Col>
        </Row>

        {/* Tabel Cuaca */}
        <Table
          bordered
          hover
          responsive
          className="custom-table text-center align-middle"
        >
          <thead className="table-primary">
            <tr>
              <th>Kab. / Kota</th>
              {tanggal.map((tgl, index) => (
                <th key={index}>{tgl}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                {/* Klik nama kota → ke halaman detail */}
                <td
                  className="fw-bold text-primary cursor-pointer"
                  onClick={() => navigate(`/cuaca/${item.kota}`)}
                >
                  {item.kota}
                </td>
                {item.cuaca.map((c, i) => (
                  <td key={i}>
                    <div>{getWeatherIcon(c)}</div>
                    <div className="fw-semibold">{c}</div>
                    <div className="weather-detail mt-1">
                      <div className="temp small text-muted">
                        <FaTemperatureHigh size={14} className="me-1" />
                        <span>25-29°C</span>
                      </div>
                      <div className="humidity small text-muted">
                        <FaTint size={14} className="me-1" />
                        <span>76-93%</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
