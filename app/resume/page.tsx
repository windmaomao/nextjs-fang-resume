import { Metadata } from 'next';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { Header, Keyword, Hero, Findme, Reveal } from './components';

export const metadata: Metadata = {
  title: 'Fang Jin',
  description:
    'I craft websites and apps with care, precision, and confidence.',
  keywords:
    'React,NextJS,JavaScript,TypeScript,Figma,CSS,Tailwind,NodeJS,UI/UX Design,Micro Frontend Architecture,Storybook,Cypress Testing,Functional Programming',
};

export default async function ResumePage() {
  return (
    <div className='flex flex-col gap-6 h-full relative'>
      {/* Sticky header */}
      <Header />
      {/* Hero section */}
      <div className='px-4 pb-6 md:w-[1024px] md:mx-auto'>
        <Hero />
      </div>
      {/* Find me at */}
      <div className='bg-gray-100'>
        <div className='px-4 py-8 w-full md:mx-auto md:max-w-[1024px]'>
          <div className='font-bold'>Find Me At</div>
          <Reveal>
            <Findme />
          </Reveal>
        </div>
      </div>
      {/* Frontend engineer */}
      <div className='px-4 py-6 md:py-16 md:w-[1024px] md:mx-auto'>
        <Reveal>
          <div className='pb-6 text-3xl md:text-4xl font-bold leading-[48px]'>
            Front-end Engineer
          </div>
          <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
            <div className='w-full sm:w-3/5 flex flex-col gap-8'>
              <ul className={`${lusitana.className} text-md px-4 list-disc`}>
                <li>
                  Specialize in <Keyword>Javascript</Keyword>,{' '}
                  <Keyword>Typescript</Keyword>, and <Keyword>React</Keyword>
                </li>
                <li>
                  Efficient and accurate work using <Keyword>Figma</Keyword>
                </li>
                <li>
                  Multiple regions or languages support with{' '}
                  <Keyword>i18n</Keyword>
                </li>
                <li>
                  Author of book: “Designing React Hooks the right way” sold at
                  amazon.
                </li>
                <li>Author of book: “Think in Recursion” sold at amazon.</li>
                <li>
                  Familiar with state management systems ex.{' '}
                  <Keyword>Zustand</Keyword>, <Keyword>Redux</Keyword> and
                  <Keyword>React Query</Keyword>.
                </li>
                <li>
                  Create reusable UI library for the company design system (with
                  tokens generation)
                </li>
                <li>
                  Create custom dashboard charting using <Keyword>D3</Keyword>,{' '}
                  <Keyword>Visx</Keyword> that integrates with React
                </li>
                <li>
                  Provide technical oversight and guidance to teams, ensuring
                  alignment with project convention.
                </li>
                <li>
                  Extensive usage of <Keyword>Storybook</Keyword> with the
                  designer or shareholders on a daily basis to meet the design
                  requirement.
                </li>
              </ul>
            </div>
            <Image
              src='/resume/frontend-engineer.png'
              width={445}
              height={318}
              className='w-full sm:w-2/5'
              alt='Screenshots of the dashboard project showing desktop version'
            />
          </div>
        </Reveal>
      </div>
      {/* Education */}
      <div className='bg-gray-100'>
        <div className='px-4 py-10 w-full md:mx-auto md:max-w-[1024px]'>
          <div className='font-bold text-xl'>Education</div>
          <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
            <div className='w-full sm:w-2/5'>
              <a
                href='https://engineering.jhu.edu/chembe/'
                target='_blank'
                title='JHU Chemical Engineering'
              >
                <Image
                  src='/resume/jhu-logo.png'
                  width={434}
                  height={180}
                  alt='Screenshots of the user story project showing sophia profile'
                />
              </a>
            </div>
            <Reveal className='w-full sm:w-3/5 flex flex-col gap-6'>
              <div className='font-semibold'>
                <a
                  href='https://engineering.jhu.edu/chembe/'
                  target='_blank'
                  title='JHU Chemical Engineering'
                >
                  Johns Hopkins University, 2000 - 2007
                </a>
              </div>
              <div
                className={`${lusitana.className} + ' font-light flex flex-col gap-4`}
              >
                <span>
                  Major in{' '}
                  <b>
                    <i>Bio-molecular chemical engineering</i>
                  </b>
                </span>
                <span>
                  Designed a scientific computational framework for water
                  breakage simulation and cancer research simulations.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      {/* Awards */}
      <div className='px-4 py-6 md:w-[1024px] md:mx-auto'>
        <div className='pb-6 text-2xl md:text-3xl font-bold leading-[48px]'>
          Awards
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-8'>
          <Reveal className='w-full sm:w-3/5 flex flex-col gap-8'>
            <div
              className={`${lusitana.className} text-md flex flex-col gap-8`}
            >
              <p className='text-lg font-semibold'>
                <a
                  href='https://www.coursera.org/account/accomplishments/specialization/certificate/DRXGLEY7ZQZ6'
                  target='_blank'
                  title='Google UX Certification'
                >
                  UX Design Professional Certificate Google - July 2022
                </a>
              </p>
              <p>Highly Commended Award Credit Suisse - Dec 2019</p>
              <p>Recognition Award Deutsche Bank - Jan 2017</p>
            </div>
          </Reveal>
          <div className='w-full sm:w-2/5'>
            <a
              href='https://www.coursera.org/account/accomplishments/specialization/certificate/DRXGLEY7ZQZ6'
              target='_blank'
              title='Google UX Certification'
            >
              <Image
                src='/resume/google-ux.jpg'
                width={518}
                height={344}
                alt='Screenshots of the dashboard project showing desktop version'
              />
            </a>
          </div>
        </div>
      </div>
      {/* Publications */}
      <div className='bg-gray-100'>
        <div className='px-4 py-10 w-full md:mx-auto md:max-w-[1024px]'>
          <div className='text-xl font-bold'>Publications</div>
          <div className='mt-8 flex flex-col sm:flex-row justify-around items-center gap-8'>
            <div className='w-full sm:w-2/5 flex gap-8'>
              <a
                href='https://www.amazon.com/Designing-React-Hooks-Right-Way-ebook/dp/B09LYZMN16'
                target='_blank'
                title='Designing React Hooks book'
              >
                <Image
                  src='/resume/react-book.jpg'
                  width={153}
                  height={188}
                  alt='Screenshots of the dashboard project showing desktop version'
                />
              </a>
              <a
                href='https://www.amazon.com/Think-Recursion-Algorithmic-Programming-algorithms-ebook/dp/B0DDH9TYYJ'
                target='_blank'
                title='Think in Recursion book'
              >
                <Image
                  src='/resume/recursion-book.jpg'
                  width={143}
                  height={191}
                  alt='Screenshots of the dashboard project showing desktop version'
                />
              </a>
            </div>
            <Reveal className='w-full sm:w-3/5 flex flex-col gap-8'>
              <div
                className={`${lusitana.className} text-md flex flex-col gap-8`}
              >
                <p className='text-lg font-semibold'>
                  <a
                    href='https://www.amazon.com/Think-Recursion-Algorithmic-Programming-algorithms-ebook/dp/B0DDH9TYYJ'
                    target='_blank'
                    title='Think in Recursion book'
                  >
                    Think in Recursion, BPB – Jul 2023
                  </a>
                </p>
                <p className='text-lg font-semibold'>
                  <a
                    href='https://www.amazon.com/Designing-React-Hooks-Right-Way-ebook/dp/B09LYZMN16'
                    target='_blank'
                    title='Designing React Hooks book'
                  >
                    Designing React Hooks the Right Way, Packt – Jan 2022
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      {/* Experiences */}
      <div className='px-4 pt-8 md:pt-12 md:w-[1024px] md:mx-auto'>
        <div className='text-3xl font-bold'>Experiences</div>
        <Reveal className='relative wrap overflow-hidden pt-10 h-full'>
          <div
            className='hidden md:block border-2-2 absolute border-opacity-20 border-gray-700 h-full border'
            style={{ left: '50%' }}
          ></div>
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 md:w-5/12'></div>
            <div className='mr-4 z-20 flex items-center order-1 bg-gray-700 shadow-xl w-20 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>2024</h1>
            </div>
            <div className='order-1 bg-gray-100 rounded-sm shadow-md w-9/12 md:w-5/12 px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-lg'>
                Material Bank (Series-D Startup)
              </h3>
              <p className='text-xs font-light leading-snug tracking-wide text-gray-900 text-opacity-100'>
                React developer for Amazon like E-commerce site
              </p>
              <h4 className='mt-2 font-semibold'>Senior Frontend Engineer</h4>
              <h4 className='mt-2 text-sm font-light'>Aug 2024 - Aug 2025</h4>
            </div>
          </div>
          <div className='mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline'>
            <div className='order-1 md:w-5/12'></div>
            <div className='mr-4 z-20 flex items-center order-1 bg-gray-600 shadow-xl w-20 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>2023</h1>
            </div>
            <div className='order-1 bg-gray-100 rounded-sm shadow-md w-9/12 md:w-5/12 px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-lg'>
                Pearson (Publisher)
              </h3>
              <p className='text-xs font-light leading-snug tracking-wide text-gray-900 text-opacity-100'>
                React/nextJS lead developer/architect for pearson e-commerce
                sites.
              </p>
              <h4 className='mt-2 font-semibold'>Senior Front End Engineer</h4>
              <h4 className='mt-2 text-sm font-light'>Mar 2023 - May 2024</h4>
            </div>
          </div>
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 md:w-5/12'></div>
            <div className='mr-4 z-20 flex items-center order-1 bg-gray-500 shadow-xl w-20 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>2021</h1>
            </div>
            <div className='order-1 bg-gray-100 rounded-sm shadow-md w-9/12 md:w-5/12 px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-lg'>
                PhysIQ (Series-C startup)
              </h3>
              <p className='text-xs font-light leading-snug tracking-wide text-gray-900 text-opacity-100'>
                React lead developer for a clinical web portal for collecting
                real-time medical data from a physical device.
              </p>
              <h4 className='mt-2 font-semibold'>Staff Software Engineer</h4>
              <h4 className='mt-2 text-sm font-light'>Jun 2021 - Jan 2023</h4>
            </div>
          </div>
          <div className='mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline'>
            <div className='order-1 md:w-5/12'></div>
            <div className='mr-4 z-20 flex items-center order-1 bg-gray-400 shadow-xl w-20 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>2019</h1>
            </div>
            <div className='order-1 bg-gray-100 rounded-sm shadow-md w-9/12 md:w-5/12 px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-lg'>
                Credit Suisse (Bank)
              </h3>
              <p className='text-xs font-light leading-snug tracking-wide text-gray-900 text-opacity-100'>
                Lead and manager of team for React based compliance website,
                mainly focus on reusability and scalability.
              </p>
              <h4 className='mt-2 font-semibold'>AVP, Senior Frontend</h4>
              <h4 className='mt-2 text-sm font-light'>Jan 2019 - Jun 2021</h4>
            </div>
          </div>
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 md:w-5/12'></div>
            <div className='mr-4 z-20 flex items-center order-1 bg-gray-300 shadow-xl w-20 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>2016</h1>
            </div>
            <div className='order-1 bg-gray-100 rounded-sm shadow-md w-9/12 md:w-5/12 px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-lg'>
                Deutsche Bank
              </h3>
              <p className='text-xs font-light leading-snug tracking-wide text-gray-900 text-opacity-100'>
                UI and Angular architect in Market Clearing domain for 45+
                banking applications.
              </p>
              <h4 className='mt-2 font-semibold'>Senior Frontend</h4>
              <h4 className='mt-2 text-sm font-light'>Sep 2016 - Aug 2018</h4>
            </div>
          </div>
        </Reveal>
      </div>
      {/* <div className='p-6 py-20 md:w-[1024px] md:mx-auto'>
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
            width={445}
            height={318}
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
      </div> */}
      {/* Say bye */}
      <div className='pb-12 md:max-w-[1024px] md:mx-auto'>
        <Reveal className='flex flex-col items-center gap-8'>
          <Image
            src='/resume/build-product.jpg'
            width={644}
            height={322}
            alt='Screenshots of the build product picture with dad and daughter saying hi'
          />
          <p className='text-sm text-gray-400 font-light text-center py-4'>
            See ya and nice to see you this far...
          </p>
        </Reveal>
      </div>
      {/* Footer */}
      {/* <div className='p-6 md:w-[1024px] md:mx-auto'>
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
      </div> */}
    </div>
  );
}
