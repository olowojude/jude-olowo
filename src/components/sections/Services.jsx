import React from 'react';
import servicesData from '../../data/services.json';

const categories = {
  Development: [
    'Full-Stack Web Application Development',
    'REST API Design & Development',
    'SaaS Product Development'
  ],
  'Writing & Documentation': [
    'API Documentation & Developer Guides',
    'Software & Product Documentation',
    'Technical Tutorials & Articles',
    'Health & Medical Content Writing'
  ]
};

export default function Services() {
  const developmentServices = servicesData.services.filter(s =>
    categories['Development'].includes(s.title)
  );
  const writingServices = servicesData.services.filter(s =>
    categories['Writing & Documentation'].includes(s.title)
  );

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-4">{servicesData.title}</h2>
      <p
        className="mb-10 leading-relaxed text-[17px]"
        style={{color: 'var(--text-secondary)'}}
      >
        {servicesData.description}
      </p>

      {/* Development */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{color: 'var(--text-secondary)'}}
        >
          Development
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {developmentServices.map((service, index) => (
            <div
              key={index}
              className="p-6 transition-colors"
              style={{border: '1px solid var(--border)'}}
            >
              <h3
                className="font-medium mb-2 text-[15px]"
                style={{color: 'var(--text-primary)'}}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{color: 'var(--text-secondary)'}}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Writing & Documentation */}
      <div className="mb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{color: 'var(--text-secondary)'}}
        >
          Writing & Documentation
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {writingServices.map((service, index) => (
            <div
              key={index}
              className="p-6 transition-colors"
              style={{border: '1px solid var(--border)'}}
            >
              <h3
                className="font-medium mb-2 text-[15px]"
                style={{color: 'var(--text-primary)'}}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{color: 'var(--text-secondary)'}}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Working With Me */}
      <div
        className="p-6 rounded"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border)'
        }}
      >
        <h3
          className="font-medium mb-4 text-[15px]"
          style={{color: 'var(--text-primary)'}}
        >
          {servicesData.workingWithMe.title}
        </h3>
        <div className="space-y-2 text-sm">
          {servicesData.workingWithMe.points.map((point, index) => (
            <p key={index} style={{color: 'var(--text-primary)'}}>
              → {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}