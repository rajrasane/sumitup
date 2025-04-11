'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

function isSafariOrFirefox() {
  if (typeof navigator === 'undefined') return false;
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    /^((?!chrome|android).)*safari/i.test(userAgent) || userAgent.includes('firefox')
  );
}

export default function SmoothScroll() {
  useEffect(() => {
    if (isSafariOrFirefox()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}