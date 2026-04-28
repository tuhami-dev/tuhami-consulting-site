import type { Metadata } from 'next';
import { DM_Serif_Display, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Tuhami Consulting — Product, UX & AI Automation',
  description:
    'A fractional PM and full-stack AI builder for founders who need both a strategist and a shipper. Product strategy, AI integration, and SaaS development.',
  openGraph: {
    title: 'Tuhami Consulting — Product, UX & AI Automation',
    description: 'Fractional PM & AI product consultant for founders building real products.',
    url: 'https://tuhamiconsulting.com',
    siteName: 'Tuhami Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuhami Consulting — Product, UX & AI Automation',
    description: 'Fractional PM & AI product consultant for founders building real products.',
  },
  metadataBase: new URL('https://tuhamiconsulting.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      data-palette="earth"
      data-dark="false"
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
