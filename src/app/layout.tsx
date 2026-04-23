import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Swane Creative | Prosjekter',
  description: 'Landingsside for Swane Creative – et kreativt univers hvor netthandel, entreprenørskap og visuelle prosjekter møtes.',
  keywords: 'Swane Creative, netthandel, entreprenørskap, gadgets, gratistjenester, affiliate marketing, prosjekter',
  authors: [{ name: 'Swane Creative' }],
  creator: 'Swane Creative',
  publisher: 'Swane Creative',
  icons: {
    icon: { url: '/bilder/favicon_s_512x512.png', sizes: '512x512', type: 'image/png' },
    // apple: '/apple-touch-icon.png', // You can add an apple touch icon if you have one
  },
  // manifest: '/site.webmanifest', // if you have one
};

export const viewport: Viewport = {
  themeColor: '#ffffff', // Corresponds to new top background color (white)
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
