import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Avatar } from '@base-ui-components/react/avatar';

export const metadata: Metadata = {
  title: 'fjin portfolio',
  description: 'Fang J. is a software engineer and a singer.',
};

export default function Page() {
  return (
    <main className='min-h-screen flex-col bg-gradient-to-r from-violet-400 to-blue-400 flex gap-8'>
      {/* Header */}
      <div className='p-6 flex items-center gap-4'>
        <Avatar.Root className='inline-flex size-16 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none'>
          <Avatar.Image
            src='/resume/me.jpeg'
            width='48'
            height='48'
            className='size-full object-cover'
          />
          <Avatar.Fallback className='flex size-full items-center justify-center text-base'>
            FJ
          </Avatar.Fallback>
        </Avatar.Root>
        <div className='text-lg font-bold text-white'>fjin.online</div>
      </div>
      {/* Coder/Singer */}
      <div className='md:w-[1024px] md:mx-auto flex flex-col md:flex-row justify-between items-end gap-y-16'>
        <div className='flex flex-col md:flex-row gap-4 md:w-1/2'>
          <Image
            src='/home/robot.png'
            width={280}
            height={280}
            className='max-w-full'
            alt='Screenshots of robot'
          />
          <div className='text-2xl font-bold text-white'>Coder</div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:w-1/2'>
          <div className='text-xl font-bold text-white'>Singer</div>
          <Image
            src='/home/dance.png'
            width={320}
            height={320}
            className='max-w-full'
            alt='Screenshots of robot'
          />
        </div>
      </div>
    </main>
  );
}
