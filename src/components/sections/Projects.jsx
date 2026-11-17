import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import projectsData from '../../data/projects.json';

function ProjectGroup({ title, description, projects, onProjectClick }) {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        )}
      </div>
      <div className="space-y-6 stagger-children">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card p-6"
            style={{border: '1px solid var(--border)'}}
          >
            <button
              type="button"
              className="flex w-full items-start justify-between text-left group"
              onClick={() => onProjectClick(project)}
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
                <p className="text-[15px]" style={{color: 'var(--text-secondary)'}}>
                  {project.shortDesc}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{color: 'var(--text-primary)'}}>
                  {project.cardOutcome || project.details.results[0]}
                </p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                style={{color: 'var(--text-secondary)'}}
              />
            </button>

            <div className="mt-4 pt-4 flex items-center justify-between gap-4" style={{borderTop: '1px solid var(--border)'}}>
              <button
                onClick={() => onProjectClick(project)}
                className="text-link"
                style={{color: 'var(--text-secondary)'}}
              >
                Case study <ArrowRight size={15} />
              </button>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  style={{color: 'var(--text-secondary)'}}
                  aria-label={`${project.link.includes('github.com') ? 'View source code for' : 'Visit'} ${project.title}`}
                >
                  <ExternalLink size={14} />
                  {project.link.includes('github.com') ? 'Source code' : 'Live site'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Projects({ onProjectClick }) {
  const healthProjects = projectsData.projects.filter((project) => project.featured);
  const otherProjects = projectsData.projects.filter((project) => !project.featured);

  return (
    <div className="animate-fadeIn space-y-12">
      <h1 className="text-2xl font-light">{projectsData.title}</h1>
      <ProjectGroup
        title="Health tech products"
        description="Healthcare products shaped by clinical context and the realities of care."
        projects={healthProjects}
        onProjectClick={onProjectClick}
      />
      <ProjectGroup
        title="Other projects"
        description="I also build digital tools for everyday users and businesses beyond healthcare."
        projects={otherProjects}
        onProjectClick={onProjectClick}
      />
    </div>
  );
}
