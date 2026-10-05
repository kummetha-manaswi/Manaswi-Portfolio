import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b-2 border-[#A9C0C1] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Role, Headline, Statement, Candidate Name, CTA */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Role Pill */}
            <div className="mb-6">
              <span className="inline-block px-3.5 py-1.5 bg-[#A9C0C1] text-[#172323] border border-[#718B8C] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                {personalInfo.primaryRole}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] font-normal tracking-tight text-[#172323] mb-8">
              Curious about the numbers.<br />
              <span className="italic font-light text-[#718B8C]">Serious about what they mean.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-[#172323]/85 font-normal leading-relaxed max-w-2xl mb-10">
              {personalInfo.supportingText}
            </p>

            {/* Identity & Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#A9C0C1]">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-[#172323]">
                  {personalInfo.name}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#172323] text-[#F4F1EA] text-xs font-mono tracking-widest uppercase font-semibold hover:bg-[#718B8C] transition-all duration-200 shadow-sm"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D6E0DE] border border-[#A9C0C1] text-[#172323] text-xs font-mono tracking-widest uppercase font-semibold hover:bg-[#A9C0C1] transition-all duration-200"
                >
                  <span>RESUME</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Photograph (No text labels, natural composition) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Sage accent framing */}
              <div className="p-3 bg-[#D6E0DE] border-2 border-[#A9C0C1] shadow-md">
                <div className="aspect-[3/4] overflow-hidden bg-[#172323]/5">
                  <img
                    src={personalInfo.portraitUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
