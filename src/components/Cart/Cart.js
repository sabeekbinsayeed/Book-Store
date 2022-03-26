import React from 'react';

const Cart = (props) => {
    const { name } = props.cart;

    return (
        <div>
            <h1>{name}</h1>


        </div>
    );
};

export default Cart;