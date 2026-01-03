import React from 'react';
import { SERVICES } from '../constants';
import { Button } from '../components/Button';
import { PageView } from '../types';

export const Services: React.FC<{ setPage: (page: PageView) => void }> = ({ setPage }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-weg-navy mb-8">
            Our Expertise
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We operate at the intersection of economic analysis and executive strategy. We do not do "general consulting." We solve specific, high-stakes problems.
          </p>
        </div>

        <div className="space-y-0">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-20 ${idx !== SERVICES.length -1 ? 'border-b border-gray-100' : ''}`}>
               <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-weg-gold font-bold uppercase tracking-wider text-xs mb-4">0{idx + 1} / {service.title}</span>
                  <h2 className="font-serif text-4xl text-weg-navy mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button variant="outline" onClick={() => setPage('contact')}>
                    Discuss Requirements
                  </Button>
               </div>
               
               <div className={`bg-weg-surface p-12 rounded-sm ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-bold text-weg-navy mb-6">Typical Deliverables</h4>
                  <ul className="space-y-4">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="mr-3 text-weg-gold">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                     <p className="text-sm italic text-gray-500">
                       "Best in class for organizations needing rigorous defense of their strategy."
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="bg-weg-navy text-white p-12 md:p-24 text-center mt-20 rounded-sm">
           <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to move forward?</h2>
           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
             Schedule a consultation with our principal team. No sales team, just experts.
           </p>
           <Button variant="primary" className="bg-white text-weg-navy hover:bg-weg-gold" onClick={() => setPage('contact')}>
             Book a Consultation
           </Button>
        </div>

      </div>
    </div>
  );
};