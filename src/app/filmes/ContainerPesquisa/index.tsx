'use client';

import CardFilme from '@/app/components/CardFilme';
import filmes from '@/db.json';
import { IFilme } from '@/interface/IFilme';
import { useSearchParams } from 'next/navigation';

const ContainerPesquisa = () => {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome') as string;

  const filmesFiltrados = filmes.data
    .filter((filme: IFilme) => {
      const nomeMatch = filme?.nome?.toLowerCase().includes(nome.toLowerCase());
      const produtoraMatch = filme?.dados?.production_companies?.some(
        (company) => company?.name?.toLowerCase().includes(nome.toLowerCase())
      );
      const generoMatch = filme?.dados?.genres?.some((genre) =>
        genre?.name?.toLowerCase().includes(nome.toLowerCase())
      );

      return nomeMatch || produtoraMatch || generoMatch;
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <section className="pt-18 pb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5">
      {filmesFiltrados.length > 0 ? (
        filmesFiltrados.map((filme: IFilme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </section>
  );
};

export default ContainerPesquisa;
