'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import ContainerLoading from '@/components/ContainerLoading';
import { notFound } from 'next/navigation';
import CardFilme from '@/components/CardFilme/card-filmes';
import slugify from 'slugify';

const ContainerPesquisa = () => {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const searchParams = useSearchParams();
  const nome = searchParams.get('nome')?.toLowerCase() || '';

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

  const filmesFiltrados = useMemo(() => {
    if (!filmes) return [];

    const nomeSlug = slugify(nome, { lower: true });

    const generoMatchExato = (text: string) => {
      const words = slugify(text || '', { lower: true }).split('-');
      return words.includes(nomeSlug);
    };

    return filmes
      .filter((filme) => {
        const nomeMatch = slugify(filme?.nome || '', { lower: true }).includes(
          nomeSlug
        );
        const produtoraMatch = filme?.dados?.production_companies?.some(
          (company) =>
            slugify(company?.name || '', { lower: true }).includes(nomeSlug)
        );
        const generoMatch = filme?.dados?.genres?.some((genre) =>
          generoMatchExato(genre?.name)
        );
        return nomeMatch || produtoraMatch || generoMatch;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [filmes, nome]);

  if (loading) return <ContainerLoading />;
  if (erro) return notFound();
  if (!filmes) return null;

  return (
    <section
      key={filmesFiltrados.length}
      className={`grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5 transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setLoaded(true)}
    >
      {filmesFiltrados.length > 0 ? (
        filmesFiltrados.map((filme) => (
          <CardFilme key={filme.dados.id} filme={filme} />
        ))
      ) : (
        <p>Nenhum filme encontrado ;-;</p>
      )}
    </section>
  );
};

export default ContainerPesquisa;
