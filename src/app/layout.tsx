import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css';
import { RootProvider } from '../providers';
import { Navigation } from '@/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alison Full Stack Assessment',
  description:
    'Full stack developer assessment with React, Next.js, and PostgreSQL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <RootProvider>
          <Navigation />
          <CssBaseline />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
