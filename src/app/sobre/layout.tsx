import { Suspense } from 'react';

export const metadata = {
  title: 'Sobre - Catflix',
  description: 'Os dados do seu filmes prediletos na palma da sua mão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
