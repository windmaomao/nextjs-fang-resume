import { Metadata } from 'next';
import '@/app/ui/global.css';
import { lemonade } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'fjin online',
  description: 'Fang J. is a software engineer and a singer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${lemonade.className} antialiased`}>{children}</body>
    </html>
  );
}
