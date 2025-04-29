'use client';

import { useRouter } from 'next/navigation';
import styles from './ContanerBanner.module.css';
import filmes from '@/db.json';
import { useEffect, useState } from 'react';
import { IFilme } from '@/interface/IFilme';

const ContainerBanner = () => {
  const route = useRouter();
  const [filme, setFilme] = useState(null as IFilme | null);

  useEffect(() => {
    const random = Math.floor(Math.random() * filmes.data.length);
    setFilme(filmes.data[random]);
  }, []);

  if (!filme) return null;

  return (
    <section className="h-svh relative max-h-[60rem] z-0">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w1920${filme.dados.backdrop_path}`}
        alt=""
      />
      <div
        className={`${styles.banner} absolute flex top-0 flex-col w-full gap-3 md:gap-5 h-full items-start justify-center px-5 md:px-20 text-white`}
      >
        <h2 className="capitalize drop-shadow-md drop-shadow-black font-semibold text-3xl md:text-5xl lg:text-7xl">
          {filme.nome}
        </h2>
        <p className="text-xl hidden md:block md:w-1/2 drop-shadow-md drop-shadow-black">
          {filme.dados.overview}
        </p>
        <button
          style={{ transitionDuration: '.2s' }}
          className="bg-white cursor-pointer hover:bg-primary hover:text-white drop-shadow-md drop-shadow-black flex items-center gap-1 text-black px-3 text-lg py-2 md:px-5 md:text-xl md:py-3 rounded-input font-semibold"
          onClick={() => {
            route.push(`/filme?id=${filme.id}`);
          }}
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
        </button>
      </div>
    </section>
  );
};

export default ContainerBanner;
