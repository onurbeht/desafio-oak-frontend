import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-produto" element={<NewProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

// - Colunas da listagem: nome, valor
// - Ordenação por valor do menor para o maior
// - Quando cadastrar um novo produto é para abrir a listagem automaticamente
// - Deve existir um botão para cadastrar um novo produto a partir da listagem

export default App;
