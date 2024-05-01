import React from 'react';
import Button from './Button';
import { smoothScroll } from '../utils/scroll.js'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-emerald-200 text-black fixed top-0 w-full px-10 py-3'>
      <div className='container-fluid'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src="/src/assets/sageio-logo.png" alt="logo" className="h-9 mr-3"/>
            <Link to="/">
            <span className= "font-bold italic text-3xl tracking-tight">S A G E R Y </span>
            </Link>
          </div>
          <nav>
            <ul className='flex space-x-6 items-center'>
              <li><a href='#home' className='hover:text-green-800' onClick={smoothScroll}>Home</a></li>
              <li><a href='#features' className='hover:text-green-800' onClick={smoothScroll}>Features</a></li>
              <li><a href='#about' className='hover:text-green-800' onClick={smoothScroll}>About</a></li>
              <li><a href='#contact' className='hover:text-green-800' onClick={smoothScroll}>Contact</a></li>
            </ul>
          </nav>
          <div>
            <Link to="/Signup">
              <Button text="Sign Up" className="hover:underline text-green-800" />
            </Link>
            <Link to="/loginPage">
              <Button text="Login" className="hover:underline text-green-800" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
