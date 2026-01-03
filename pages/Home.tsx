import React from 'react';
import { ArrowRight, ChevronRight, PieChart, Users, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { SERVICES, INSIGHTS } from '../constants';
import { PageView } from '../types';

interface HomeProps {
  setPage: (page: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="w-full">
      
      {/* HERO SECTION: Corporate Editorial */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
             alt="Architecture" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-weg-navy/80 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-weg-navy via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-20">
           <div className="max-w-5xl fade-in">
              <span className="inline-block py-1 px-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6">
                Strategic Advisory
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-none text-white mb-8 text-balance">
                Turning data into <span className="text-white">decisions.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-weg-gold pl-6 text-balance">
                We help today's leaders secure funding, align stakeholders, and silence skeptics with rigorous economic analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Use 'white' variant to guarantee Navy text on White button */}
                <Button onClick={() => setPage('services')} variant="white">
                  Our Capabilities
                </Button>
                {/* Use 'outline-white' variant for White text/border */}
                <Button onClick={() => setPage('work')} variant="outline-white">
                  Client Impact
                </Button>
              </div>
           </div>
        </div>
      </section>

      {/* FEATURED INSIGHTS STRIP (McKinsey Style) */}
      <section className="bg-weg-gray py-20 px-6 border-b border-gray-200">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-weg-navy font-serif text-3xl md:text-4xl mb-2">Latest Thinking</h2>
                  <p className="text-weg-slate">Perspectives on strategy and economic measurement.</p>
               </div>
               <button onClick={() => setPage('insights')} className="hidden md:flex items-center text-weg-blue font-bold text-sm hover:underline">
                  View all insights <ArrowRight className="ml-2 w-4 h-4" />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {INSIGHTS.slice(0, 3).map((insight, idx) => (
                 <div key={idx} className="group flex flex-col bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-weg-navy cursor-pointer" onClick={() => setPage('insights')}>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">{insight.category}</span>
                    <h3 className="font-serif text-xl text-weg-navy font-bold mb-4 group-hover:text-weg-blue transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>
                    <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4">
                      <span className="text-xs font-medium text-gray-400">By {insight.author}</span>
                      <span className="text-weg-blue text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Read <ChevronRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* THE FIRM / WHO WE SERVE */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-5">
              <div className="aspect-[3/4] relative">
                 <img 
                   src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                   alt="Meeting" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute -bottom-8 -right-8 bg-weg-navy text-white p-8 max-w-xs shadow-2xl hidden md:block">
                    <p className="font-serif text-2xl italic">"Accuracy is not enough. You need an argument."</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-7">
              <span className="text-weg-gold font-bold uppercase tracking-wider text-xs mb-4 block">The Firm</span>
              <h2 className="font-serif text-4xl md:text-5xl text-weg-navy mb-8 leading-tight">
                For the ambitious operator in a skeptical world.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                 <p>
                   World's Edge Group serves organizations that face complex stakeholder environments. Our clients are typically public sector leaders, non-profit executives, and boards who need to move from "intuition" to "evidence."
                 </p>
                 <p>
                   We do not provide generic advice. We build the economic models, dashboards, and decision briefs that allow you to defend your strategy and secure your budget.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                 <div>
                    <h4 className="font-bold text-weg-navy mb-2 flex items-center gap-2"><PieChart size={18}/> Economic Impact</h4>
                    <p className="text-sm text-gray-500">Defensible modeling for funding applications and board reporting.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-weg-navy mb-2 flex items-center gap-2"><FileText size={18}/> Decision Briefs</h4>
                    <p className="text-sm text-gray-500">Structured memos that clarify tradeoffs for executive leadership.</p>
                 </div>
              </div>

              <div className="mt-10">
                 <Button onClick={() => setPage('about')} variant="secondary">About the Firm</Button>
              </div>
           </div>
        </div>
      </section>

      {/* CAPABILITIES / INDUSTRIES */}
      <section className="bg-weg-navy text-white py-24 px-6">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-t border-white/20 pt-12">
               <div className="lg:col-span-1">
                  <h3 className="font-serif text-3xl">Capabilities</h3>
               </div>
               <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SERVICES.map((s) => (
                    <div key={s.id} className="group cursor-pointer" onClick={() => setPage('services')}>
                       <h4 className="text-xl font-bold mb-3 flex items-center justify-between border-b border-white/20 pb-2 group-hover:text-weg-gold transition-colors">
                         {s.title} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5"/>
                       </h4>
                       <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CALL TO ACTION (Corporate Style) */}
      <section className="bg-white py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-weg-navy mb-6">Initialize a Project</h2>
            <p className="text-gray-600 mb-8">
              Discuss your requirements with our principal team.
            </p>
            <Button onClick={() => setPage('contact')}>Contact Us</Button>
         </div>
      </section>
    </div>
  );
};