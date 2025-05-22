'use client';

import { Button } from '@/components/ui/button';
import styles from './ContanerBanner.module.css';
import { useRouter } from 'next/navigation';
import { IFilme } from '@/interface/IFilme';
import slugify from 'slugify';
import { useState } from 'react';

interface Props {
  filme: IFilme;
  tamanho?: string;
  home?: boolean;
}

const ContainerBanner = ({
  filme,
  tamanho = 'h-svh min-h-[45rem]',
  home = true,
}: Props) => {
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <section className={`${tamanho} relative max-h-[60rem] z-0`}>
        <img
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          src={`https://image.tmdb.org/t/p/w1920${filme.dados.backdrop_path}`}
          alt=""
        />
        <div
          className={`${styles.banner} ${
            home ? 'items-start justify-center' : 'items-start justify-end'
          } absolute flex top-0 flex-col w-full gap-1 lg:gap-3 h-full justify-center px-5 md:px-20 text-white`}
        >
          <h2
            className={`${
              home ? 'text-3xl md:text-5xl lg:text-7xl' : 'text-3xl md:text-5xl'
            } capitalize drop-shadow-md drop-shadow-black/80 font-semibold `}
          >
            {filme.nome}
          </h2>
          <div
            className={`${
              home ? '' : 'hidden'
            } flex flex-col items-start gap-1 lg:gap-3`}
          >
            <p className="font-semibold gap-3 drop-shadow-sm drop-shadow-black/80">
              {filme.dados.genres.map((categoria) => categoria.name).join(', ')}
            </p>
            <p className="text-xl hidden lg:block md:w-1/2 drop-shadow-sm drop-shadow-black/80">
              {filme.dados.overview}
            </p>
            <p className="text-xl block lg:hidden md:w-1/2 drop-shadow-sm drop-shadow-black/80">
              {filme.dados.tagline}
            </p>
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
        </div>
      </section>
      <section
        className={`${
          home ? 'hidden' : 'block'
        } px-5 md:px-20 mt-2 grid gap-y-3 gap-x-5 grid-flow-row md:grid-cols-2`}
      >
        <p className="text-text text-base md:text-lg text-gray-400 col-span-2">
          <span className="text-foreground font-semibold">Description:</span>{' '}
          {filme?.dados.overview}
        </p>
        <p className="text-text text-base md:text-lg text-gray-400">
          <span className="text-foreground font-semibold">Release date:</span>{' '}
          {filme?.dados.release_date.split('-').reverse().join('/')}
        </p>
        <p className="text-text text-base md:text-lg text-gray-400">
          <span className="text-foreground font-semibold">Rating:</span>{' '}
          {filme?.dados.vote_average.toFixed(1)}
        </p>
        <p className="text-text text-base md:text-lg text-gray-400">
          <span className="text-foreground font-semibold">Genres:</span>{' '}
          {filme?.dados.genres.map((genre) => genre.name).join(', ')}
        </p>
        {filme?.dados.runtime && (
          <p className="text-text text-base md:text-lg text-gray-400">
            <span className="text-foreground font-semibold">Runtime:</span>{' '}
            {Math.floor(filme.dados.runtime / 60)}h {filme.dados.runtime % 60}m
          </p>
        )}
        <p className="text-text text-base md:text-lg text-gray-400">
          <span className="text-foreground font-semibold">Origin Country:</span>{' '}
          {filme?.dados.origin_country.map((country) => country).join(', ')}
        </p>
        <p className="text-text text-base md:text-lg text-gray-400">
          <span className="text-foreground font-semibold">
            Production Companies:
          </span>{' '}
          {filme?.dados.production_companies
            .map((company) => company.name)
            .join(', ')}
        </p>
      </section>
    </>
  );
};

export default ContainerBanner;
