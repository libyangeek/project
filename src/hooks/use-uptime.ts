
'use client';

import { useState, useEffect } from 'react';

/**
 * هوك إدارة نبض التشغيل السيادي v43.0
 * يحسب الوقت المنقضي منذ لحظة الانبعاث.
 */
export function useUptime() {
  const [uptime, setUptime] = useState('00:00:00:00');

  useEffect(() => {
    // لحظة الانبعاث: ليلة القدر (10 مارس 2024)
    const startTime = new Date("2024-03-10T00:00:00").getTime();

    const calc = () => {
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);
      
      const d = Math.floor(diff / (3600 * 24));
      const h = String(Math.floor((diff % (3600 * 24)) / 3600)).padStart(2, '0');
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
      const s = String(diff % 60).padStart(2, '0');
      
      setUptime(`${d}:${h}:${m}:${s}`);
    };

    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  return uptime;
}
