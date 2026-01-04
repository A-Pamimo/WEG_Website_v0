import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { BRAND } from '../constants';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate server action
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-weg-navy min-h-screen flex items-center">
      <SEO title="Contact" description="Start a conversation with World's Edge Group." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          <div className="text-white">
            <span className="text-weg-gold font-bold uppercase tracking-wider text-xs block mb-3">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Let's clear the path.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Whether you need an impact report, a strategy brief, or just better visibility into your data—start with a conversation.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-weg-gold uppercase tracking-wider mb-2">Email</h4>
                <p className="text-white text-lg">{BRAND.contactEmail}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-weg-gold uppercase tracking-wider mb-2">Office</h4>
                <p className="text-gray-300">Remote-First Studio<br />Based in Canada</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-serif text-weg-navy font-bold mb-2">Message Received</h3>
                <p className="text-weg-slate">Thank you. We will be in touch within 24 hours.</p>
                <Button variant="text" onClick={() => setStatus('idle')} className="mt-4">Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-weg-navy mb-2">Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-weg-surface border border-gray-200 focus:outline-none focus:border-weg-navy transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-weg-navy mb-2">Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-weg-surface border border-gray-200 focus:outline-none focus:border-weg-navy transition-colors" placeholder="jane@organization.org" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-weg-navy mb-2">What are you trying to solve?</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-weg-surface border border-gray-200 focus:outline-none focus:border-weg-navy transition-colors" placeholder="We need an economic impact report for..."></textarea>
                </div>
                <Button fullWidth disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </Button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Prefer a call? <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="underline text-weg-navy font-bold hover:text-weg-gold">Book time directly here.</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};