'use client';

import CarouselWithPagination from '@/components/carousel-06';
import { InView } from '@/components/ui/in-view';
import { IFilme } from '@/interface/IFilme';
import { motion } from 'motion/react';

interface Props {
  filmes: IFilme[];
}

const ContainerCards = ({ filmes }: Props) => {
  const generos = Array.from(
    new Set(filmes.flatMap((f) => f.dados.genres.map((g) => g.name)))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <section className="-mt-[6rem] pb-3 md:px-5 md:-mt-[9.25rem] flex flex-col gap-15 relative z-10">
      {generos.map((genero, i) => (
        <InView
          key={i}
          viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }}
        >
          <motion.div>
            <h1 className="text-2xl md:text-3xl px-3 md:px-15 font-semibold text-text mb-2">
              {genero}:
            </h1>
            <CarouselWithPagination filmes={filmes} genero={genero} />
          </motion.div>
        </InView>
      ))}
    </section>
  );
};

export default ContainerCards;
