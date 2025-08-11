import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Logo from './logo';

export default async function ResumePage() {
  return (
    <div className='flex flex-col gap-4 md:gap-16'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='p-6 md:w-[1024px] md:mx-auto'>
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
      <div className='p-6 bg-gray-100'>
        <div className='w-full md:mx-auto md:max-w-[1024px]'>
          <div className='font-bold'>Find Me At</div>
          <div className='my-7 flex flex-row flex-wrap justify-around items-center gap-8'>
            <Image
              src='/resume/contact-linkedin.png'
              width={93}
              height={24}
              alt='Contact Linkedin'
            />
            <Image
              src='/resume/contact-medium.png'
              width={90}
              height={24}
              alt='Contact Medium'
            />
            <Image
              src='/resume/contact-amazon.png'
              width={85}
              height={36}
              alt='Contact Amazon'
              className='pt-2'
            />
            <Image
              src='/resume/contact-codepen.png'
              width={106}
              height={20}
              alt='Contact Codepen'
            />
            <Image
              src='/resume/contact-stackoverflow.png'
              width={114}
              height={30}
              alt='Contact Stackoverflow'
            />
          </div>
        </div>
      </div>
      <div className='p-6 md:w-[1024px] md:mx-auto'>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
          <div className='w-full sm:w-2/5 flex flex-col gap-8'>
            <div className='text-sm font-light'>Research Customers</div>
            <div className='text-2xl/10 font-semibold flex flex-col'>
              <span>Empathize your users</span>
              <span>And share with their</span>
              <span>Goals and Frustrations</span>
            </div>
          </div>
          <Image
            src='/resume/user-story.png'
            width={572}
            height={337}
            className='w-full sm:w-3/5'
            alt='Screenshots of the dashboard project showing desktop version'
          />
        </div>
      </div>
    </div>
  );
}
