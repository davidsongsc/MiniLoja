import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductDetailsProps {
  getProductById: (id: string) => Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ getProductById }) => {
  // Obtém o ID do produto da rota ou por outros meios
  const productId = '123';

  // Obtém os detalhes do produto com base no ID
  const product = getProductById(productId);

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
