import React from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import pages
import HomePage from "./pages/HomePage.jsx";
import TentangPage from "./pages/TentangPage.jsx";
import CuacaPage from "./pages/CuacaPage.jsx";
import CuacaDetailPage from "./pages/CuacaDetailPage.jsx";

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
          <Route path="/cuaca" element={<CuacaPage />} />
          <Route path="/cuaca/:kota" element={<CuacaDetailPage />} />
        </Routes>
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
