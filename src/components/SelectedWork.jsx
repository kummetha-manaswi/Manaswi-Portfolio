import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCaseStudy from './ProjectCaseStudy';

export default function SelectedWork({ onOpenModal }) {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-20 md:py-28 border-b-2 border-[#A9C0C1] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-14 pb-4 border-b border-[#A9C0C1]">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#172323] font-normal">
            Selected Work
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <ProjectCaseStudy
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
