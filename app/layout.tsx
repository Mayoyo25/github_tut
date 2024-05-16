import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const siteDescription =
  'Your destination for brand name and domain excellence. Find thousands of brand names and domains for your online presence in seconds. Try smartbrandly today!';

export const metadata: Metadata = {
  title: 'SmartBrandly',
  description: siteDescription,
  keywords: [
    'domain generator',
    'AI-powered domains',
    'domain name',
    'brand domain',
    'SmartBrandly',
    'branding',
  ],
  authors: [{ name: 'Franklin Mayoyo' }],
  openGraph: {
    title: 'SmartBrandly - AI-Powered brand name Generator',
    description: siteDescription,
    images: [
      {
        url: 'https://www.smartbrandly.com/og.png',
      },
    ],
    url: 'https://www.smartbrandly.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://www.smartbrandly.com/x-card.png',
    title: 'SmartBrandly - Where Ideas Become Domains find domains',
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
