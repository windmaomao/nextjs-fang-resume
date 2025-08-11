import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Logo from './logo';

export default async function Page() {
  return (
    <div className='flex flex-col items-center'>
      <div className='p-6 self-start'>
        <Logo />
      </div>
      <div className='px-6 md:mx-auto md:max-w-[1024px]'>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
          <Image
            src='/resume/hero-desktop.png'
            width={690}
            height={459}
            className='w-full sm:w-3/5'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <div className='w-full sm:w-2/5 flex flex-col gap-8'>
            <div className='text-4xl/10 font-bold'>
              Build app with Confidence
            </div>
            <div className={`${lusitana.className} text-md`}>
              My name is Fang, 90% UI engineer and 10% UX designer. I build a
              site with precision and confidence. Checkout my case studies
              below.
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-100 p-6'>
        <div className='w-full md:mx-auto md:max-w-[1024px]'>
          <div className='font-bold'>Find Me At</div>
          <div className='my-4 flex flex-row justify-around'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
