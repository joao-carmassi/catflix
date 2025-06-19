'use client';

import ContainerFilmeSerie from '@/components/ContainerFilmeSerie';
import ContainerLoading from '@/components/ContainerLoading';
import { useAppContext } from '@/context';
import { IFilme } from '@/interface/IFilme';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const PaginaConteudos = () => {
  const [loaded, setLoaded] = useState(false);

  const { filmes, loading, erro } = useAppContext();

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  if (loading) return <ContainerLoading />;
  if (erro) return notFound();

  const filmesFiltrados = filmes;

  return (
    <main
      className={`min-h-screen pb-5 
    transition-opacity duration-500
    ${loaded ? 'opacity-100' : 'opacity-0'}
  `}
    >
      {filmesFiltrados?.length && (
        <ContainerFilmeSerie filmes={filmesFiltrados as IFilme[]} />
      )}
    </main>
  );
};

export default PaginaConteudos;
