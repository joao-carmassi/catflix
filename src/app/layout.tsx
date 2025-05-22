import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    ! Colocar link imagem ao buscar filme
    ? Series
    * Melhorar pagina pesquisa e nav
  */

  return (
    <html lang="pt-BR">
      <body className="dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
