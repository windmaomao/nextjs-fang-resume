'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Logo from './logo';

export default function Header() {
  const [started, setStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setStarted(latest > 0.01);
  });

  return (
    <div className='z-[9999] sticky top-0 bg-gray-100 dark:bg-gray-900'>
      <div className='px-4 pt-6 pb-4 md:w-[1024px] md:mx-auto flex justify-between flex-col sm:flex-row gap-4 '>
        <Logo />
        <motion.div
          className='max-w-[400px] font-light text-[10px] text-gray-400 px-2'
          style={{ display: started ? 'none' : 'block' }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          React NextJS JavaScript TypeScript Figma CSS Tailwind NodeJS UI/UX
          Design Micro Frontend Architecture Storybook Cypress Testing
          Functional Programming
        </motion.div>
      </div>
      {started && (
        <div className='absolute w-full bottom-0 h-4 shadow-md'></div>
      )}
    </div>
  );
}
