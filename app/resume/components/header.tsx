'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import Logo from './logo';

export default function Header() {
  const [started, setStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setStarted(latest > 0.01);
  });

  return (
    <div className='z-[9999] sticky top-0 bg-white'>
      <div className='px-4 py-6 md:w-[1024px] md:mx-auto flex justify-between flex-col sm:flex-row gap-4 '>
        <Logo />
        <div className='max-w-[400px] font-light text-[10px] text-gray-300 px-2'>
          React NextJS JavaScript TypeScript Figma CSS Tailwind NodeJS UI/UX
          Design Micro Frontend Architecture Storybook Cypress Testing
          Functional Programming
        </div>
      </div>
      {started && (
        <div className='absolute w-full bottom-0 h-4 shadow-md'></div>
      )}
    </div>
  );
}
