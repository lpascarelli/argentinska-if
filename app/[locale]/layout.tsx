import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import MainHeader from '../../components/layout/main-header/main-header';
import Footer from '../../components/layout/footer/footer';

import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'sv' }];
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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainHeader />
          <main className='m-10'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
