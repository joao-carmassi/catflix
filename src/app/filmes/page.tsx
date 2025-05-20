import { Suspense } from 'react';
import ContainerPesquisa from './ContainerPesquisa';

const PaginaPesquisa = () => {
  return (
    <main className="min-h-svh pt-20">
      <Suspense>
        <ContainerPesquisa />
      </Suspense>
    </main>
  );
};

export default PaginaPesquisa;
