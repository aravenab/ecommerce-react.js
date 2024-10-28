import React from 'react';

const CartWidget = ({counter}) => {
    return (
       <div className='d-flex align-items-center'>
        <img src='./carrito-de-compras.png' alt='cart' className='cartIcon img-fluid' ></img>
        <p className='cartCounter'>{counter}</p>
       </div>
    );
};
export default CartWidget;