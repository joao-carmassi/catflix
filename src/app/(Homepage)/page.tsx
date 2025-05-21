'use client';

import { useEffect, useState } from 'react';
import ContainerBanner from './ContainerBanner';
import ContainerCard from './ContainerCards';
import ContainerLoading from '@/components/ContainerLoading';
import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import { notFound } from 'next/navigation';

export default function Home() {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    HTTP.dataFilmes
      .get('/data')
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setErro(true);
        } else {
          setFilmes(res.data as IFilme[]);
        }
      })
      .catch((err) => {
        console.error(err);
        setErro(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ContainerLoading />;
  if (erro) return notFound();
  if (!filmes) return null;

  return (
    <main
      className={`bg-base-200 -z-20 min-h-svh transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setLoaded(true)}
    >
      <ContainerBanner filmes={filmes} />
      <ContainerCard filmes={filmes} />
    </main>
  );
}
