import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg brand-gradient-bg flex items-center justify-center font-bold text-xs">
              DS
            </div>
            <span className="font-bold text-lg text-slate-900">Dev <span className="brand-gradient-text">Stack</span></span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-xs font-semibold text-gray-500">
            <a href="#github" className="hover:text-slate-900">GitHub</a>
            <a href="#twitter" className="hover:text-slate-900">Twitter</a>
            <a href="#linkedin" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>

        {/* Link Groups */}
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-gray-600">Privacy</a>
          <a href="#terms" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
