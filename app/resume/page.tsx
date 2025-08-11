import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Logo from './logo';

export default async function ResumePage() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='p-6 md:w-[1024px] md:mx-auto'>
        <div className='flex justify-between'>
          <Logo />
          <div className='flex gap-8'>
            <span className='font-semibold'>Home</span>
            <span className='font-light'>About Me</span>
          </div>
        </div>
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
            <div className='text-4xl font-bold leading-[48px]'>
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
      <div className='p-6 py-20 md:w-[1024px] md:mx-auto'>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
          <div className='w-full sm:w-2/5 flex flex-col gap-4'>
            <div className='text-sm font-light'>Research Customers</div>
            <div className='text-2xl font-semibold flex flex-col gap-4'>
              <span>Empathize Your Users</span>
              <span>And Share With Their</span>
              <span>Goals And Frustrations</span>
            </div>
          </div>
          <Image
            src='/resume/user-story.png'
            width={572}
            height={337}
            className='w-full sm:w-3/5'
            alt='Screenshots of the user story project showing sophia profile'
          />
        </div>
      </div>
      <div className='px-6 py-28 bg-gradient-to-r from-blue-600 to-purple-500'>
        <div className='md:w-[1024px] md:mx-auto flex flex-col sm:flex-row justify-around items-center gap-12'>
          <Image
            src='/resume/prototype-workflow.png'
            width={630}
            height={441}
            className='w-full sm:w-3/5'
            alt='Screenshots of the prototype workflow showing a movie site project'
          />
          <div className='w-full sm:w-2/5 flex flex-col gap-4'>
            <div className='text-white text-sm font-light'>
              Prototype Workflow
            </div>
            <div className='text-white text-2xl font-semibold flex flex-col gap-4'>
              <span>Design Functionalities</span>
              <span>And Resolve User</span>
              <span>Painpoints</span>
            </div>
          </div>
        </div>
      </div>
      <div className='p-6 py-12 md:max-w-[1024px] md:mx-auto'>
        <div className='flex flex-col items-center gap-8'>
          <p className='font-light text-sm'>Build Product</p>
          <div className='flex flex-col items-center gap-3 font-semibold text-3xl'>
            <span>Want To Know How To</span>
            <span>Turn Your Idea</span>
            <span>Into A Product</span>
          </div>
          <button>Read More</button>
          <Image
            src='/resume/build-product.jpg'
            width={644}
            height={322}
            alt='Screenshots of the build product picture with dad and daughter saying hi'
          />
        </div>
      </div>
      <div className='p-6 md:w-[1024px] md:mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between gap-4'>
          <div className='flex gap-24'>
            <Logo />
            <div className='flex flex-col gap-8'>
              <div className='font-semibold'>SITE</div>
              <div className={lusitana.className + ` flex flex-col gap-2`}>
                <span>Home</span>
                <span>About Me</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='font-semibold text-right'>JOIN MY NEWSLETTER</div>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
}
