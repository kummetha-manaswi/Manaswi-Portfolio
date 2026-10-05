import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SkillIcon from './SkillIcon';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#A9C0C1] bg-[#D6E0DE]/35">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#172323] font-normal">
            Skills
          </h2>
        </div>

        {/* Minimal Grouped Grid with Sage cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-[#F4F1EA] border border-[#A9C0C1] hover:border-[#718B8C] transition-colors shadow-sm"
            >
              <h3 className="font-serif text-base font-semibold text-[#172323] pb-2 mb-4 border-b border-[#A9C0C1]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D6E0DE]/50 border border-[#A9C0C1] hover:border-[#718B8C] hover:bg-[#D6E0DE] text-[#172323] text-xs font-sans font-medium transition-colors rounded-sm"
                  >
                    <SkillIcon name={item} className="w-3.5 h-3.5 text-[#172323]/80 flex-shrink-0" />
                    <span className="whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
