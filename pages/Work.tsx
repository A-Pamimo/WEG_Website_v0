import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import { ArrowRight, X, ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const Work: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // Detail View
  if (selectedStudy) {
    return (
      <div className="min-h-screen bg-white text-weg-navy pt-24 pb-20 fade-in">
        
        {/* Sticky sub-nav for back */}
        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4 mb-12">
           <div className="max-w-[1200px] mx-auto">
             <button onClick={() => setSelectedStudy(null)} className="flex items-center gap-2 text-sm font-bold text-weg-blue hover:text-weg-navy transition-colors">
               <ChevronLeft size={16} /> Back to Client Results
             </button>
           </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6">
           <span className="text-weg-gold font-bold uppercase tracking-wider text-xs mb-4 block">{selectedStudy.category}</span>
           <h1 className="font-serif text-4xl md:text-6xl mb-8 leading-tight text-weg-navy">{selectedStudy.title}</h1>
           
           <div className="flex flex-wrap gap-4 mb-12 text-sm text-gray-500 border-y border-gray-100 py-6">
              <div className="pr-8 border-r border-gray-100">
                 <span className="block font-bold text-weg-navy">Timeline</span>
                 {selectedStudy.timeline}
              </div>
              <div className="pr-8 border-r border-gray-100">
                 <span className="block font-bold text-weg-navy">Industry</span>
                 Public Sector
              </div>
              <div>
                 <span className="block font-bold text-weg-navy">Service</span>
                 Economic Analysis
              </div>
           </div>

           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
             <h3 className="font-serif text-2xl text-weg-navy mb-4">The Challenge</h3>
             <p className="mb-12">{selectedStudy.problem}</p>

             <h3 className="font-serif text-2xl text-weg-navy mb-4">Our Approach</h3>
             <p className="mb-12">{selectedStudy.approach}</p>
             
             <div className="bg-weg-gray p-8 rounded-sm my-12 border-l-4 border-weg-navy">
                <h3 className="font-serif text-2xl text-weg-navy mb-6 mt-0">Key Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                   {selectedStudy.outcomes.map((o, i) => (
                      <div key={i}>
                        <span className="block text-4xl font-serif text-weg-navy mb-1">{o.value}</span>
                        <span className="text-sm uppercase tracking-wide text-gray-500">{o.label}</span>
                      </div>
                   ))}
                </div>
             </div>
           </div>
        </div>
      </div>
    );
  }

  // Index View
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-20 border-b border-gray-200 pb-12">
           <h1 className="font-serif text-5xl md:text-6xl text-weg-navy mb-6">Client Results</h1>
           <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
             We help organizations across sectors navigate their most critical challenges. 
             Explore our case studies to understand how we deliver defensible value.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {CASE_STUDIES.map((study) => (
             <div 
                key={study.id} 
                onClick={() => setSelectedStudy(study)}
                className="group cursor-pointer flex flex-col border-b border-gray-100 pb-12 hover:border-gray-300 transition-colors"
             >
                <div className="aspect-[16/9] overflow-hidden mb-6 relative">
                   <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{study.category}</span>
                <h2 className="font-serif text-2xl text-weg-navy mb-4 leading-tight group-hover:text-weg-blue transition-colors">{study.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {study.summary}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-bold text-weg-blue">
                   Read Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};