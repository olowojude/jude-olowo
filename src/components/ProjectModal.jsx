import React, { useEffect } from 'react';
import { X, Lightbulb, Target, Zap, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{backgroundColor: 'rgba(0,0,0,0.4)'}}
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-xl h-[90vh] shadow-2xl flex flex-col overflow-hidden rounded-lg"
        style={{backgroundColor: 'var(--bg)'}}
      >
        {/* Header */}
        <div
          className="flex justify-between items-start px-6 py-5 flex-shrink-0"
          style={{borderBottom: '1px solid var(--border)'}}
        >
          <div className="pr-4">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-medium">{project.title}</h2>
              {project.status === 'In Progress' && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{backgroundColor: '#fef3c7', color: '#92400e'}}
                >
                  In Progress
                </span>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 mt-1 transition-colors"
            style={{color: 'var(--text-secondary)'}}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

          {/* Initiative */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} style={{color: 'var(--text-secondary)'}} />
              <h3
                className="text-xs font-semibold uppercase tracking-wide"
                style={{color: 'var(--text-secondary)'}}
              >
                The Initiative
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed" style={{color: 'var(--text-primary)'}}>
              {project.details.initiative}
            </p>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} style={{color: 'var(--text-secondary)'}} />
              <h3
                className="text-xs font-semibold uppercase tracking-wide"
                style={{color: 'var(--text-secondary)'}}
              >
                The Challenge
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed" style={{color: 'var(--text-primary)'}}>
              {project.details.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} style={{color: 'var(--text-secondary)'}} />
              <h3
                className="text-xs font-semibold uppercase tracking-wide"
                style={{color: 'var(--text-secondary)'}}
              >
                The Solution
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed mb-4" style={{color: 'var(--text-primary)'}}>
              {project.details.solution}
            </p>
            <div
              className="p-4 rounded-lg"
              style={{backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)'}}
            >
              <h4
                className="text-xs font-semibold uppercase tracking-wide mb-3"
                style={{color: 'var(--text-secondary)'}}
              >
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.details.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm flex items-start gap-2"
                    style={{color: 'var(--text-primary)'}}
                  >
                    <span style={{color: 'var(--text-secondary)', marginTop: '2px'}}>→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} style={{color: 'var(--text-secondary)'}} />
              <h3
                className="text-xs font-semibold uppercase tracking-wide"
                style={{color: 'var(--text-secondary)'}}
              >
                Technical Highlights
              </h3>
            </div>
            <ul className="space-y-2">
              {project.details.technicalHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-[15px] flex items-start gap-2"
                  style={{color: 'var(--text-primary)'}}
                >
                  <span style={{color: 'var(--text-secondary)', marginTop: '2px'}}>•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div
            className="p-6 rounded-lg"
            style={{backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)'}}
          >
            <h3
              className="text-xs font-semibold uppercase tracking-wide mb-4"
              style={{color: 'var(--text-secondary)'}}
            >
              Impact & Results
            </h3>
            <ul className="space-y-3">
              {project.details.results.map((result, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm"
                  style={{color: 'var(--text-primary)'}}
                >
                  <span style={{color: '#10b981', marginTop: '2px'}}>✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-5 pt-5 flex gap-6 text-sm"
              style={{borderTop: '1px solid var(--border)'}}
            >
              {/* <div>
                <span style={{color: 'var(--text-secondary)'}}>Duration: </span>
                <span style={{color: 'var(--text-primary)'}}>{project.details.duration}</span>
              </div> */}
              {/* <div>
                <span style={{color: 'var(--text-secondary)'}}>Role: </span>
                <span style={{color: 'var(--text-primary)'}}>{project.details.role}</span>
              </div> */}
            </div>
          </div>

          <div className="h-2" />
        </div>

        {/* Footer */}
        <div
          className="flex-shrink-0 px-6 py-4"
          style={{borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)'}}
        >
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm transition-colors rounded"
            style={{backgroundColor: 'var(--text-primary)', color: 'var(--bg)'}}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}