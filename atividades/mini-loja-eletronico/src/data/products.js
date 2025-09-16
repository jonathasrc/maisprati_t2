// src/data/products.js

export const products = [
  {
    id: 1,
    name: 'Smartphone Pro X 5G com Tela Super AMOLED e Câmera de 108MP',
    price: 3299.99,
    image:'https://placehold.co/600x400?text=Smartphone',
    rating: 4.8,
    tag: 'Novo',
    stock: 15, // Em estoque
  },
  {
    id: 2,
    name: 'Notebook Gamer Fire com Placa de Vídeo Dedicada RTX 4090',
    price: 7499.50,
    image: 'https://placehold.co/600x400?text=Notebook',
    rating: 4.9,
    tag: 'Promo',
    stock: 0, // Sem estoque (para o estado disabled)
  },
  // ... adicione a propriedade 'stock' aos outros produtos também
  {
    id: 3,
    name: 'Fone de Ouvido Bass com Cancelamento de Ruído Ativo',
    price: 349.90,
    image: 'https://placehold.co/600x400?text=Fone',
    rating: 4.5,
    tag: null,
    stock: 30,
  },
  {
    id: 4,
    name: 'Smartwatch Fit 2 com GPS Integrado e Medidor de Oxigênio',
    price: 899.00,
    image: 'https://placehold.co/600x400?text=Smartwatch',
    rating: 4.7,
    tag: 'Promo',
    stock: 5,
  },
  {
    id: 5,
    name: 'Teclado Mecânico RGB Switch Blue',
    price: 450.00,
    image: 'https://placehold.co/600x400?text=Teclado',
    rating: 4.6,
    tag: null,
    stock: 12,
  },
  {
    id: 6,
    name: 'Mouse Gamer Precision 16000 DPI',
    price: 220.00,
    image: 'https://placehold.co/600x400?text=Mouse',
    rating: 4.8,
    tag: 'Novo',
    stock: 25,
  },
];