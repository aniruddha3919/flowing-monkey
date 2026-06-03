import type { Metadata } from 'next';
import { Inter, Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Flowing Monkey Fitness Studio | Unconventional Gym South Kolkata',
  description: 'Master functional strength with Steel Mace, Gada, Kettlebell, and Animal Flow in Kolkata. Serving Ballygunge, Bhawanipur, Southern Avenue & New Alipore.',
  keywords: [
    'Flowing Monkey Fitness',
    'Flowing Monkey Kolkata',
    'fitness studio Kolkata',
    'gym in Bhawanipur',
    'gym in Ballygunge',
    'gym in Southern Avenue',
    'gym in New Alipore',
    'steel mace training Kolkata',
    'gada training Kolkata',
    'kettlebell training Kolkata',
    'animal flow Kolkata',
    'functional strength training Kolkata',
    'movement training Kolkata',
    'personal trainer South Kolkata',
    'best fitness studio Kolkata',
  ],
  alternates: {
    canonical: 'https://flowingmonkeyfitness.com',
  },
  openGraph: {
    title: 'Flowing Monkey Fitness Studio | Unconventional Gym South Kolkata',
    description: 'Master functional strength with Steel Mace, Gada, Kettlebell, and Animal Flow in Kolkata. Serving Ballygunge, Bhawanipur, Southern Avenue & New Alipore.',
    url: 'https://flowingmonkeyfitness.com',
    siteName: 'Flowing Monkey Fitness Studio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "Flowing Monkey Fitness Studio",
    "description": "Unconventional training studio in Kolkata specializing in Steel Mace, Gada, Kettlebells, and Animal Flow movement patterns.",
    "url": "https://flowingmonkeyfitness.com",
    "telephone": "+919051292950",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38/F, Ramesh Mitra Rd, Bakul Bagan, Kalighat",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5312017,
      "longitude": 88.3473187
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Bhawanipur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Southern Avenue"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ballygunge"
      },
      {
        "@type": "AdministrativeArea",
        "name": "New Alipore"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kolkata"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${dmSans.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0f0a07] text-[#e4e3e0] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
