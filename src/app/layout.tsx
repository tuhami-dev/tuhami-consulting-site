import type { Metadata } from 'next';
import { DM_Serif_Display, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-SZDL0KS4VG';

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

const SITE_URL = 'https://tuhamiconsulting.com';
const TITLE = 'Tuhami Consulting — Fractional PM & AI Product Consultant';
const DESCRIPTION =
  'Anas El Tuhami is a fractional PM and full-stack AI builder helping founders go from idea to shipped product. Product strategy, AI integration, and SaaS development.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Tuhami Consulting',
  },
  description: DESCRIPTION,
  keywords: [
    'fractional PM',
    'fractional product manager',
    'AI product consultant',
    'AI automation',
    'SaaS MVP development',
    'product strategy',
    'Next.js development',
    'Supabase',
    'startup consulting',
    'Phoenix Arizona',
  ],
  authors: [{ name: 'Anas El Tuhami', url: SITE_URL }],
  creator: 'Anas El Tuhami',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Tuhami Consulting',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/social_proof.png', width: 1200, height: 630, alt: 'Tuhami Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/social_proof.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tuhami Consulting',
  url: SITE_URL,
  description: DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'Anas El Tuhami',
    jobTitle: 'Fractional PM & AI Product Consultant',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/anaseltuhami/',
      'https://github.com/tuhami-dev',
    ],
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Fractional Product Management',
    'AI Product Strategy',
    'SaaS MVP Development',
    'AI Automation',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      data-palette="earth"
      data-dark="false"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}
