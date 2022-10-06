import React, { useRef, useState } from 'react';
import './Checkout.css';

function Checkout(props) {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty=(value) => value.trim() === '';
    const isFiveChars =(value) => value.trim().length === 5;

        const [formInputsValidity, setFormInputsValidity] = useState({
          name: true,
          street: true,
          city: true,
          postalCode: true,
        });      

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
    
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostalCode);

        const formIsValid = enteredPostalIsValid && enteredCityIsValid && enteredStreetIsValid && enteredNameIsValid;

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
          });

          if (!formIsValid) {
            return;
          }    
        
          props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
          });
    }
  
    const nameControlClasses = `control ${
      formInputsValidity.name ? '' : 'invalid'
    }`;
    const streetControlClasses = `control ${
      formInputsValidity.street ? '' : 'invalid'
    }`;
    const postalCodeControlClasses = `control ${
      formInputsValidity.postalCode ? '' : 'invalid'
    }`;
    const cityControlClasses = `control ${
      formInputsValidity.city ? '' : 'invalid'
    }`;

  return (
    <form onSubmit={confirmHandler} className='form'>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='name'>Street</label>
            <input type='text' id='name' ref={streetInputRef}/>
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor='name'>Postal Code</label>
            <input type='text' id='name' ref={postalInputRef}/>
            {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='name'>City</label>
            <input type='text' id='name' ref={cityInputRef}/>
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className='actions'>
        <button onClick={props.onCancel}>Cancel</button>
        <button className='submit'>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout