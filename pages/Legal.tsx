import React from 'react';
import { PageView } from '../types';

interface LegalProps {
  page: 'privacy' | 'terms';
}

export const Legal: React.FC<LegalProps> = ({ page }) => {
  const isPrivacy = page === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const updated = 'October 24, 2023';

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-weg-navy mb-6">{title}</h1>
        <p className="text-gray-500 mb-12">Last Updated: {updated}</p>

        <div className="prose prose-lg text-weg-slate font-sans">
          {isPrivacy ? (
            <>
              <h3>1. Data Collection</h3>
              <p>
                World's Edge Group ("we", "us") collects minimal information required to facilitate our consulting engagements. 
                This includes contact information provided via our inquiry forms and basic usage analytics of this website to improve performance.
              </p>
              <h3>2. Use of Information</h3>
              <p>
                We do not sell, trade, or rent your personal identification information to others. 
                We use the information we collect to respond to service inquiries, send requested proposals, and process contractual agreements.
              </p>
              <h3>3. Client Confidentiality</h3>
              <p>
                As a strategy firm, we treat all client communications as strictly confidential. 
                We do not disclose the existence of a client relationship without express written permission.
              </p>
            </>
          ) : (
            <>
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing this website, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <h3>2. Intellectual Property</h3>
              <p>
                All content on this website, including methodology frameworks, whitepapers, and brand assets, is the property of World's Edge Group 
                and is protected by copyright laws. You may not reproduce our frameworks for commercial consulting use.
              </p>
              <h3>3. Limitation of Liability</h3>
              <p>
                The insights provided on this website are for general informational purposes. 
                World's Edge Group is not liable for business decisions made based solely on the content of our public blog posts.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};