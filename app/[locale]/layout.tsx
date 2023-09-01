import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import MainHeader from '@/components/layout/main-header';
import Footer from '@/components/layout/footer';

import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sv' }];
}

export const metadata = {
  title: 'Argentinska IF',
  description: 'Argentinska IF official page',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='flex flex-col' style={{ minHeight: '100vh' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainHeader />
          <main className='my-10 mx-5'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
