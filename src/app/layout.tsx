import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContact from '@/components/ui/StickyContact';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'HI-TECH TRAINING INSTITUTE | CNC, CAD, CAM Training',
  description: 'Professional Industrial Training Institute Since 2010. Master CNC, CAD & CAM Technologies in Ulhasnagar, Maharashtra.',
  openGraph: {
    title: 'HI-TECH TRAINING INSTITUTE | CNC, CAD, CAM Training',
    description: 'Professional Industrial Training Institute Since 2010. Master CNC, CAD & CAM Technologies.',
    url: 'https://hitech-institute.in',
    siteName: 'Hi-Tech Training Institute',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <StickyContact />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
