import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppProvider from '@/context';

export const metadata: Metadata = {
  title: 'Catflix',
  description: 'Seus filmes prediletos na palma da sua mão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* TODO: Afazeres
    ! Melhorar componentes pfvr, ta mt ruim
  */

  return (
    <html lang="pt-BR">
      <body className="dark">
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
