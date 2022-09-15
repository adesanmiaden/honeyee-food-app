import React, { useContext } from "react";
import Modal from "../UI/Modal";
import './Cart.css';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  const cartItemRemoveHandler = (id) =>{};
  const cartItemAddHandler = (item) =>{};

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
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>Close</button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
