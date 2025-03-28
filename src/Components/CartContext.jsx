import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[product.name]) {
                newCart[product.name].quantity += 1;
            } else {
                newCart[product.name] = { ...product, quantity: 1 };
            }
            return newCart;
        });
    };

    const removeFromCart = (productName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[productName];
            return newCart;
        });
    };

    const getTotal = () => {
        return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};