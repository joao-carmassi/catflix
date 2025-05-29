'use client';

import ContainerFilmeSerie from '@/components/ContainerFilmeSerie';
import ContainerLoading from '@/components/ContainerLoading';
import { IFilme } from '@/interface/IFilme';
import { HTTP } from '@/service/axios';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const PaginaSeries = () => {
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

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  if (loading) return <ContainerLoading />;
  if (erro) return notFound();

  const filmesFiltrados = filmes?.filter((filme) => !filme.tipo.filme);

  return (
    <main
      className={`pt-18 min-h-screen pb-5 
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

export default PaginaSeries;
