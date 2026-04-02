import React from 'react';
import experienceData from '../../data/experience.json';

export default function Experience() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-8">{experienceData.title}</h2>
      <div className="space-y-10">
        {experienceData.categories.map((category, catIndex) => (
          <div key={catIndex}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{color: 'var(--text-secondary)'}}
            >
              {category.label}
            </p>
            <div className="space-y-8">
              {category.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="pl-6 pb-6"
                  style={{borderLeft: '2px solid var(--border)'}}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[15px]">{exp.role}</h3>
                    <span
                      className="text-xs whitespace-nowrap ml-4"
                      style={{color: 'var(--text-secondary)'}}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-3"
                    style={{color: 'var(--text-secondary)'}}
                  >
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-sm leading-relaxed flex items-start gap-2"
                        style={{color: 'var(--text-primary)'}}
                      >
                        <span style={{color: 'var(--text-secondary)', marginTop: '2px'}}>→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}