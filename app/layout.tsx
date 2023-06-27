import { Inter } from 'next/font/google';

import MainHeader from './components/main-header/main-header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Argentinska IF',
  description: 'Argentinska IF official page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <main className='m-10'>{children}</main>
      </body>
    </html>
  );
}
