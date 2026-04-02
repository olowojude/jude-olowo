import React from 'react';
import writingsData from '../../data/writings.json';


const platformStyles = {
  freeCodeCamp: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Hashnode: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Substack: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Medium: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
  DevTo: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
};

export default function Writings() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-8">{writingsData.title}</h2>
      <div className="space-y-6">
        {writingsData.articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="block border border-gray-200 p-6 hover:border-gray-900 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium group-hover:text-gray-600 transition-colors text-[15px]">
                {article.title}
              </h3>
            </div>
            {article.platform && (
              <span className={`inline-block text-xs px-2 py-0.5 rounded font-medium ${platformStyles[article.platform] || 'bg-gray-100 text-gray-600'}`}>
                {article.platform}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}