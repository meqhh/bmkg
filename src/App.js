import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/Home/HomePage";
import CuacaPage from "./pages/Cuaca/CuacaPage";
import TentangPage from "./pages/Tentang/TentangPage";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuaca" element={<CuacaPage />} />
        <Route path="/tentang" element={<TentangPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
