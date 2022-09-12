import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <>
    <header className='header'>
        <h1>Honeyee</h1>
        <HeaderCartButton/>
    </header>
    <div className='main-image'>
        <img src={mealsImage} alt=''/>
    </div>
    </>
  )
}

export default Header