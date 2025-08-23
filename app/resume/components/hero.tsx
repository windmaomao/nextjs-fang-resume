import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Meter } from '@base-ui-components/react/meter';
import { lusitana } from '@/app/ui/fonts';
import Keyword from './keyword';
import Counter from './counter';
import Reveal from './reveal';

const skills = [
  {
    name: 'React',
    year: 7,
    highlight: true,
  },
  {
    name: 'JavaScript',
    year: 11,
  },
  {
    name: 'Typescript',
    year: 5,
    highlight: true,
  },
  {
    name: 'NextJS',
    year: 5,
  },
  {
    name: 'CSS',
    year: 9,
  },
  {
    name: 'Tailwind',
    year: 4,
  },
  {
    name: 'Figma',
    year: 5,
  },
  {
    name: 'Storybook',
    year: 6,
    highlight: true,
  },
];

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
      <Reveal className='pb-6 w-full md:w-2/5 flex flex-col gap-8'>
        <div className='text-3xl md:text-4xl font-bold leading-[48px]'>
          Build app with Confidence
        </div>
        <div className={`${lusitana.className} flex flex-col gap-4`}>
          <div className='text-lg'>
            Fang is <Counter max={90} duration={2} />% <Keyword>UI</Keyword>{' '}
            engineer and <Counter max={10} />% <Keyword>UX</Keyword> designer.
            And he crafts websites and apps with care, precision, and
            confidence.
          </div>
          <div className='grid grid-cols-2 gap-x-4 gap-y-1.5'>
            {skills.map(({ name, year, highlight }) => (
              <Meter.Root
                key={name}
                className='box-border'
                value={year}
                min={0}
                max={10}
              >
                <Meter.Label
                  className='text-sm font-medium text-gray-900'
                  style={{ fontWeight: highlight ? '700' : '400' }}
                >
                  <Keyword tooltip={`${name}: ${year} years`}>{name}</Keyword>
                </Meter.Label>
                <Meter.Track className='col-span-2 block h-0.5 w-48 overflow-hidden bg-gray-100 shadow-[inset_0_0_0_1px] shadow-gray-200'>
                  <Meter.Indicator className='block bg-gradient-to-r from-violet-400 to-blue-400 transition-all duration-500' />
                </Meter.Track>
              </Meter.Root>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
