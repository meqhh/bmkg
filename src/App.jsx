import React from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import pages
import HomePage from "./pages/HomePage.jsx";
import TentangPage from "./pages/TentangPage.jsx";
import ProvinsiPage from "./pages/ProvinsiPage.jsx";
import CuacaDetailPage from "./pages/CuacaDetailPage.jsx";
import KabupatenPage from "./pages/KabupatenPage.jsx";
import KecamatanPage from "./pages/KecamatanPage.jsx";
import KelurahanPage from "./pages/KelurahanPage.jsx";

// Import components
import Navbar from "./components/NavbarComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/provinsi-list" element={<ProvinsiPage />} />
          <Route path="/kabupaten-list/:provCode" element={<KabupatenPage />} />
          <Route path="/kecamatan-list/:kabCode" element={<KecamatanPage />} />
          <Route path="/kelurahan-list/:kecCode" element={<KelurahanPage />} />
          <Route path="/cuaca/:kelCode" element={<CuacaDetailPage />} />
        </Routes>
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
