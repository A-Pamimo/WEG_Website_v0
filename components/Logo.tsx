import React from 'react';

interface LogoProps {
  className?: string;
  classNameText?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8 w-auto", 
  classNameText = "",
  showText = true 
}) => {
  return (
    <div className="flex items-center gap-3">
      <svg 
        viewBox="0 0 100 100" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        aria-label="World's Edge Group Logo"
      >
        {/* The Foundation Line */}
        <rect x="10" y="82" width="80" height="8" />
        
        {/* The Ascending W - Peak 1 */}
        <path d="M15 20 L35 72 L50 35 L15 20Z" />
        
        {/* The Ascending W - Peak 2 (The Edge) */}
        <path d="M50 35 L65 72 L90 10 L50 35Z" />
      </svg>
      
      {showText && (
        <span className={`font-serif text-xl font-bold tracking-tight leading-none ${classNameText}`}>
          WEG
        </span>
      )}
    </div>
  );
};