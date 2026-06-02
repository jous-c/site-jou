import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const woodland = localFont({
  src: './fonts/PPWoodland-Regular.woff2',
  variable: '--font-woodland',
  weight: '400',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'jou.design — Product Designer',
    template: '%s | jou.design',
  },
  description: 'Portfolio of a product designer — case studies, playground work, and more.',
  metadataBase: new URL('https://jou.design'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${woodland.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[var(--color-surface)] text-[var(--color-text)] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
