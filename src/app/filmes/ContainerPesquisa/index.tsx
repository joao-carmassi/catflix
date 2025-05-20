'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import CardFilme from '@/components/CardFilme';
import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import ContainerLoading from '@/components/ContainerLoading';

const ContainerPesquisa = () => {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome')?.toLowerCase() || '';

  useEffect(() => {
    HTTP.dataFilmes
      .get('/data')
      .then((res) => setFilmes(res.data as IFilme[]))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
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

  const [loading, setLoading] = useState(true);
  if (loading) {
    return <ContainerLoading pageSize="min-h-container" />;
  }

  if (!filmes) return null;

  return (
    <section
      key={filmesFiltrados.length}
      className="pb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5"
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
