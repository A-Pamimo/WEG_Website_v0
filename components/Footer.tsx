import React from 'react';
import { BRAND } from '../constants';
import { Logo } from './Logo';
import { PageView } from '../types';

export const Footer: React.FC<{ setPage: (p: PageView) => void }> = ({ setPage }) => {
  return (
    <footer className="bg-weg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
               <Logo className="h-10 w-auto text-white" showText={false} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">{BRAND.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {BRAND.tagline}<br/>
              Based in Canada.<br/>
              Serving globally.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-weg-gold text-sm font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button onClick={() => setPage('services')} className="hover:text-white transition text-left">Services</button></li>
              <li><button onClick={() => setPage('work')} className="hover:text-white transition text-left">Selected Work</button></li>
              <li><button onClick={() => setPage('insights')} className="hover:text-white transition text-left">Insights</button></li>
              <li><button onClick={() => setPage('about')} className="hover:text-white transition text-left">About</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-weg-gold text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition text-left">Privacy Policy</button></li>
              <li><button onClick={() => setPage('terms')} className="hover:text-white transition text-left">Terms of Service</button></li>
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-weg-gold text-sm font-bold uppercase tracking-wider mb-4">Connect</h4>
             <a href={`mailto:${BRAND.contactEmail}`} className="text-sm text-gray-300 hover:text-white block mb-4">
               {BRAND.contactEmail}
             </a>
             <button onClick={() => setPage('contact')} className="border border-weg-gold text-weg-gold px-4 py-2 text-sm hover:bg-weg-gold hover:text-weg-navy transition">
               Book a Consultation
             </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Precision.</p>
        </div>
      </div>
    </footer>
  );
};