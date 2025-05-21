'use client';

import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DadosFilme from './ConteudoFilme';
import VideoFilme from './VideoFilme';
import ContainerLoading from '@/components/ContainerLoading';
import slugify from 'slugify';
import Home from '../(Homepage)/page';

const PaginaFilme = () => {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome');

  const [loaded, setLoaded] = useState(false);
  const [erro, setErro] = useState(false);
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  if (loading) {
    return <ContainerLoading />;
  }

  if (erro) return notFound();
  if (filmes === null) return null;

  const filme = filmes.find(
    (filme) =>
      slugify(filme.nome, {
        lower: true,
        strict: true,
      }) === nome
  );

  if (filme === undefined) return <Home />;

  return (
    <main
      className={`pt-20 bg-base-200 min-h-svh px-5  mx-auto max-w-[90rem] transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <VideoFilme filme={filme} />
      <DadosFilme filme={filme} />
    </main>
  );
};

export default PaginaFilme;
