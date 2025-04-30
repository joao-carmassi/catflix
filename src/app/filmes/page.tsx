import { Suspense } from 'react';
import ContainerPesquisa from './ContainerPesquisa';

const PaginaPesquisa = () => {
  return (
    <main className="min-h-svh">
      <Suspense fallback={<div>Carregando...</div>}>
        <ContainerPesquisa />
      </Suspense>
    </main>
  );
};

export default PaginaPesquisa;
