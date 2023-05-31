import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

type Product = {
    name: string;
    price: number;
    image: string;
    colors: string[];
};

type ProductCarouselProps = {
    products: Product[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [current, setCurrent] = useState(0);
    const length = products.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className="h-[100%] p-4">
            <div className="relative flex items-center justify-center h-[100%]">
                <button
                    className="absolute left-0 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
                    onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
                {products.map((product, index) => {
                    const isCurrentSlide = index >= current && index < current + 4;
                    return (
                        <div className={isCurrentSlide ? 'flex justify-center items-center h-[100%] opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'} key={index}>
                            {isCurrentSlide && (
                                <div className="p-1 h-[100%] w-[70%] border rounded shadow-[0px_0px_4px_0px_#CB80FF]">
                                    <figure className='h-[80%] w-[100%] bg-red-300 overflow-hidden'>
                                        <img src={product.image} alt={product.name} className="w-[auto] h-[100%] object-cover transform transition-all duration-500 scale-150 hover:scale-100" />
                                    </figure>

                                    <div className='flex justify-between py-2 h-[15%]'>
                                        <h2 className="text-xl">{product.name}</h2>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="flex space-x-4 justify-center items-center h-[5%]">
                                        {product.colors.map((color, index) => (
                                            <div key={index} style={{ backgroundColor: color }} className="w-6 h-6 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

                <button
                    className="absolute right-0 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
                    onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default ProductCarousel