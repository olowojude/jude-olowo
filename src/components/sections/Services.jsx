import React from 'react';
import servicesData from '../../data/services.json';

export default function Services() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-4">{servicesData.title}</h2>
      <p className="mb-8 leading-relaxed text-[17px]" style={{color: 'var(--text-secondary)'}}>
        {servicesData.description}
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="p-6 transition-colors"
            style={{border: '1px solid var(--border)'}}
          >
            <h3 className="font-medium mb-2 text-[15px]">{service.title}</h3>
            <p className="text-sm leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded" style={{backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)'}}>
        <h3 className="font-medium mb-3 text-[15px]">{servicesData.workingWithMe.title}</h3>
        <div className="space-y-2 text-sm" style={{color: 'var(--text-primary)'}}>
          {servicesData.workingWithMe.points.map((point, index) => (
            <p key={index}>→ {point}</p>
          ))}
        </div>
      </div>
    </div>
  );
}