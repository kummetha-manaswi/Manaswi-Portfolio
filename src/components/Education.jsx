import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-24 border-b border-[#A9C0C1] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#172323] font-normal">
            Education
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="space-y-4 max-w-4xl">
          {education.map((item) => (
            <div
              key={item.institution}
              className="p-6 bg-[#D6E0DE]/40 border border-[#A9C0C1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#D6E0DE]/70 transition-colors"
            >
              <div>
                <h3 className="font-serif text-xl text-[#172323] font-semibold">
                  {item.institution}
                </h3>
                <p className="font-sans text-sm text-[#172323]/90 mt-0.5">
                  {item.degree}
                </p>
                <p className="font-mono text-xs text-[#718B8C] mt-1">
                  {item.period}
                </p>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-[#A9C0C1] border border-[#718B8C] text-xs font-mono font-bold text-[#172323]">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
