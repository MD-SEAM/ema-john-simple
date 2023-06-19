import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;