import React from 'react';
import { useCart } from './CartContext';

const products = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Headphones', price: 99.99 },
    { name: 'Mouse', price: 29.99 }
];

export const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <div className="products">
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.name} className="product-card">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};
