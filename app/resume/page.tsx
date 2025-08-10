import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Logo from './logo';

export default async function Page() {
  return (
    <div>
      <Logo />
      <div className='my-4 flex flex-col sm:flex-row justify-around items-center gap-8'>
        <Image
          src='/resume/hero-desktop.png'
          width={690}
          height={459}
          className='w-full sm:w-3/5'
          alt='Screenshots of the dashboard project showing desktop version'
        />
        <div className='w-full sm:w-2/5 flex flex-col gap-8'>
          <div className='text-4xl/10 font-bold'>Build app with Confidence</div>
          <div className={`${lusitana.className} text-md`}>
            My name is Fang, 90% UI engineer and 10% UX designer. I build a site
            with precision and confidence. Checkout my case studies below.
          </div>
        </div>
      </div>
    </div>
  );
}
