import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center" id="home">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="brand-gradient-bg px-6 py-3 rounded-xl font-medium shadow-md hover:opacity-95 transition-all">
            Explore Technologies
          </button>
          <button className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img 
          src="/banner-stack.png" 
          alt="Dev Stack 3D Architecture" 
          className="w-full max-w-md object-contain drop-shadow-xl animate-pulse-slow"
        />
      </div>
    </section>
  );
}
