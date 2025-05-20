import { Suspense } from 'react';

export const metadata = {
  title: 'Filme - Catflix',
  description: 'Seus filmes prediletos na palma da sua mão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
