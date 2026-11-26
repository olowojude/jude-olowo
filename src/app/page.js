'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/sections/Home';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Experience from '../components/sections/Experience';
import Writings from '../components/sections/Writings';
import Contact from '../components/sections/Contact';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../data/projects.json';
import posthog from 'posthog-js';

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projectsData.projects.filter((project) => project.featured);

  const handleNavigation = (tab) => {
    setActiveTab(tab);

    if (isPostHogConfigured) {
      posthog.capture('portfolio_section_viewed', { section: tab.toLowerCase() });
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);

    if (isPostHogConfigured) {
      posthog.capture('project_case_study_opened', {
        project_id: project.id,
        project_category: project.featured ? 'health_tech' : 'other',
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <Home
            projects={featuredProjects}
            onProjectClick={handleProjectClick}
            onNavigate={handleNavigation}
          />
        );
      case 'Projects':
        return <Projects onProjectClick={handleProjectClick} />;
      case 'Services':
        return <Services />;
      case 'Experience':
        return <Experience />;
      case 'Writings':
        return <Writings />;
      case 'Contact':
        return <Contact />;
      default:
        return (
          <Home
            projects={featuredProjects}
            onProjectClick={handleProjectClick}
            onNavigate={handleNavigation}
          />
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Header activeTab={activeTab} setActiveTab={handleNavigation} />
        <main className="mb-16">{renderContent()}</main>
        <Footer />
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
