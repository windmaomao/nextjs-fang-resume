import Image from 'next/image';
import { Avatar } from '@base-ui-components/react/avatar';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='py-6 min-h-screen flex-col bg-gradient-to-r from-violet-400 to-blue-400 flex gap-8'>
      {/* Header */}
      <div className='px-6 flex items-center gap-4'>
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
      <div className='md:w-[1024px] md:mx-auto flex flex-col md:flex-row justify-between md:items-end gap-y-16'>
        <motion.div
          className='px-6 w-full flex flex-col md:flex-row items-center md:items-end gap-x-2 gap-y-8 md:w-1/2 cursor-pointer'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='/resume'>
            <Image
              src='/home/robot.png'
              width={280}
              height={280}
              className='max-w-full'
              alt='Screenshots of robot'
            />
          </Link>
          <div className='text-2xl font-bold text-white'>
            <Link href='/resume'>Coder</Link>
          </div>
        </motion.div>
        <div className='px-6 w-full flex flex-col md:flex-row gap-4 md:w-1/2'>
          <div className='text-xl font-bold text-blue-300'>Singer</div>
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
