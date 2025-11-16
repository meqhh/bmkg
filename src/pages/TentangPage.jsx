import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../styles/Tentang.css";

export default function TentangPage() {
  return (
    <section className="py-5 tentang-section">
      <Container>
        {/* Judul + Navigasi */}
        <div className="tentang-header d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0">Tentang BMKG</h2>
          <Nav className="tentang-tabs">
            <Nav.Item>
              <Nav.Link href="#sejarah">Sejarah</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#tugas">Tugas dan Fungsi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#visi">Visi dan Misi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#logo">Filosofi Logo</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Sejarah */}
        <div id="sejarah" className="mb-5">
          <h4 className="fw-bold mb-3">Sejarah</h4>
          <ul className="timeline">
            <li>
              <span className="year">1841</span>
              <p>
                <strong>Pengamatan meteorologi dan geofisika pertama</strong>
                <br />
                Sejarah pengamatan meteorologi dan geofisika di Indonesia
                dimulai pada tahun 1841 diawali dengan pengamatan yang dilakukan
                secara perorangan oleh Dr. Onnen, Kepala Rumah Sakit di Bogor.
                Tahun demi tahun kegiatannya berkembang sesuai dengan semakin
                diperlukannya data hasil pengamatan cuaca dan geofisika.
              </p>
            </li>
            <li>
              <span className="year">1866</span>
              <p>
                <strong>
                  Peresmian Magnetisch en Meteorologisch Observatorium
                </strong>
                <br />
                Pada tahun 1866, kegiatan pengamatan perorangan tersebut oleh
                Pemerintah Hindia Belanda diresmikan menjadi instansi pemerintah
                dengan nama Magnetisch en Meteorologisch Observatorium atau
                Observatorium Magnetik dan Meteorologi yang dipimpin oleh Dr.
                Pieter Adriaan Bergsma.
              </p>
            </li>
            <li>
              <span className="year">1879</span>
              <p>
                <strong>Pembangungan jaringan penakar hujan di Jawa</strong>
                <br />
                Pada tahun 1879 dibangun jaringan penakar hujan sebanyak 74
                stasiun pengamatan di Jawa.
              </p>
            </li>{" "}
            <li>
              <span className="year">1908</span>
              <p>
                <strong>Pengamatan gempa bumi pertama</strong>
                <br />
                Pada tahun 1902 pengamatan medan magnet bumi dipindahkan dari
                Batavia ke Bogor. Pengamatan gempa bumi dimulai pada tahun 1908
                dengan pemasangan komponen horisontal seismograf Wiechert di
                Batavia, sedangkan pemasangan komponen vertikal dilaksanakan
                pada tahun 1928.
              </p>
            </li>{" "}
            <li>
              <span className="year">1912</span>
              <p>
                <strong>Reorganisasi pengamatan meteorologi</strong>
                <br />
                Pada tahun 1912 dilakukan reorganisasi pengamatan meteorologi
                dengan menambah jaringan sekunder. Sedangkan jasa meteorologi
                mulai digunakan untuk penerangan pada tahun 1930.
              </p>
            </li>
            <li>
              <span className="year">1942</span>
              <p>
                <strong>Berganti nama menjadi Kishō Kōzō Kusho</strong>
                <br />
                Pada masa pendudukan Jepang antara tahun 1942 sampai dengan
                1945, nama instansi meteorologi dan geofisika diganti menjadi
                Kishō Kōzō Kusho (Lembaga Meteorologi).
              </p>
            </li>
            <li>
              <span className="year">1945</span>
              <p>
                <strong>
                  Dibentuk Biro Meteorologi dan Jawatan Meteorologi dan
                  Geofisika
                </strong>
                <br />
                Setelah proklamasi kemerdekaan Indonesia pada tahun 1945,
                instansi tersebut dipecah menjadi dua: Di Yogyakarta dibentuk
                Biro Meteorologi yang berada di lingkungan Markas Tertinggi
                Tentara Rakyat Indonesia khusus untuk melayani kepentingan
                Angkatan Udara. Di Jakarta dibentuk Jawatan Meteorologi dan
                Geofisika, di bawah Kementerian Pekerjaan Umum dan Tenaga.
              </p>
            </li>
            <li>
              <span className="year">1947</span>
              <p>
                <strong>Dipertahankan Pemerintah Republik Indonesia</strong>
                <br />
                Pada tanggal 21 Juli 1947 Jawatan Meteorologi dan Geofisika
                diambil alih oleh Pemerintah Belanda dan namanya diganti menjadi
                Meteorologisch en Geofisiche Dienst. Sementara itu, ada juga
                Jawatan Meteorologi dan Geofisika yang dipertahankan oleh
                Pemerintah Republik Indonesia, kedudukan instansi tersebut di
                Jl. Gondangdia, Jakarta. Hari inilah yang dijadikan sebagai hari
                meteorologi, klimatogi, dan geofisika yang setiap tahunnya
                diperingati. Pada tahun 1949, setelah penyerahan kedaulatan
                negara Republik Indonesia dari Belanda, Meteorologisch en
                Geofisiche Dienst diubah menjadi Jawatan Meteorologi dan
                Geofisika dibawah Departemen Perhubungan dan Pekerjaan Umum.
              </p>
            </li>
            <li>
              <span className="year">1950</span>
              <p>
                <strong>
                  Menjadi anggota resmi World Meteorological Organization (WMO)
                </strong>
                <br />
                Pada tahun 1950 Indonesia secara resmi masuk sebagai anggota
                Organisasi Meteorologi Dunia (World Meteorological Organization
                atau WMO) dan Kepala Jawatan Meteorologi dan Geofisika menjadi
                Permanent Representative of Indonesia with WMO.
              </p>
            </li>
            <li>
              <span className="year">1965</span>
              <p>
                <strong>
                  Berganti nama menjadi Direktorat Meteorologi dan Geofisika
                </strong>
                <br />
                Pada tahun 1955 Jawatan Meteorologi dan Geofisika diubah namanya
                menjadi Lembaga Meteorologi dan Geofisika di bawah Departemen
                Perhubungan. Pada tahun 1960 namanya dikembalikan menjadi
                Jawatan Meteorologi dan Geofisika di bawah Departemen
                Perhubungan Udara. Kemudian pada tahun 1965, namanya diubah
                menjadi Direktorat Meteorologi dan Geofisika, kedudukannya tetap
                di bawah Departemen Perhubungan Udara.
              </p>
            </li>
            <li>
              <span className="year">1980</span>
              <p>
                <strong>
                  Berganti nama menjadi Badan Meteorologi dan Geofisika (BMG)
                </strong>
                <br />
                Pada tahun 1972, Direktorat Meteorologi dan Geofisika diganti
                namanya menjadi Pusat Meteorologi dan Geofisika, suatu instansi
                setingkat eselon II di bawah Departemen Perhubungan. Pada tahun
                1980 statusnya dinaikkan menjadi suatu instansi setingkat eselon
                I dengan nama Badan Meteorologi dan Geofisika (BMG), dengan
                kedudukan tetap berada di bawah Departemen Perhubungan.
              </p>
            </li>
            <li>
              <span className="year">2002</span>
              <p>
                <strong>
                  Ditetapkan menjadi Lembaga Pemerintah Non Departemen
                </strong>
                <br />
                Pada tahun 2002, dengan keputusan Presiden RI Nomor 46 dan 48
                tahun 2002, struktur organisasinya diubah menjadi Lembaga
                Pemerintah Non Departemen (LPND) dengan nama tetap Badan
                Meteorologi dan Geofisika.
              </p>
            </li>
            <li>
              <span className="year">2008</span>
              <p>
                <strong>
                  Berganti nama menjadi Badan Meteorologi, Klimatologi, dan
                  Geofisika (BMKG)
                </strong>
                <br />
                Terakhir, melalui Peraturan Presiden Nomor 61 Tahun 2008, Badan
                Meteorologi dan Geofisika berganti nama menjadi Badan
                Meteorologi, Klimatologi, dan Geofisika (BMKG) dengan status
                tetap sebagai Lembaga Pemerintah Non Departemen
              </p>
            </li>
          </ul>
        </div>

        {/* Tugas dan Fungsi */}
        <div id="tugas" className="mb-5">
          <h4 className="fw-bold mb-3">Tugas dan Fungsi</h4>
          <h5 className="fw-bold">Tugas</h5>
          <p>
            BMKG mempunyai tugas melaksanakan tugas pemerintahan di bidang
            penyelenggaraan meteorologi, klimatologi, dan geofisika.
          </p>
          <h5 className="fw-bold">Fungsi</h5>
          <p>
            Dalam melaksanakan tugas sebagaimana dimaksud di atas, Badan
            Meteorologi, Klimatologi, dan Geofisika menyelenggarakan fungsi:
          </p>
          <ul>
            <li>
              Perumusan dan penetapan kebijakan nasional, umum, dan teknis di
              bidang pengamatan, pengelolaan data, pelayanan, sarana dan
              prasarana meteorologi, klimatologi, dan geofisika, serta
              modifikasi cuaca.
            </li>
            <li>
              Pelaksanaan kebijakan umum dan teknis di bidang pengamatan,
              pengelolaan data, pelayanan, sarana dan prasarana meteorologi,
              klimatologi, dan geofisika, serta modifikasi cuaca.
            </li>
            <li>
              Koordinasi pelaksanaan kebijakan umum dan teknis di bidang
              modifikasi cuaca.
            </li>
            <li>
              Koordinasi pelaksanaan tugas, pembinaan, dan dukungan administrasi
              kepada seluruh unsur organisasi di lingkungan BMKG.
            </li>
            <li>
              Penyusunan dan penetapan norma, standar, prosedur, dan kriteria di
              bidang pengamatan, pengelolaan data, pelayanan, serta sarana dan
              prasarana meteorologi, klimatologi, dan geofisika, serta
              modifikasi cuaca.
            </li>
            <li>
              Pemberian bimbingan teknis, supervisi, pengendalian, dan
              pengawasan di bidang pengamatan, pengelolaan data, pelayanan,
              sarana dan prasarana meteorologi, klimatologi, dan geofisika,
              serta modifikasi cuaca.
            </li>
            <li>
              Pelaksanaan kerja sama internasional di bidang pengamatan,
              pengelolaan data, pelayanan, sarana dan prasarana meteorologi,
              klimatologi, dan geofisika, serta modifikasi cuaca.
            </li>
            <li>
              Pengelolaan barang milik negara yang menjadi tanggung jawab BMKG.
            </li>
            <li>
              Pelaksanaan dukungan yang bersifat substantif kepada seluruh unsur
              organisasi di lingkungan BMKG.
            </li>
            <li>Pengawasan atas pelaksanaan tugas di lingkungan BMKG.</li>
          </ul>
        </div>

        {/* Visi dan Misi */}
        <div id="visi" className="mb-5">
          <h4 className="fw-bold mb-3">Visi dan Misi</h4>
          <h5 className="fw-bold">Visi</h5>
          <p>
            Mewujudkan peningkatan kualitas dan kuantitas pengamatan,
            pengumpulan, penyebaran data dan informasi meteorologi penerbangan
            sesuai standar Internasional.
          </p>
          <h5 className="fw-bold">Misi</h5>
          <ul>
            <li>
              Mengamati dan memahami fenomena meteorologi, klimatologi, kualitas
              udara dan geofisika.
            </li>
            <li>
              Menyediakan data, informasi dan jasa meteorologi, klimatologi,
              kualitas udara dan geofisika yang handal dan terpercaya.
            </li>
            <li>
              Mengkoordinasikan dan memfasilitasi kegiatan di bidang
              meteorologi, klimatologi , kualitas udara dan geofisika.
            </li>
            <li>
              Berpartisipasi aktif dalam kegiatan internasional di Bidang
              meteorologi, klimatologi , kualitas udara dan geofisika.
            </li>
          </ul>
        </div>

        {/* Filosofi Logo */}
        <div id="logo" className="mb-5">
          <h4 className="fw-bold mb-3">Filosofi Logo</h4>
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
                Makna dari logo BMKG menggambarkan bahwa BMKG berupaya
                semaksimal mungkin dapat menyediakan dan memberikan informasi
                Meteorologi, Klimatologi, dan Geofisika dengan mengaplikasikan
                perkembangan ilmu pengetahuan dan teknologi terkini dan dapat
                berkembang secara dinamis sesuai kemajuan jaman. Dalam
                menjalankan fungsinya, BMKG berupaya memberikan yang terbaik dan
                penuh keikhlasan berdasarkan Pancasila untuk bangsa dan tanah
                air Indonesia yang subur yang terletak di garis khatulistiwa.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
