import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-24 border-b border-[#A9C0C1] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[#172323] font-medium mb-6">
            {about.heading}
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-[#172323] leading-relaxed font-light mb-6">
            "{about.statement}"
          </p>

          <p className="font-mono text-sm text-[#718B8C] tracking-wider">
            {about.subline}
          </p>
        </div>
      </div>
    </section>
  );
}
