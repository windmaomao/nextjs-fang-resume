'use client';

import { motion, AnimatePresence, stagger } from 'motion/react';
import Image from 'next/image';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/windmaomao/',
    src: '/resume/contact-linkedin.png',
    width: 93,
    height: 24,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@windmaomao',
    src: '/resume/contact-medium.png',
    width: 90,
    height: 24,
  },
  {
    name: 'Amazon',
    href: 'https://www.amazon.com/stores/Fang-Jin/author/B09M7FFMJP',
    src: '/resume/contact-amazon.png',
    width: 85,
    height: 36,
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/windmaomao',
    src: '/resume/contact-codepen.png',
    width: 106,
    height: 20,
  },
  {
    name: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/288096/windmaomao',
    src: '/resume/contact-stackoverflow.png',
    width: 114,
    height: 30,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.4),
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Findme() {
  return (
    <AnimatePresence>
      <motion.div
        className='my-7 flex flex-row flex-wrap justify-around items-center gap-x-24 gap-y-8'
        variants={container}
        initial='hidden'
        animate='show'
      >
        {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target='_blank'
            title={`${s.name} profile`}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={s.src}
              width={s.width}
              height={s.height}
              alt={`Contact ${s.name}`}
            />
          </motion.a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
