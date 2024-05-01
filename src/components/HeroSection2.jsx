import React from 'react';
import sageioHero from '../assets/hero-2.png';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="bg-white text-black px-20 py-0 flex justify-between items-center mb-10"> {/* Add mt-10 to move the section higher */}
     
      <div className="illustration">
        <img src={sageioHero} alt="SageIO Hero" className="mr-64 py-1 h-80" />
      </div>
      <div className="container mx-auto bg-teal-50">
        <div className="text-left mx-1 rounded-lg border border-green-900 p-16">
          <h1 className="text-5xl py-1 px-4 tracking-tight italic mb-6">Organize. Track. Review. Learn. Grow.<br /></h1>
          <p className="text-base py-1 px-6 md:text-lg mb-4 md:mb-8">From interactive flashcards and quizzes to advanced analytics and AI-powered insights, we offer a diverse range of features tailored to suit your unique learning style and goals.</p>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
