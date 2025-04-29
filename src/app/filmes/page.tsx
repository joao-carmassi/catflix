import { Suspense } from 'react';
import ContainerPesquisa from './ContainerPesquisa';

const PaginaPesquisa = () => {
  return (
    <main>
      <Suspense fallback={<div>Carregando...</div>}>
        <ContainerPesquisa />
      </Suspense>
    </main>
  );
};

export default PaginaPesquisa;
