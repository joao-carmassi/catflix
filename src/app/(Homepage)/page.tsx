'use client';

import { useEffect, useState } from 'react';
import ContainerBannerInfo from '../../components/ContainerBannerInfo';
import ContainerCard from './ContainerCards';
import ContainerLoading from '@/components/ContainerLoading';
import { notFound } from 'next/navigation';
import { useAppContext } from '@/context';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [random, setRandom] = useState(0);

  const { filmes, loading, erro } = useAppContext();

  useEffect(() => {
    if (filmes && filmes.length > 0) {
      setRandom(Math.floor(Math.random() * filmes.length));
    }
  }, [filmes]);

  if (loading) return <ContainerLoading />;
  if (erro) return notFound();
  if (!filmes) return null;

  const filme = filmes[random];

  return (
    <main
      className={`-z-20 min-h-svh transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setLoaded(true)}
    >
      <ContainerBannerInfo filme={filme} />
      <ContainerCard filmes={filmes} />
    </main>
  );
}
