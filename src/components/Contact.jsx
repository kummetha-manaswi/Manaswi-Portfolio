import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 md:py-32 border-b-2 border-[#A9C0C1] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Statement & Action */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#172323] font-normal tracking-tight mb-6">
              {contact.heading}
            </h2>
            <p className="font-sans text-lg md:text-xl text-[#172323]/85 leading-relaxed max-w-xl mb-8">
              "{contact.text}"
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#172323] text-[#F4F1EA] font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[#718B8C] transition-all shadow-sm"
              >
                <span>{contact.cta}</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 bg-[#D6E0DE] border-2 border-[#A9C0C1] p-6 md:p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs tracking-wider uppercase text-[#718B8C] mb-1">
                  EMAIL
                </p>
                <p className="font-serif text-base sm:text-lg text-[#172323] break-all font-medium select-all">
                  {contact.email}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs tracking-wider uppercase text-[#718B8C] mb-1">
                  PHONE
                </p>
                <a
                  href={`tel:${contact.phone}`}
                  className="font-mono text-base text-[#172323] hover:text-[#718B8C] transition-colors font-medium"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="pt-4 border-t border-[#A9C0C1] flex flex-col gap-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-mono tracking-wider text-[#172323] hover:text-[#718B8C] transition-colors py-1"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <LinkedinIcon className="w-4 h-4 text-[#718B8C]" />
                    LINKEDIN
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-mono tracking-wider text-[#172323] hover:text-[#718B8C] transition-colors py-1"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <GithubIcon className="w-4 h-4 text-[#718B8C]" />
                    GITHUB
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
