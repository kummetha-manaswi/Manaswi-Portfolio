import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, ArrowUpRight } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, images, currentIndex, onIndexChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#172323]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#F4F1EA] border-2 border-[#A9C0C1] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#A9C0C1] bg-[#D6E0DE]/40">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-sm sm:text-base font-semibold text-[#172323] truncate max-w-md">
              {current.title}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            {images.length > 1 && (
              <span className="font-mono text-xs text-[#718B8C]">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            {current.pdfUrl && (
              <a
                href={current.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-[#A9C0C1] hover:bg-[#718B8C] text-[#172323] hover:text-[#F4F1EA] text-xs font-mono font-semibold border border-[#718B8C] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>OPEN PDF</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#172323] hover:text-[#718B8C] hover:bg-[#D6E0DE] transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 bg-[#172323]/5 min-h-[300px] max-h-[72vh] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[68vh] w-auto max-w-full object-contain mx-auto shadow-md"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#F4F1EA] hover:bg-[#D6E0DE] text-[#172323] border border-[#A9C0C1] shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#F4F1EA] hover:bg-[#D6E0DE] text-[#172323] border border-[#A9C0C1] shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Footer Caption */}
        <div className="px-5 py-3 bg-[#D6E0DE]/50 border-t border-[#A9C0C1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="font-mono text-xs text-[#172323]/80">
            {current.subtitle || "Project Artifact View"}
          </p>

          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {images.map((img, idx) => (
                <button
                  key={img.id || idx}
                  onClick={() => onIndexChange(idx)}
                  className={`w-12 h-8 border overflow-hidden flex-shrink-0 transition-all ${
                    idx === currentIndex
                      ? 'border-[#172323] ring-2 ring-[#172323]'
                      : 'border-[#A9C0C1] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
