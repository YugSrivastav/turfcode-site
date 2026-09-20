import React, { useState, useEffect } from 'react';

export default function RotatingWord({ words, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 250);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="inline-block relative">
      <span
        className={`inline-block text-[#A2C304] transition-all duration-300 transform ${
          fade
            ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
            : 'opacity-0 -translate-y-2 filter blur-sm scale-95'
        }`}
      >
        {words[index]}
      </span>
      <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 md:h-12 bg-[#A2C304] ml-1 sm:ml-1.5 align-middle animate-pulse"></span>
    </span>
  );
}
