'use client';

import { Button } from '@/components/ui/button';
import styles from './ContanerBanner.module.css';
import { useRouter } from 'next/navigation';
import { IFilme } from '@/interface/IFilme';
import slugify from 'slugify';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { useMemo, useState } from 'react';

interface Props {
  filmes: IFilme[];
}

const ContainerBanner = ({ filmes }: Props) => {
  const router = useRouter();

  const random = useMemo(
    () => Math.floor(Math.random() * filmes.length),
    [filmes]
  );
  const filme = filmes[random];
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="min-h-[45rem] h-svh relative max-h-[60rem] z-0">
      <img
        src={`https://image.tmdb.org/t/p/w1920${filme.dados.backdrop_path}`}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        alt=""
      />
      <div
        className={`${styles.banner} absolute flex top-0 flex-col w-full gap-1 md:gap-3 h-full items-start justify-center px-5 md:px-20 text-white`}
      >
        <div className="capitalize drop-shadow-md drop-shadow-black/80 font-semibold text-3xl md:text-5xl lg:text-7xl">
          <TextEffect speedReveal={0.5} as="h2" per="char" preset="fade">
            {filme.nome}
          </TextEffect>
        </div>
        <div className="drop-shadow-sm font-semibold drop-shadow-black/80">
          <TextEffect speedReveal={0.5} delay={1} per="word" preset="slide">
            {filme.dados.genres.map((genre) => genre.name).join(', ')}
          </TextEffect>
        </div>
        <div className="text-xl hidden lg:block md:w-1/2 drop-shadow-sm drop-shadow-black/80">
          <TextEffect
            delay={1.5}
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
          >
            {filme.dados.overview}
          </TextEffect>
        </div>
        <div className="text-xl block lg:hidden md:w-1/2 drop-shadow-sm drop-shadow-black/80">
          <TextEffect
            delay={1.5}
            preset="fade-in-blur"
            speedReveal={0.5}
            speedSegment={0.3}
          >
            {filme.dados.tagline}
          </TextEffect>
        </div>
        <Button
          onClick={() =>
            router.push(
              `/filme?nome=${slugify(filme.nome, {
                lower: true,
                strict: true,
              })}`
            )
          }
          variant="white"
          size="xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            className="inline"
          >
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"></path>
          </svg>
          Assistir
        </Button>
      </div>
    </section>
  );
};

export default ContainerBanner;
