'use client';

import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContainerLoading from '@/components/ContainerLoading';
import slugify from 'slugify';
import Home from '../(Homepage)/page';
import DisplayFilme from '@/components/DisplayFilme';
import DisplayEps from '@/components/DisplayEps';

const PaginaSerie = () => {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome');
  const temporada = searchParams.get('temporada');
  const episodio = searchParams.get('episodio');

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

  if (!filme.tipo.filme) {
    if (!temporada || !episodio) return <Home />;

    const temporadaNum = parseInt(temporada);
    const episodioNum = parseInt(episodio);

    const temporadaExiste = filme.tipo.temporadas.some(
      (t) => t.temporada === temporadaNum && t.episodios >= episodioNum
    );

    if (!temporadaExiste) return <Home />;
  }

  return (
    <main
      className={`min-h-screen pt-18 pb-5 transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <section className="w-full px-5 lg:px-20">
        {filme.tipo.filme ? (
          <>
            <DisplayFilme filme={filme} />
            {/* <DisplayEps filme={filme} /> */}
          </>
        ) : (
          <>
            <DisplayFilme
              filme={filme}
              temporada={temporada as string}
              ep={episodio as string}
            />
            <DisplayEps
              filme={filme}
              temporada={Number(temporada)}
              temporadaAtual={Number(temporada)}
              epAtual={Number(episodio)}
            />
          </>
        )}
      </section>
    </main>
  );
};

export default PaginaSerie;
