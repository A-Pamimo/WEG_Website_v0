import React from 'react';
import { BRAND } from '../constants';
import { Button } from '../components/Button';
import { PageView } from '../types';

export const About: React.FC<{ setPage: (page: PageView) => void }> = ({ setPage }) => {
  return (
    <div className="pt-24 pb-20 bg-weg-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center fade-in">
           <h1 className="font-serif text-4xl md:text-5xl text-weg-navy font-semibold mb-6">
            The view from the edge.
           </h1>
           <p className="text-xl text-weg-slate leading-relaxed max-w-2xl mx-auto">
             We are named World's Edge because that is where the map ends and the real work begins.
           </p>
        </div>

        <div className="bg-white p-8 md:p-12 border border-weg-border shadow-sm mb-16 fade-in">
          <h2 className="font-serif text-2xl text-weg-navy font-bold mb-6">Our Philosophy</h2>
          <div className="space-y-6 text-weg-slate text-lg leading-relaxed">
            <p>
              Most organizations have too much data and too little insight. They are paralyzed by dashboards that nobody reads and reports that sit on shelves.
            </p>
            <p>
              We believe that <span className="font-bold text-weg-navy">clarity is a choice.</span> It requires the courage to cut the noise, focus on the few metrics that drive actual change, and tell a story that brings stakeholders along for the ride.
            </p>
            <p>
              We don't just calculate impact; we craft the argument for your future.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center fade-in">
           <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-weg-navy relative">
                {/* Placeholder for Founder Photo */}
                <img 
                  src="https://picsum.photos/id/338/600/800" 
                  alt="Pamimo Akinjide" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-xl font-bold">Pamimo Akinjide</p>
                  <p className="text-xs text-weg-gold uppercase tracking-wider">Founder & Principal</p>
                </div>
              </div>
           </div>
           <div className="w-full md:w-2/3">
             <h3 className="font-serif text-2xl text-weg-navy font-bold mb-4">Meet the Founder</h3>
             <p className="text-weg-slate mb-4">
               Pamimo founded World's Edge Group to bridge the gap between rigorous economic analysis and the human realities of leadership. 
             </p>
             <p className="text-weg-slate mb-6">
               With a background in strategy consulting and public sector analytics, Pamimo realized that the most "accurate" reports were often the least useful. WEG was built to fix that - delivering consulting-grade strategy with a boutique, human touch.
             </p>
             <div className="flex gap-4">
                <Button onClick={() => setPage('contact')}>Work with Pamimo</Button>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center text-weg-navy font-bold text-sm hover:text-weg-gold">
                  LinkedIn &rarr;
                </a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};