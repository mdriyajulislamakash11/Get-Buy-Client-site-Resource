import React from 'react';
import useCart from '../../hook/useCart';

const Cart = () => {

    const [cart ] = useCart();
    console.log(cart.length)




    return (
        <div>
            
        </div>
    );
};

export default Cart;