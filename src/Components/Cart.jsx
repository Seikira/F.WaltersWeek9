import React from 'react';
import { useCart } from './CartContext';

export const Cart = () => {
    const { cart, removeFromCart, getTotal } = useCart();
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {Object.keys(cart).length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                Object.values(cart).map((item) => (
                    <div key={item.name} className="cart-item">
                        <span>{item.name} - Quantity: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </div>
                ))
            )}
            <h3>Total: ${getTotal()}</h3>
        </div>
    );
};