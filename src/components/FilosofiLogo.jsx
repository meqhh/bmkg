import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FilosofiLogo() {
  return (
    <section className="py-5 ">
      <Container>
        <h2 className="fw-bold">Filosofi Logo</h2>
        <Row>
          <Col md={3}>
            <img src="/Logo.png" alt="Logo BMKG" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h5>Bentuk</h5>
            <p>
              Logo BMKG berbentuk lingkaran dengan warna dasar biru, putih dan
              hijau, di tengah-tengah warna putih terdapat satu garis berwarna
              abu-abu dengan tulisan BMKG pada bagian bawah.
            </p>
            <h5>Makna</h5>
            <p>
              Makna dari logo BMKG menggambarkan bahwa BMKG berupaya semaksimal
              mungkin dapat menyediakan dan memberikan informasi Meteorologi,
              Klimatologi, dan Geofisika dengan mengaplikasikan perkembangan
              ilmu pengetahuan dan teknologi terkini dan dapat berkembang secara
              dinamis sesuai kemajuan jaman. Dalam menjalankan fungsinya, BMKG
              berupaya memberikan yang terbaik dan penuh keikhlasan berdasarkan
              Pancasila untuk bangsa dan tanah air Indonesia yang subur yang
              terletak di garis khatulistiwa.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
