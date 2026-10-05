import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Maximize2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCaseStudy({ project, onOpenModal }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentImage = project.gallery[selectedImageIndex] || project.gallery[0];

  const handleInspect = () => {
    onOpenModal(project.gallery, selectedImageIndex);
  };

  return (
    <article className="border-t-2 border-[#A9C0C1] pt-14 lg:pt-20">
      {/* Project Meta Header: Number, Title, Subtitle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 items-start">
        
        {/* Number */}
        <div className="lg:col-span-2">
          <span className="font-mono text-3xl sm:text-4xl text-[#718B8C] font-semibold block">
            {project.number}
          </span>
        </div>

        {/* Title, Subtitle, Description */}
        <div className="lg:col-span-7">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#172323] font-normal tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-[#718B8C] tracking-wider mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
            {project.subtitle}
          </p>
          <p className="font-sans text-base sm:text-lg text-[#172323]/90 leading-relaxed font-normal">
            "{project.description}"
          </p>
        </div>

        {/* Project Links Column */}
        <div className="lg:col-span-3 flex lg:flex-col items-start gap-3 pt-2">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#172323] text-[#F4F1EA] text-xs font-mono font-semibold tracking-wider hover:bg-[#718B8C] transition-colors shadow-sm"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A9C0C1] border border-[#718B8C] text-[#172323] hover:bg-[#718B8C] hover:text-[#F4F1EA] text-xs font-mono font-semibold tracking-wider transition-colors shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{project.id === 'nyc-collision-analysis' ? 'GITHUB' : 'VIEW PROJECT'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.powerBiRepo && (
            <a
              href={project.powerBiRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6E0DE] border border-[#A9C0C1] text-[#172323] text-xs font-mono font-semibold tracking-wider hover:bg-[#A9C0C1] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>POWER BI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>

      {/* Real Visual Frame with Sage borders - reduced height */}
      <div className="mb-8 bg-[#D6E0DE]/40 border-2 border-[#A9C0C1] p-2.5 sm:p-3.5">
        {/* Main Display Image */}
        <div
          onClick={handleInspect}
          className="relative group cursor-pointer aspect-[16/9] sm:aspect-[16/8.5] max-h-[380px] md:max-h-[400px] w-full overflow-hidden bg-[#172323]/5 border border-[#A9C0C1]"
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="w-full h-full object-contain bg-[#172323]/5 group-hover:scale-[1.01] transition-transform duration-300"
            loading="lazy"
          />

          {/* Hover inspect overlay button */}
          <div className="absolute inset-0 bg-[#172323]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4F1EA] text-[#172323] font-mono text-xs font-semibold tracking-wider shadow-lg border border-[#A9C0C1]">
              <Maximize2 className="w-4 h-4 text-[#718B8C]" />
              EXPAND VIEW
            </span>
          </div>

          <div className="absolute bottom-3 left-3 bg-[#172323]/85 text-[#F4F1EA] px-3 py-1 text-xs font-mono">
            {currentImage.title}
          </div>
        </div>

        {/* Thumbnail Selector Bar */}
        <div className="mt-3 pt-3 border-t border-[#A9C0C1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#718B8C]">
            {currentImage.subtitle}
          </p>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {project.gallery.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className={`px-3 py-1.5 text-xs font-mono font-medium tracking-wider transition-all border ${
                  idx === selectedImageIndex
                    ? 'bg-[#172323] text-[#F4F1EA] border-[#172323]'
                    : 'bg-[#F4F1EA] text-[#172323] border-[#A9C0C1] hover:bg-[#A9C0C1]/50'
                }`}
              >
                VIEW {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Metrics (AI Fraud Guard) */}
      {project.metrics && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 bg-[#D6E0DE] border border-[#A9C0C1] text-center sm:text-left"
            >
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#172323]">
                {metric.value}
              </p>
              <p className="font-mono text-[11px] tracking-wider uppercase text-[#718B8C] mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Visual Workflow Journey (Project 01) */}
      {project.workflow && (
        <div className="mb-8 p-4 bg-[#D6E0DE]/40 border border-[#A9C0C1]">
          <div className="flex flex-wrap items-center gap-2">
            {project.workflow.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1 bg-[#F4F1EA] border border-[#A9C0C1] text-xs font-mono font-semibold text-[#172323]">
                  {step}
                </span>
                {idx < project.workflow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#718B8C]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Key Findings (Project 02) */}
      {project.findings && (
        <div className="mb-8 p-5 bg-[#D6E0DE]/40 border border-[#A9C0C1]">
          <p className="font-mono text-xs text-[#718B8C] tracking-widest uppercase mb-3">
            PROJECT FINDINGS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.findings.map((finding) => (
              <div
                key={finding}
                className="p-3 bg-[#F4F1EA] border border-[#A9C0C1] flex items-start gap-2.5 text-xs font-sans text-[#172323]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#718B8C] mt-1.5 flex-shrink-0"></div>
                <p className="leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dashboard Pages (Project 02 and 03) */}
      {project.dashboardPages && (
        <div className="mb-8 p-4 bg-[#D6E0DE]/30 border border-[#A9C0C1]">
          <div className="flex flex-wrap gap-2">
            {project.dashboardPages.map((page) => (
              <span
                key={page}
                className="px-3 py-1 bg-[#F4F1EA] border border-[#A9C0C1] text-xs font-mono text-[#172323]"
              >
                {page}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* What I worked on & Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#A9C0C1]">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs text-[#718B8C] tracking-widest uppercase mb-3">
            WHAT I WORKED ON
          </p>
          <ul className="space-y-2">
            {project.workPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#172323]/90 leading-relaxed">
                <span className="font-mono text-[#718B8C] text-xs mt-0.5">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="font-mono text-xs text-[#718B8C] tracking-widest uppercase mb-2">
            TOOLS
          </p>
          <p className="font-mono text-sm text-[#172323] font-semibold mb-2">
            {project.tools}
          </p>
          {project.supportingSkills && (
            <p className="font-mono text-xs text-[#718B8C]">
              {project.supportingSkills}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
