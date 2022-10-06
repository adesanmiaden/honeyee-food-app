import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import './Cart.css';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const ctx = useContext(CartContext);
  const [order, setOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState('');

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) =>{
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) =>{
    ctx.addItem(item)
  };

  const handleOrder = (order) =>{
    setOrder(true)
  }

  const submitOrderHandler = async (userData) =>{
    setIsSubmitting(true);
    try{
    const response = await fetch ('https://food-order-app-dab3c-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems:ctx.items
      }),
    })
  } catch (err){
    setError(err.message);
  }

    setIsSubmitting(false);
    setDidSubmit(true);
  }

  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => (
        <CartItem 
        key={item.id} 
        name={item.name} 
        price={item.price} 
        amount={item.amount} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
        onAdd={cartItemAddHandler.bind(null, item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {order ? <Checkout onCancel={props.onHideCart} onConfirm = {submitOrderHandler}/> : 
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>Close</button>
        {hasItems && <button className="button" onClick={handleOrder}>Order</button>}
      </div>
}
    </Modal>
  );
}

export default Cart;
