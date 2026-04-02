'use client';

import React, { useState, useEffect } from 'react';
import homeData from '../data/home.json';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex justify-between items-center">
        <p>© 2026 {homeData.name}</p>
        <p suppressHydrationWarning>{time || '--:--'}</p>
      </div>
    </footer>
  );
}