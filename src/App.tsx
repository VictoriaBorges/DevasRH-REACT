import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./components/sections/contato/Contato";
import Produto from "./components/sections/produto/Produto";
import Equipe from "./components/sections/equipe/Equipe";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
