'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FiUser, FiAperture } from 'react-icons/fi';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-6 py-3 md:py-1.5 transition-colors relative z-10';

const Toggle = () => {
  const [selected, setSelected] = useState('light');

  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'light' ? 'text-white' : 'text-slate-300'
        }`}
        onClick={() => {
          setSelected('light');
        }}
      >
        <FiUser className='relative z-10 text-lg md:text-sm' />
        <span className='relative z-10'>Nice to meet you</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={() => {
          setSelected('dark');
        }}
      >
        <FiAperture className='relative z-10 text-lg md:text-sm' />
        <span className='relative z-10'>I'm interested</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600'
        />
      </div>
    </div>
  );
};

export default Toggle;
