import { lemonade } from '@/app/ui/fonts';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <div className={lemonade.className}>{children}</div>
      </div>
    </div>
  );
}
