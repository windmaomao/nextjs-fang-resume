'use client';

import { ReactNode } from 'react';
import { Meter } from '@base-ui-components/react/meter';
import { motion, useTime, useTransform, cubicBezier } from 'motion/react';

interface MeterProps {
  title: ReactNode;
  value: number;
  highlight?: boolean;
  min?: number;
  max?: number;
}

export default function CustomMeter({
  title,
  value,
  highlight = false,
  min = 0,
  max = 10,
}: MeterProps) {
  const time = useTime();
  const scaleX = useTransform(time, [0, 1000], [0, 1], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  return (
    <Meter.Root className='box-border' value={value} min={min} max={max}>
      <Meter.Label className='text-sm text-gray-900 dark:text-gray-100'>
        <motion.div
          style={{ fontWeight: highlight ? '700' : '400' }}
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.div>
      </Meter.Label>
      <Meter.Track className='col-span-2 block h-0.5 w-full md:w-48 overflow-hidden bg-gray-100 shadow-[inset_0_0_0_1px] shadow-gray-200'>
        <Meter.Indicator
          className='block bg-gradient-to-r from-violet-400 to-blue-400 transition-all duration-500'
          render={<motion.div style={{ scaleX, originX: 0 }} />}
        />
      </Meter.Track>
    </Meter.Root>
  );
}
