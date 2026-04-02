import React from 'react';
import homeData from '../../data/home.json';

export default function Home() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {homeData.availability.available && (
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm" style={{color: 'var(--text-secondary)'}}>
            {homeData.availability.message}
          </span>
        </div>
      )}

      <div className="space-y-4">
        {/* Opening hook */}
        <p className="leading-relaxed text-[19px] font-medium pl-4" style={{color: 'var(--text-primary)', borderLeft: '3px solid var(--text-primary)', paddingLeft: '16px'}}>
          Most developers don't understand healthcare systems, and most healthcare professionals don't build software. I work at the intersection of both.
        </p>

        {/* Rest of bio */}
        {homeData.bio.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-[17px]" style={{color: 'var(--text-primary)', }}>
            {index === 0 ? (
              <>
                {/* <span className="font-medium">Hey, I'm {homeData.name}.</span> */}
                {paragraph.substring(paragraph.indexOf('.') + 1)}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </div>
  );
}