import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Logo from './logo';
import Hero from './hero';

export default async function Page() {
  return (
    <>
      <div className='max-w-[1024px] p-6'>
        <Logo />
      </div>
      <Hero />
    </>
  );
}
