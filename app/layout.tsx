import type { Metadata } from 'next';
import { Satisfy, Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-satisfy',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cata Elegance - Elegancia suave, hecha para vos',
  description: 'Descubrí nuestra colección de prendas suaves y elegantes. Ropa femenina premium que te hace sentir única.',
  keywords: 'ropa femenina, elegancia, moda argentina, prendas suaves, cata elegance',
  openGraph: {
    title: 'Cata Elegance - Elegancia suave, hecha para vos',
    description: 'Descubrí nuestra colección de prendas suaves y elegantes',
    url: 'https://cataelegance.com',
    siteName: 'Cata Elegance',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${satisfy.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
