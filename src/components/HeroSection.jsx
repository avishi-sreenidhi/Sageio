import React from 'react';
import sageioHero from '../assets/hero.gif';
import Button from './Button'; // Import the Button component
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="bg-slate-50 text-black py-0 mt-20 mb-1 px-20 flex justify-between items-center">
      <div className="container mx-auto bg-teal-50 mb-0">
        <div className="text-left mx-1 rounded-lg border border-green-900 p-16">
          <h1 className="text-5xl py-1 px-4 tracking-tight md:text-8xl font-semibold italic mb-2 md:mb-4">Welcome<br />to sagery!</h1>
          <p className="text-base py-1 px-6 md:text-lg mb-4 md:mb-8">All your learning tools at your fingertips!</p>
          <Link to="/Quiz">
          <Button text="GET STARTED!" className="bg-green-600 text-white py-auto mx-6 -my-4 px-8 hover:bg-green-800" />
          </Link>
        </div>
      </div>
      <div className="illustration">
        <img src={sageioHero} alt="SageIO Hero" className="mr-64 py-1" />
      </div>
    </section>
  );
};

export default HeroSection;


