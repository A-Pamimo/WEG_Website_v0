import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'white' | 'outline-white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Professional, clean, authoritative
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const variants = {
    // Default Dark Blue
    primary: "bg-weg-navy text-white hover:bg-weg-gold hover:text-weg-navy shadow-sm hover:shadow-md",
    // White Background, Dark Border
    secondary: "bg-white border border-weg-border text-weg-navy hover:border-weg-navy hover:bg-weg-surface",
    // Transparent Background, Dark Border
    outline: "border border-current text-weg-navy hover:text-weg-gold hover:border-weg-gold",
    // Text Link
    text: "text-weg-navy hover:text-weg-gold p-0 justify-start underline decoration-transparent hover:decoration-weg-gold underline-offset-4",
    // White Button (for Dark Backgrounds) - explicitly dark text
    white: "bg-white text-weg-navy hover:bg-gray-100 shadow-md",
    // White Outline (for Dark Backgrounds) - explicitly white text
    "outline-white": "border border-white text-white hover:bg-white/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // Helper to ensure we don't crash if an invalid variant is passed, defaulting to primary
  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${selectedVariant} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};