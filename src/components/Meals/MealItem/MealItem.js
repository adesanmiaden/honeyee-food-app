import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import './MealItem.css';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
    const ctx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        ctx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price:props.price
        })
    };

  return (
    <li className="meal">
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{props.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem