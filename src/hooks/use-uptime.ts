
'use client';

import { useState, useEffect } from 'react';

/**
 * هوك إدارة نبض التشغيل السيادي v43.0
 * يحسب الوقت المنقضي منذ ليلة القدر (10 مارس 2024) وصولاً إلى تاريخنا الحالي 6 مايو 2026 وما بعده.
 */
export function useUptime() {
  const [uptime, setUptime] = useState('000:00:00:00');

  useEffect(() => {
    // لحظة الانبعاث: ليلة القدر 2024
    const inception = new Date("2024-03-10T00:00:00").getTime();
    
    // التاريخ الحالي الذي حدده القائد: 6 مايو 2026
    const sovereignNowAtMount = new Date("2026-05-06T00:00:00").getTime();
    
    // حساب الفارق الزمني (Offset) بين وقت النظام الفعلي ووقت السيادة
    const realNowAtMount = Date.now();
    const sovereignOffset = sovereignNowAtMount - realNowAtMount;

    const calc = () => {
      const simulatedNow = Date.now() + sovereignOffset;
      const diff = Math.floor((simulatedNow - inception) / 1000);
      
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
