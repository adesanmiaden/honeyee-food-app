import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const ctx = useContext(CartContext);
    const btnClasses = `button ${btnIsHighlighted ? 'bump' : ''}`;

    const {items} = ctx

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
        <span>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className='badge'>{ctx.items.reduce((acc, item) => acc+item.amount, 0)}</span>
    </button>
  )
}

export default HeaderCartButton