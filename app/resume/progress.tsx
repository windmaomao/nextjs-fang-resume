'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='bg-sky-500'
      id='scroll-indicator'
      style={{
        scaleX,
        position: 'fixed',
        zIndex: 10000,
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
      }}
    />
  );
}
