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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projectsData.projects.filter((project) => project.featured);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <Home
            projects={featuredProjects}
            onProjectClick={setSelectedProject}
            onNavigate={setActiveTab}
          />
        );
      case 'Projects':
        return <Projects onProjectClick={setSelectedProject} />;
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
            onProjectClick={setSelectedProject}
            onNavigate={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
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
