import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';

function Header() {
  return (
    <>
    <header className='header'>
        <h1>Honeyee</h1>
        <button>Cart</button>
    </header>
    <div className='main-image'>
        <img src={mealsImage} alt=''/>
    </div>
    </>
  )
}

export default Header