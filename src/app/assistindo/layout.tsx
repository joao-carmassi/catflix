import { Suspense } from 'react';

export const metadata = {
  title: 'Assistindo - Catflix',
  description: 'Assistindo seus filmes prediletos onde quiser',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
