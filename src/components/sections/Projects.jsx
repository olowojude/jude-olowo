import React from 'react';
import { ArrowRight } from 'lucide-react';
import projectsData from '../../data/projects.json';

export default function Projects({ onProjectClick }) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-8">{projectsData.title}</h2>
      <div className="space-y-6">
        {projectsData.projects.map((project) => (
          <div
            key={project.id}
            className="p-6 transition-all"
            style={{border: '1px solid var(--border)'}}
          >
            <div
              className="flex items-start justify-between cursor-pointer group"
              onClick={() => onProjectClick(project)}
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  {project.status === 'In Progress' && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{backgroundColor: '#fef3c7', color: '#92400e'}}
                    >
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-[15px]" style={{color: 'var(--text-secondary)'}}>
                  {project.shortDesc}
                </p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                style={{color: 'var(--text-secondary)'}}
              />
            </div>

            <div className="mt-4 pt-4" style={{borderTop: '1px solid var(--border)'}}>
              <button
                onClick={() => onProjectClick(project)}
                className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                style={{color: 'var(--text-secondary)'}}
              >
                See Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}