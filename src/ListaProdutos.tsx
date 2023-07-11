import React from 'react';

const ListaProdutos: React.FC = () => {
  // Array de produtos (exemplo)
  const products = [
    { id: 1, name: 'Camisa Branca', status: 'Esgotado', imagem: 'https://img.elo7.com.br/product/original/17B1547/camisa-sublimacao-poliester.jpg' },
    { id: 2, name: 'Camisa Preta', status: 'Disponivel', imagem: 'https://i5.walmartimages.com/asr/0325ebe6-484d-400f-870b-b4bf1536aa3b.156a51f72a8534c3758b16fb9982cafa.jpeg' },
    { id: 3, name: 'Camisa Manga', status: 'Esgotado', imagem: 'https://a-static.mlcdn.com.br/800x560/camisa-manga-longa-masculina/matsonvazmodas/aed58c62cfc911ec815b4201ac18506b/4b72919ef8f3ae669a90bc2f64529863.jpg' },
   // Adicione mais produtos conforme necessário
  ];

  return (
    <div style={{
      marginTop: '85px',
      
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        {products.map((product) => (
          <li key={product.id} style={{
            padding: '15px',
            width: '280px',
            display: 'grid',
            justifyItems: 'center'
          }}>
            <span><img src={product.imagem} alt="" style={{ width: '150px' }} /></span>
            <span>{product.name}</span>
            <span style={{ fontSize: '11px' }}>{product.status}</span>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default ListaProdutos;
