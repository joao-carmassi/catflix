import { Suspense } from 'react';
import ContainerPesquisa from './ContainerPesquisa';

export const metadata = {
  title: 'Lista de filmes - Catflix',
  description: 'Seus filmes prediletos na palma da sua mão',
};

const PaginaPesquisa = () => {
  return (
    <main className="min-h-svh pt-18">
      <Suspense>
        <ContainerPesquisa />
      </Suspense>
    </main>
  );
};

export default PaginaPesquisa;
