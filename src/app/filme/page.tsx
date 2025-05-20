'use client';

import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DadosFilme from './ConteudoFilme';
import Home from '../(homepage)/page';
import VideoFilme from './VideoFilme';
import ContainerLoading from '@/components/ContainerLoading';
import slugify from 'slugify';

const PaginaFilme = () => {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome');

  const [erro, setErro] = useState(false);
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);

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

  const [loading, setLoading] = useState(true);
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
    <main className="pt-20 bg-base-200 min-h-svh px-5  mx-auto max-w-[90rem]">
      <VideoFilme filme={filme} />
      <DadosFilme filme={filme} />
    </main>
  );
};

export default PaginaFilme;
