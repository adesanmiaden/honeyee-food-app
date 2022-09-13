import React, { useRef, useState } from 'react';
import './MealItemForm.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const submitHandler = (event)=> {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
  return (
    <form className='form' onSubmit={submitHandler}>
        <Input ref= {amountRef} label='Amount' input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  )
}

export default MealItemForm