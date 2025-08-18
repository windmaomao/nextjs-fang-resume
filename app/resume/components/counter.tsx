'use client';

import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';

export default function HTMLContent({
  max = 100,
  duration = 1,
}: {
  max?: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, max, { duration });
    return () => controls.stop();
  }, []);

  return <motion.span>{rounded}</motion.span>;
}
