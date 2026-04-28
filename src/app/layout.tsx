import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Tuhami Consulting — Fractional PM & Product Consultant',
  description:
    'Anas Tuhami helps early-stage startups and growing teams ship better products faster. Fractional PM, product strategy, and UX consulting.',
  openGraph: {
    title: 'Tuhami Consulting',
    description: 'Fractional PM & product consultant for startups.',
    url: 'https://tuhamiconsulting.com',
    siteName: 'Tuhami Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuhami Consulting — Fractional PM & Product Consultant',
    description: 'Fractional PM & product consultant for startups.',
  },
  metadataBase: new URL('https://tuhamiconsulting.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
