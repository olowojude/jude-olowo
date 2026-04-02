import React from 'react';
import homeData from '../data/home.json';
import ThemeToggle from './ThemeToggle';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = ['Home', 'Projects', 'Services', 'Experience', 'Writings', 'Contact'];

  return (
    <header className="mb-12">
      {/* Top row: image + name + toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-27 h-25 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src="/olowo.png"
              alt="Olowo Jude"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-semibold mb-1">{homeData.name}</h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-[180px] sm:max-w-none" style={{color: 'var(--text-secondary)'}}>
              {homeData.title}
            </p>
          </div>
        </div>
        <div className="self-start mt-1">
          <ThemeToggle />
        </div>
      </div>

      {/* Nav tabs */}
      <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm border-b border-gray-200 pb-4" style={{borderColor: 'var(--border)'}}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors ${activeTab === tab ? 'active-tab' : 'inactive-tab'}`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}