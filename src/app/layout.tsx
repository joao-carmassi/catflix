import type { Metadata } from 'next';
import '@/styles/globals.css';
import PrelineScriptWrapper from './components/PrelineScriptWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Catflix',
  description: 'Seus filmes prediletos na palma da sua mão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-base-200">
        <Navbar />
        {children}
        <Footer />
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
