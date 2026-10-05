import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'WORK', href: '#work' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-b-2 border-[#A9C0C1] shadow-sm'
          : 'bg-[#F4F1EA] border-b border-[#A9C0C1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand & Subtle Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-tight text-[#172323] hover:text-[#718B8C] transition-colors"
          >
            {personalInfo.shortName}
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-[#172323] bg-[#A9C0C1]/40 border border-[#A9C0C1] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#718B8C] animate-pulse"></span>
            {personalInfo.statusBadge}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-widest text-[#172323]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#718B8C] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A9C0C1] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#A9C0C1] hover:bg-[#718B8C] text-[#172323] hover:text-[#F4F1EA] text-xs font-mono font-semibold tracking-wider border border-[#718B8C] transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#A9C0C1] border border-[#718B8C] text-[11px] font-mono font-medium text-[#172323]"
          >
            RESUME
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#172323] hover:text-[#718B8C] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F1EA] border-b-2 border-[#A9C0C1] px-6 py-6 transition-all duration-200 shadow-lg">
          <div className="mb-4 pb-3 border-b border-[#A9C0C1]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-[#172323] bg-[#A9C0C1]/50 border border-[#A9C0C1] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#718B8C]"></span>
              {personalInfo.statusBadge}
            </span>
          </div>
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest text-[#172323]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#718B8C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
