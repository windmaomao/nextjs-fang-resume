import * as motion from 'motion/react-client';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Keyword from './keyword';
import Counter from './counter';
import Toggle from './toggle';
import Reveal from './reveal';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
      <motion.div
        className='w-full md:w-3/5'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Image
          src='/resume/hero-desktop.png'
          width={690}
          height={459}
          alt='Screenshots of the dashboard project showing desktop version'
        />
      </motion.div>
      <Reveal className='w-full md:w-2/5 flex flex-col gap-8'>
        <div className='text-3xl md:text-4xl font-bold leading-[48px]'>
          Build app with Confidence
        </div>
        <div className={`${lusitana.className} text-lg`}>
          My name is Fang, <Counter max={90} duration={2} />%{' '}
          <Keyword>UI</Keyword> engineer and <Counter max={10} />%{' '}
          <Keyword>UX</Keyword> designer. I craft websites and apps with care,
          precision, and confidence.
        </div>
        <Toggle />
      </Reveal>
    </div>
  );
}
