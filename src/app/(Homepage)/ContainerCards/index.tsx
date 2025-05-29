'use client';

import CarroselFilmes from '@/components/carousel-filmes';
import { IFilme } from '@/interface/IFilme';

interface Props {
  filmes: IFilme[];
}

const ContainerCards = ({ filmes }: Props) => {
  const generos = Array.from(
    new Set(filmes.flatMap((f) => f.dados.genres.map((g) => g.name)))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <section className="-mt-[6rem] pb-5 md:px-5 md:-mt-[9.25rem] flex flex-col gap-15 relative z-10">
      {generos.map((genero, i) => (
        <div key={i}>
          <h1 className="text-2xl md:text-3xl px-3 md:px-15 font-semibold text-text mb-2">
            {genero}:
          </h1>
          <CarroselFilmes filmes={filmes} genero={genero} />
        </div>
      ))}
    </section>
  );
};

export default ContainerCards;
