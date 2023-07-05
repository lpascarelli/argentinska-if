import MainHeader from './components/main-header/main-header';
import Body from './components/layout/body';
import Footer from './components/footer/footer';

import './globals.css';

export const metadata = {
  title: 'Argentinska IF',
  description: 'Argentinska IF official page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Body>
        <MainHeader />
        <main className='m-10'>{children}</main>
        <Footer />
      </Body>
    </html>
  );
}
