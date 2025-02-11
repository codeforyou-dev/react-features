import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {    
    const cartItems = useSelector((state) => state.cart.items);
console.log('cartItems', cartItems);
    return (
        <div>
            <h1>{cartItems?.length ?` Cart ${cartItems.length}` : ''}</h1>
        </div>
    );
}
export default Cart;

