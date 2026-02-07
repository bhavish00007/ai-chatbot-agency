"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Samvad Systems</h1>
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
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0">
                <div className="absolute -top-32 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
                <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
            </div>
            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-24 text-center md:flex-row md:text-left">
                <div className="max-w-2xl space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-100">
                        Next-gen AI Chatbots
                    </span>
                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                        Transform your customer experience with conversational AI.
                    </h1>
                    <p className="text-base text-slate-200 md:text-lg">
                        Launch a brand-aligned chatbot in days. Automate support, qualify leads,
                        and build trust with always-on experiences.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#contact"
                            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                        >
                            Get Started
                        </a>
                        <a
                            href="#chatdemo"
                            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                            Watch Demo
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-200">
                        <div>
                            <p className="text-2xl font-semibold text-white">98%</p>
                            <p>Resolution rate</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-white">24/7</p>
                            <p>Instant responses</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-white">3x</p>
                            <p>Lead capture</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-6">
                    <div className="rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-900/60 backdrop-blur animate-float">
                        <div
                            className={`cursor-pointer ${isClicked ? 'animate-ping' : 'animate-bounce'}`}
                            onClick={handleClick}
                        >
                            <img
                                src="/chatbot-illustration.jpg"
                                alt="Chatbot Illustration"
                                className={`h-64 w-64 rounded-3xl object-cover transition-transform duration-300 md:h-80 md:w-80 ${
                                    isClicked ? 'scale-110' : 'hover:scale-105'
                                }`}
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-left text-sm text-slate-200">
                        <p className="font-semibold text-white">“We cut response time by 70%.”</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Navbar, Hero };
