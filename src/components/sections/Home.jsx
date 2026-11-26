import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import homeData from '../../data/home.json';

export default function Home({ projects, onProjectClick, onNavigate }) {
  return (
    <div className="page-enter space-y-12">
      <section className="space-y-6">
        {homeData.availability.available && (
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {homeData.availability.message}
            </span>
          </div>
        )}

        <div className="max-w-3xl space-y-5">
          <p className="max-w-3xl text-[18px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {homeData.intro}
          </p>
          <p className="focus-line">{homeData.focus.join(' · ')}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <button onClick={() => onNavigate('Projects')} className="button-primary">
            Explore projects <ArrowRight size={16} />
          </button>
          <button onClick={() => onNavigate('Contact')} className="button-secondary">
            Get in touch <ArrowUpRight size={16} />
          </button>
        </div>

      </section>

      <section aria-labelledby="featured-work-title">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Selected work</p>
            <h2 id="featured-work-title" className="section-title">Health tech projects</h2>
          </div>
          <button onClick={() => onNavigate('Projects')} className="text-link shrink-0">
            All projects <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 stagger-children">
          {projects.map((project) => (
            <article key={project.id} className="project-card flex flex-col p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="eyebrow">Health tech</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    aria-label={`Visit ${project.title}`}
                  >
                    Live site <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              <h3 className="mb-2 text-xl font-medium">{project.title}</h3>
              <p className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.shortDesc}
              </p>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {project.featuredNote}
              </p>

              <button
                onClick={() => onProjectClick(project)}
                className="text-link mt-auto self-start"
                aria-label={`Read the ${project.title} case study`}
              >
                Read case study <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
