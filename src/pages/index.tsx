import React from 'react';
import SearchBar from './home/SearchBar';
import ProductCarousel from './home/ProductCarousel';

const products = [
  {
    name: 'Small Shoes ',
    price: 100,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    colors: ['red', 'green', 'blue']
  },
  {
    name: 'Large Jeans',
    price: 200,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490',
    colors: ['black', 'blue', 'cyan']
  },
  {
    name: 'Erin Yagger',
    price: 150,
    image: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c',
    colors: ['pink', 'yellow']
  },
  // add more products as needed...
];



function HomePage() {
  return (
    <div className='h-[100%]'>
      <div className="h-[10%]">
        <SearchBar />
      </div>
      <div className="h-[90%]">
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}

export default HomePage;
