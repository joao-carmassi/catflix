'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import CardFilme from '@/app/components/CardFilme';
import { HTTP } from '@/http/axios';
import { IFilme } from '@/interface/IFilme';

const ContainerPesquisa = () => {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome')?.toLowerCase() || '';

  useEffect(() => {
    HTTP.serverFilmesApi
      .get('')
      .then((res) => setFilmes(res.data.data as IFilme[]))
      .catch((err) => console.error(err));
  }, []);

  const filmesFiltrados = useMemo(() => {
    if (!filmes) return [];
    return filmes
      .filter((filme) => {
        const nomeMatch = filme?.nome?.toLowerCase().includes(nome);
        const produtoraMatch = filme?.dados?.production_companies?.some(
          (company) => company?.name?.toLowerCase().includes(nome)
        );
        const generoMatch = filme?.dados?.genres?.some((genre) =>
          genre?.name?.toLowerCase().includes(nome)
        );
        return nomeMatch || produtoraMatch || generoMatch;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [filmes, nome]);

  if (!filmes) return null;

  return (
    <section
      key={filmesFiltrados.length}
      className="pt-18 pb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5"
    >
      {filmesFiltrados.length > 0 ? (
        filmesFiltrados.map((filme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))
      ) : (
        <p>Nenhum filme encontrado ;-;</p>
      )}
    </section>
  );
};

export default ContainerPesquisa;
