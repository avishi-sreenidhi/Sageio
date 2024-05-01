import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import Features from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/loginPage" element={<LoginPage />} />
          <Route path ="/Signup" element={<Signup />} />
          <Route path="/Quiz" element={<Quiz />}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
