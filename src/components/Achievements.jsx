import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 md:py-24 border-b border-[#A9C0C1] bg-[#D6E0DE]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#172323] font-normal">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-[#F4F1EA] border-2 border-[#A9C0C1] hover:border-[#718B8C] transition-colors shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-[#172323] mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#718B8C] tracking-wider mb-4">
                  {item.subtitle}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#172323]/90 leading-relaxed">
                  "{item.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
