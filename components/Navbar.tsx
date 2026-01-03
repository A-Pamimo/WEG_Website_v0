import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: PageView }[] = [
    { label: 'Insights', value: 'insights' },
    { label: 'Capabilities', value: 'services' },
    { label: 'Client Results', value: 'work' },
    { label: 'About the Firm', value: 'about' },
  ];

  const handleNav = (page: PageView) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  // Logic: "Dark Theme" pages are Home and Contact (initially dark backgrounds).
  // All other pages are "Light Theme" (white backgrounds) and need dark text immediately.
  const isDarkThemePage = ['home', 'contact'].includes(currentPage);
  
  // We use the "Scrolled" style (White BG, Navy Text) if:
  // 1. We are scrolled down OR
  // 2. We are on a Light Theme page (Services, Work, etc.)
  const useSolidNav = isScrolled || !isDarkThemePage;

  // Dynamic styles
  const navClasses = useSolidNav 
    ? 'bg-white text-weg-navy shadow-sm border-b border-gray-100 py-4' 
    : 'bg-transparent text-white py-8 border-b border-white/10';

  const logoClasses = useSolidNav ? 'text-weg-navy' : 'text-white';
  const linkClasses = useSolidNav ? 'text-weg-slate hover:text-weg-blue' : 'text-white/90 hover:text-white';
  const buttonClasses = useSolidNav 
    ? 'border-weg-navy text-weg-navy hover:bg-weg-navy hover:text-white' 
    : 'border-white text-white hover:bg-white hover:text-weg-navy';

  // Mobile menu button color
  const mobileMenuColor = useSolidNav ? 'text-weg-navy' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${navClasses}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
             <Logo className="h-8 w-auto transition-colors" classNameText={logoClasses} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNav(link.value)}
                className={`text-sm font-sans font-medium tracking-wide transition-colors relative group ${linkClasses}`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-weg-gold transition-all duration-300 group-hover:w-full ${currentPage === link.value ? 'w-full' : ''}`}></span>
              </button>
            ))}
            
            <div className={`h-4 w-px bg-current opacity-20 mx-2 ${useSolidNav ? 'text-gray-300' : 'text-white'}`}></div>
            
            <button 
              onClick={() => handleNav('contact')} 
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${buttonClasses}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${mobileMenuColor} focus:outline-none`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNav(link.value)}
              className="text-left text-lg font-serif text-weg-navy py-4 border-b border-gray-100 last:border-0 hover:text-weg-gold"
            >
              {link.label}
            </button>
          ))}
          <button
             onClick={() => handleNav('contact')}
             className="mt-6 bg-weg-navy text-white text-center py-4 font-bold uppercase tracking-wider text-sm hover:bg-weg-blue"
          >
            Contact the Firm
          </button>
        </div>
      )}
    </nav>
  );
};