'use client';

import { IFilme } from '@/interface/IFilme';
import CardDados from '../CardDados';

interface Props {
  filmes: IFilme[];
}

const ContainerFilmeSerie = ({ filmes }: Props) => {
  return (
    <section
      key={filmes.length}
      className={`pt-18 grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5 transition-opacity duration-1000`}
    >
      {filmes.length > 0 ? (
        filmes.map((filme) => <CardDados key={filme.dados.id} filme={filme} />)
      ) : (
        <p>Nenhum filme encontrado ;-;</p>
      )}
    </section>
  );
};

export default ContainerFilmeSerie;
