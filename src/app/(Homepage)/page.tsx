'use client';

import { useEffect, useState } from 'react';
import ContainerBannerInfo from '../../components/ContainerBannerInfo';
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
  const [random, setRandom] = useState(0);

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
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      className={` -z-20 min-h-svh transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setLoaded(true)}
    >
      <ContainerBannerInfo filme={filme} />
      <ContainerCard filmes={filmes} />
    </main>
  );
}
