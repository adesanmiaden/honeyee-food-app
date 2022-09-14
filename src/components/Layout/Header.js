import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
    <header className='header'>
        <h1>Honeyee</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
    </header>
    <div className='main-image'>
        <img src={mealsImage} alt=''/>
    </div>
    </>
  )
}

export default Header