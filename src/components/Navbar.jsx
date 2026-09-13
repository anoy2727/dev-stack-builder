import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Mobile Hamburger Icon (Left on Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center font-bold text-sm">
            DS
          </div>
          <span className="font-bold text-xl text-slate-900">Dev <span className="brand-gradient-text">Stack</span></span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
            Sign In
          </button>
          <button className="brand-gradient-bg px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:opacity-95 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3 text-sm text-gray-600">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
