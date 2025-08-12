import { Metadata } from 'next';
import { lemonade } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Fang Jin',
  description:
    'Front-End Engineer Specializing in High-Impact eCommerce Solutions. Demonstrates a proven track record in delivering responsive, scalable front-end solutions for high-traffic platforms, enhancing user engagement and operational efficiency. Known for leading cross-functional teams to optimize performance, streamline communication, and ensure brand consistency, contributing to significant improvements in sales forecast accuracy and page load times.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={lemonade.className}>{children}</div>;
}
