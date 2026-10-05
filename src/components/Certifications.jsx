import React from 'react';
import { ArrowUpRight, Maximize2, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ onOpenCertificateModal }) {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-14 md:py-20 border-b-2 border-[#A9C0C1] bg-[#D6E0DE]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#172323] font-normal">
            Certifications
          </h2>
        </div>

        {/* Certificate Gallery with Compact Preview Images & PDF Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-3.5 sm:p-4 bg-[#F4F1EA] border-2 border-[#A9C0C1] flex flex-col justify-between hover:border-[#718B8C] transition-colors shadow-sm"
            >
              {/* Preview image */}
              <div
                onClick={() => onOpenCertificateModal(cert.previewImage, cert.title, cert.pdfUrl)}
                className="relative cursor-pointer aspect-[16/11] max-h-[160px] overflow-hidden bg-[#172323]/5 border border-[#A9C0C1] mb-3 group"
              >
                <img
                  src={cert.previewImage}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#172323]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F4F1EA] text-[#172323] font-mono text-xs font-medium shadow-md">
                    <Maximize2 className="w-3 h-3 text-[#718B8C]" />
                    PREVIEW
                  </span>
                </div>
              </div>

              {/* Info & Action row */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#172323] leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-xs text-[#718B8C]">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#A9C0C1]">
                  <button
                    type="button"
                    onClick={() => onOpenCertificateModal(cert.previewImage, cert.title, cert.pdfUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 bg-[#A9C0C1] hover:bg-[#718B8C] text-[#172323] hover:text-[#F4F1EA] text-[11px] font-mono font-semibold border border-[#718B8C] transition-colors"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 bg-[#D6E0DE] hover:bg-[#A9C0C1] text-[#172323] text-[11px] font-mono font-medium border border-[#A9C0C1] transition-colors"
                  >
                    <FileText className="w-3 h-3" />
                    <span>PDF</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
