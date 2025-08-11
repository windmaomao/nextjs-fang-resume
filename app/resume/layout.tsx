import { lemonade } from '@/app/ui/fonts';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen flex-col items-center'>
      <div className={lemonade.className}>{children}</div>
    </div>
  );
}
