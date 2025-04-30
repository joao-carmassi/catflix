import { Suspense } from 'react';
import ConteudoFilme from './ConteudoFilme';
import { HTTP } from '@/http/axios';

const PaginaFilme = async () => {
  const filmes = await HTTP.serverFilmesApi.get('').then((response) => {
    return response.data.data;
  });

  return (
    <main className="pt-18 bg-base-200 min-h-svh px-5">
      <div className="flex flex-col gap-5 w-full mx-auto max-w-[90rem]">
        <Suspense fallback={<div>Carregando...</div>}>
          <ConteudoFilme filmes={filmes} />
        </Suspense>
      </div>
    </main>
  );
};

export default PaginaFilme;
