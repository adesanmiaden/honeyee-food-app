import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
  return (
    <button className='button' onClick={props.onShowCart}>
        <span>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className='badge'>{ctx.items.reduce((acc, item) => acc+item.amount, 0)}</span>
    </button>
  )
}

export default HeaderCartButton