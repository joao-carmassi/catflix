import { Suspense } from 'react';

export const metadata = {
  title: 'Serie - Catflix',
  description: 'Suas series prediletos na palma da sua mão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
