import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Turning messy realities into clear decisions. WEG helps mission-driven organizations with economic impact reporting, strategy briefs, and analytics.",
  canonical 
}) => {
  const fullTitle = `${title} | World's Edge Group`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};
