import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Flowing Monkey Fitness Studio',
  description: 'Where Strength Meets Movement. Unconventional training in Kolkata.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#0f0a07] text-[#e4e3e0] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
