"use client";

import React, { useState } from 'react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
            Sx
          </span>
          <div>
            <p className="text-lg font-semibold text-slate-900">SamvadX Systems</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              AI Conversations
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-900 transition">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-4 py-2 text-white shadow-md transition hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden border-t border-slate-200 bg-white/95 backdrop-blur transition ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="hover:text-slate-900 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="rounded-full bg-indigo-600 px-4 py-2 text-center text-white shadow-md transition hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
