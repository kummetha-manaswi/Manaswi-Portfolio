import React from 'react';
import {
  Sparkles,
  SlidersHorizontal,
  Search,
  TrendingUp,
  Layers,
  CheckCircle2,
  Workflow,
  RefreshCw,
  Boxes,
  Star,
  Snowflake,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function SkillIcon({ name, className = "w-3.5 h-3.5" }) {
  switch (name) {
    // --- Programming Logos ---
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.94S0 5.76 0 11.884c0 6.126 3.44 5.918 3.44 5.918h2.053v-2.887s-.11-3.44 3.39-3.44h5.787v-.853h-5.81V9.8h8.88s3.432.38 3.432-5.748C21.172-1.68 17.72 0 11.914 0zm-3.23 1.706a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.81v-.825h8.076s3.94.47 3.94-5.653c0-6.126-3.44-5.918-3.44-5.918h-2.053v2.887s.11 3.44-3.39 3.44H9.324v.853h5.81v.825H6.254s-3.432-.38-3.432 5.748C2.828 25.68 6.28 24 12.086 24zm3.23-1.706a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z" />
        </svg>
      );

    case 'SQL':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );

    case 'C++':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M22.394 6.55L13.606 1.48a3.21 3.21 0 0 0-3.212 0L1.606 6.55A3.21 3.21 0 0 0 0 9.333v10.14a3.21 3.21 0 0 0 1.606 2.783l8.788 5.07a3.21 3.21 0 0 0 3.212 0l8.788-5.07A3.21 3.21 0 0 0 24 19.473V9.333a3.21 3.21 0 0 0-1.606-2.783zm-11.25 10.428a5.21 5.21 0 1 1 0-9.956 5.17 5.17 0 0 1 3.75 1.638l-1.39 1.39a3.25 3.25 0 1 0 0 3.898l1.39 1.39a5.17 5.17 0 0 1-3.75 1.64zm6.056-4.578h1.2v-1.2h.8v1.2h1.2v.8h-1.2v1.2h-.8v-1.2h-1.2zm4 0h1.2v-1.2h.8v1.2h1.2v.8h-1.2v1.2h-.8v-1.2h-1.2z" />
        </svg>
      );

    case 'Java':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M9.07 19.04c4.32.22 8.7-.35 12.87-1.46.2.7-.42 1.3-1.07 1.5-3.9 1.2-8.08 1.46-12.18 1.1-1.33-.12-2.3-.96-1.57-2.02.4-.6 1.15-.98 1.95-.98.67-.14 1.37.07 2 .28.46.16 1.05.32 1.58.32.42 0 .84-.1 1.25-.13l-4.83 1.39zm-.37-3.23c3.42.17 6.9-.22 10.18-1.1.28.52-.25 1.02-.73 1.18-3.14.99-6.48 1.23-9.75.93-1.12-.1-1.85-.75-1.25-1.56.32-.44.9-.74 1.55-.74zM15.4 6.8c1.3.93 2.05 2.37 2.1 3.96.06 1.9-.9 3.73-2.48 4.75-.43.27-.88-.2-.55-.54 1.33-.87 2.13-2.4 2.08-3.98-.04-1.3-.65-2.48-1.7-3.25-.38-.28.18-.73.55-.94zm-3.6-4.8c1.3 1.32 2 3.14 1.93 5.03-.08 2.06-1.14 4.02-2.8 5.16-.4.28-.84-.2-.53-.54 1.4-1 2.28-2.67 2.35-4.4.06-1.58-.52-3.1-1.6-4.2-.38-.38.25-.8.65-1.05z" />
        </svg>
      );

    // --- Data Analytics Logos & Concepts ---
    case 'Pandas':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <rect x="2" y="11" width="3.5" height="10" rx="1.75" />
          <rect x="7.5" y="6" width="3.5" height="15" rx="1.75" />
          <rect x="13" y="2" width="3.5" height="19" rx="1.75" />
          <rect x="18.5" y="8" width="3.5" height="13" rx="1.75" />
          <circle cx="3.75" cy="5.5" r="1.75" />
          <circle cx="9.25" cy="2" r="1.75" />
          <circle cx="20.25" cy="4" r="1.75" />
        </svg>
      );

    case 'NumPy':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2L2 7.7v8.6L12 22l10-5.7V7.7L12 2zm0 2.3l7.5 4.3-3.2 1.8-7.5-4.3L12 4.3zM4.5 9.1l7 4v6.8l-7-4V9.1zm9 10.8v-6.8l7-4v6.8l-7 4z" />
        </svg>
      );

    case 'Data Cleaning':
      return <Sparkles className={className} aria-hidden="true" />;

    case 'Data Preprocessing':
      return <SlidersHorizontal className={className} aria-hidden="true" />;

    case 'EDA':
      return <Search className={className} aria-hidden="true" />;

    case 'Statistical Analysis':
      return <TrendingUp className={className} aria-hidden="true" />;

    // --- BI & Visualization Logos ---
    case 'Power BI':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <rect x="3" y="12" width="4.5" height="10" rx="1.2" />
          <rect x="9.5" y="7" width="4.5" height="15" rx="1.2" />
          <rect x="16" y="2" width="4.5" height="20" rx="1.2" />
        </svg>
      );

    case 'Excel':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M21.17 3.25H7.83A1.83 1.83 0 0 0 6 5.08v2.17h14.42c.4 0 .75.35.75.75v10.92c0 .4-.35.75-.75.75H6v2.25c0 1.01.82 1.83 1.83 1.83h13.34c1.01 0 1.83-.82 1.83-1.83V5.08a1.83 1.83 0 0 0-1.83-1.83z" />
          <rect x="2" y="7" width="9" height="10" rx="1" fill="currentColor" />
          <path d="M4.5 14.5l1.8-2.5-1.8-2.5h1.4l1.1 1.7 1.1-1.7h1.4l-1.8 2.5 1.8 2.5h-1.4l-1.1-1.7-1.1 1.7H4.5z" fill="#F4F1EA" />
        </svg>
      );

    case 'DAX':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M4 19l4-14h3M7 12h5M14 8l6 8M20 8l-6 8" />
        </svg>
      );

    case 'Power Query':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case 'Matplotlib':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 10 10H12V2z" fill="currentColor" fillOpacity="0.3" />
          <path d="M12 12L5 19M12 12l7-2" />
        </svg>
      );

    case 'Seaborn':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M3 18c3-8 5-13 9-13s6 13 9 13" />
          <path d="M3 18c3-4 6-7 9-7s6 4 9 7" strokeDasharray="2 2" />
        </svg>
      );

    // --- Machine Learning ---
    case 'Scikit-learn':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2L2 19.5h20L12 2zm0 4.2l6.8 11.8H5.2L12 6.2z" />
          <circle cx="12" cy="13" r="2.5" />
        </svg>
      );

    case 'Feature Analysis':
      return <Layers className={className} aria-hidden="true" />;

    case 'Model Evaluation':
      return <CheckCircle2 className={className} aria-hidden="true" />;

    // --- Data Engineering ---
    case 'ETL Pipelines':
      return <Workflow className={className} aria-hidden="true" />;

    case 'Data Transformation':
      return <RefreshCw className={className} aria-hidden="true" />;

    case 'Data Modeling':
      return <Boxes className={className} aria-hidden="true" />;

    case 'Star Schema':
      return <Star className={className} aria-hidden="true" />;

    case 'Snowflake Schema':
      return <Snowflake className={className} aria-hidden="true" />;

    // --- Tools ---
    case 'Jupyter Notebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 3.8c-4.4 0-8 1.6-9.5 4 1.4-1.6 4.7-2.7 8.3-2.7s6.9 1.1 8.3 2.7c-1.5-2.4-5.1-4-9.5-4zm0 16.4c4.4 0 8-1.6 9.5-4-1.4 1.6-4.7 2.7-8.3 2.7s-6.9-1.1-8.3-2.7c1.5 2.4 5.1 4 9.5 4zM20.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3.5 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      );

    case 'Git':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M21.62 10.44L13.56 2.38a2.12 2.12 0 0 0-3 0L8.68 4.26l3.22 3.22a2.52 2.52 0 0 1 3.18 3.19l3.09 3.09a2.5 2.5 0 1 1-1.5 1.46L13.7 12.3a2.53 2.53 0 0 1-3.32-3.17L7.26 6 2.38 10.88a2.12 2.12 0 0 0 0 3l8.06 8.06a2.12 2.12 0 0 0 3 0l8.18-8.18a2.12 2.12 0 0 0 0-3.32z" />
        </svg>
      );

    case 'GitHub':
      return <GithubIcon className={className} />;

    case 'Spyder':
      return <Terminal className={className} aria-hidden="true" />;

    case 'LeetCode':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.9 5.86 5.86 0 0 0 1.209 1.433l3.854 3.729 4.966 4.812a1.354 1.354 0 0 0 1.896-.062 1.356 1.356 0 0 0-.062-1.896L9.67 20.49l-3.791-3.666a3.172 3.172 0 0 1-.645-.77 3.308 3.308 0 0 1-.417-1.042 3.11 3.11 0 0 1-.042-1.25 3.03 3.03 0 0 1 .688-1.188l3.791-4.062 4.937-4.792a1.34 1.34 0 0 0 .417-.979 1.33 1.33 0 0 0-1.125-1.25zM10.96 11.23h10.94a1.35 1.35 0 1 0 0-2.7H10.96a1.35 1.35 0 1 0 0 2.7z" />
        </svg>
      );

    default:
      return <Sparkles className={className} aria-hidden="true" />;
  }
}
