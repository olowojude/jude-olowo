import React from 'react';
import aboutData from '../../data/about.json';

export default function About() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-light mb-6">{aboutData.title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-[17px]">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-[15px]">{aboutData.skills.title}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {aboutData.skills.categories.map((category, index) => (
            <div key={index}>
              <h4 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                {category.name}
              </h4>
              <p className="text-sm text-gray-700">{category.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}