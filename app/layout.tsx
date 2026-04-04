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
  title: 'Flowing Monkey Fitness Studio',
  description: 'Where Strength Meets Movement. Unconventional training in Kolkata.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${dmSans.variable} dark`}>
      <body className="bg-[#0f0a07] text-[#e4e3e0] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
