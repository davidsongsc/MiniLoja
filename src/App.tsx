import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import ProductDetails from './ProdutoDetalhes';
import ListaProdutos from './ListaProdutos';
import './disnone.css';
const App: React.FC = () => {
  const getProductById = (id: string) => {
    // Lógica para obter os detalhes do produto com base no ID
    // Substitua por sua implementação real
    return { id, name: 'Product Name', price: 9.99 };
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/sobre" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route
          path="/produtos/:id"
          element={<ProductDetails getProductById={getProductById} />}
        />
        {/* Adicione mais rotas para outras páginas */}
        {/* Adicione mais rotas para outras páginas */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
