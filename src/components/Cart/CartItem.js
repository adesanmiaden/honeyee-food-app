import React from 'react';
import './CartItem.css';

function CartItem(props) {
  return (
    <li className='cart-item'>
    <div>
      <h2>{props.name}</h2>
      <div className='summary-1'>
        <span className='price'>{props.price.toFixed(2)}</span>
        <span className='amount'>x{props.amount}</span>
      </div>
    </div>
    <div className='actions'>
      <button onClick={props.onRemove}>−</button>
      <button onClick={props.onAdd}>+</button>
    </div>
  </li>
  )
}

export default CartItem