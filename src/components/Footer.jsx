import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#F4F1EA] text-[#172323]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#A9C0C1]">
          <div>
            <p className="font-serif text-2xl font-bold tracking-tight text-[#172323]">
              {personalInfo.shortName}
            </p>
            <p className="font-mono text-xs text-[#718B8C] mt-1">
              Data Analyst · Data Science · Business Intelligence
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-wider">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#718B8C] transition-colors"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#718B8C] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#718B8C] transition-colors"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D6E0DE] border border-[#A9C0C1] hover:bg-[#A9C0C1] transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP ↑</span>
            </button>
          </div>
        </div>

        <div className="pt-6 font-mono text-xs text-[#718B8C]">
          <p>© 2026 {personalInfo.name}</p>
        </div>
      </div>
    </footer>
  );
}
