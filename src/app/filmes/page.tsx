import { Suspense } from 'react';
import ContainerPesquisa from './ContainerPesquisa';
import { HTTP } from '@/http/axios';
import { IFilme } from '@/interface/IFilme';

const PaginaPesquisa = async () => {
  const filmes = await HTTP.serverFilmesApi.get('').then((response) => {
    return response.data.data as IFilme[];
  });

  return (
    <main>
      <Suspense fallback={<div>Carregando...</div>}>
        <ContainerPesquisa filmes={filmes} />
      </Suspense>
    </main>
  );
};

export default PaginaPesquisa;
