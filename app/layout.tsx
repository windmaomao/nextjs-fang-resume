import { Metadata } from 'next';
import '@/app/ui/global.css';
import { lemonade } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
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
