import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { INSIGHTS } from '../constants';
import { BlogPost } from '../types';
import { ChevronLeft, Clock, Tag } from 'lucide-react';
import { Button } from '../components/Button';

export const Insights: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Helper to parse inline bolding like **text**
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-weg-navy">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Single Post View
  if (selectedPost) {
    return (
      <div className="pt-24 pb-20 bg-white min-h-screen fade-in">
        <SEO title={selectedPost.title} description={selectedPost.excerpt} />
        {/* Sticky Back Button */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4 mb-12">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-sm font-bold text-weg-blue hover:text-weg-navy transition-colors">
              <ChevronLeft size={16} /> Back to Insights
            </button>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
              <span className="flex items-center gap-1"><Tag size={12} /> {selectedPost.category}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1"><Clock size={12} /> {selectedPost.readTime}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-weg-navy leading-tight mb-6">
              {selectedPost.title}
            </h1>

            {/* Author Tag */}
            <div className="flex justify-center items-center gap-2 mb-8 text-sm">
              <span className="text-gray-500">Authored by</span>
              <span className="font-bold text-weg-navy border-b border-weg-gold pb-0.5">{selectedPost.author}</span>
            </div>

            <p className="text-xl text-gray-500 font-serif italic">
              {selectedPost.excerpt}
            </p>
          </div>

          <div className="w-20 h-1 bg-weg-gold mx-auto mb-12"></div>

          {/* Content */}
          <div className="prose prose-lg prose-slate mx-auto font-sans leading-relaxed text-weg-slate">
            {(() => {
              const lines = selectedPost.content.split('\n').map(l => l.trim()).filter(l => l);
              const elements: JSX.Element[] = [];
              let i = 0;

              while (i < lines.length) {
                const line = lines[i];

                // Headers (###)
                if (line.startsWith('###')) {
                  elements.push(
                    <h3 key={`h3-${i}`} className="text-2xl font-serif text-weg-navy font-bold mt-10 mb-4">
                      {line.replace('###', '').trim()}
                    </h3>
                  );
                  i++;
                }
                // Bullet points (* ) - group consecutive bullets
                else if (line.startsWith('* ')) {
                  const bullets: string[] = [];
                  while (i < lines.length && lines[i].startsWith('* ')) {
                    bullets.push(lines[i].replace('* ', ''));
                    i++;
                  }
                  elements.push(
                    <ul key={`ul-${i}`} className="list-disc pl-5 mb-6 space-y-2">
                      {bullets.map((bullet, bi) => (
                        <li key={bi}>{renderText(bullet)}</li>
                      ))}
                    </ul>
                  );
                }
                // Numbered lists (1. , 2. ) - group consecutive numbers
                else if (/^\d+\./.test(line)) {
                  const items: string[] = [];
                  while (i < lines.length && /^\d+\./.test(lines[i])) {
                    items.push(lines[i]);
                    i++;
                  }
                  elements.push(
                    <ol key={`ol-${i}`} className="list-decimal pl-5 mb-6 space-y-2">
                      {items.map((item, ii) => (
                        <li key={ii} className="font-medium text-weg-navy">
                          {renderText(item.replace(/^\d+\.\s*/, ''))}
                        </li>
                      ))}
                    </ol>
                  );
                }
                // Regular paragraph with bold support
                else {
                  elements.push(
                    <p key={`p-${i}`} className="mb-6">
                      {renderText(line)}
                    </p>
                  );
                  i++;
                }
              }

              return elements;
            })()}
          </div>

          {/* Footer of Article */}
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <h4 className="font-serif text-2xl text-weg-navy mb-6">Want to discuss this further?</h4>
            <Button variant="outline" onClick={() => window.location.hash = 'contact'}>Start a Conversation</Button>
          </div>
        </article>
      </div>
    );
  }

  // List View
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <SEO title="Field Notes" description="Observations on strategy, data culture, and decision making." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 fade-in">
          <span className="text-weg-gold font-bold uppercase tracking-wider text-xs block mb-3">Thinking</span>
          <h1 className="font-serif text-4xl md:text-5xl text-weg-navy font-semibold mb-6">
            Field notes.
          </h1>
          <p className="text-xl text-weg-slate leading-relaxed">
            Observations on strategy, data culture, and decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {INSIGHTS.map((post) => (
            <article key={post.id} className="group cursor-pointer fade-in flex flex-col h-full" onClick={() => setSelectedPost(post)}>
              <div className="border-t border-weg-gold pt-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 text-xs text-gray-500 uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl text-weg-navy font-bold mb-3 group-hover:text-weg-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-weg-slate text-sm mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-400">By {post.author}</span>
                  <span className="text-xs font-bold text-weg-navy underline decoration-transparent group-hover:decoration-weg-navy underline-offset-4 transition-all">
                    Read Article
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};