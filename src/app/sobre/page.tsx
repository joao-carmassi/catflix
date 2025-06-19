'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContainerLoading from '@/components/ContainerLoading';
import slugify from 'slugify';
import Home from '../(Homepage)/page';
import ContainerBannerInfo from '../../components/ContainerBannerInfo';
import DisplayEps from '@/components/DisplayEps';
import { useAppContext } from '@/context';

const PaginaFilme = () => {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome');

  const [loaded, setLoaded] = useState(false);

  const { filmes, loading, erro } = useAppContext();

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
      className={`min-h-screen pb-5 transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ContainerBannerInfo
        filme={filme}
        home={false}
        tamanho="h-[25rem] md:h-[40rem]"
      />
      <section className="w-full px-5 md:px-20 mt-3">
        <DisplayEps filme={filme} />
      </section>
    </main>
  );
};

export default PaginaFilme;
