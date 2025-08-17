import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Keyword from './keyword';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
      <Image
        src='/resume/hero-desktop.png'
        width={690}
        height={459}
        className='w-full md:w-3/5'
        alt='Screenshots of the dashboard project showing desktop version'
      />
      <div className='w-full md:w-2/5 flex flex-col gap-8'>
        <div className='text-3xl md:text-4xl font-bold leading-[48px]'>
          Build app with Confidence
        </div>
        <div className={`${lusitana.className} text-md`}>
          My name is Fang, 90% <Keyword>UI</Keyword> engineer and 10%{' '}
          <Keyword>UX</Keyword> designer. I craft websites and apps with care,
          precision, and confidence. You can find me from the following social
          media.
        </div>
        {/* <p className='text-xs font-light text-gray-300'>
              (Under construction)
            </p> */}
      </div>
    </div>
  );
}
