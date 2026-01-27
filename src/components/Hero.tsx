"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">AI Chatbot Agency</h1>
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex space-y-3 md:space-y-0 md:space-x-6 absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-blue-600 md:bg-transparent w-full md:w-auto p-4 md:p-0`}>
          <li><a href="#features" className="hover:text-gray-200 transition block">Features</a></li>
          <li><a href="#pricing" className="hover:text-gray-200 transition block">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-gray-200 transition block">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-gray-200 transition block">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 600);
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 py-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Transform Your Customer Experience</h1>
            <p className="text-base md:text-lg mb-8 max-w-2xl">Leverage the power of AI chatbots to engage your customers 24/7.</p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mb-8">
                <a href="#contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">Get Started</a>
                <a href="#chatdemo" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition">Watch Demo</a>
            </div>
            <div className={`mt-10 ${isClicked ? 'animate-ping' : 'animate-bounce'} cursor-pointer`} onClick={handleClick}>
                <img 
                  src="/chatbot-illustration.jpg" 
                  alt="Chatbot Illustration" 
                  className={`w-64 md:w-80 h-64 md:h-80 mx-auto drop-shadow-lg rounded-full object-cover transition-transform duration-300 ${isClicked ? 'scale-110' : 'hover:scale-105'}`}
                />
            </div>
        </section>
    );
};

export { Navbar, Hero };