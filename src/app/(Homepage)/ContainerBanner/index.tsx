'use client';

import { Button } from '@/components/ui/button';
import styles from './ContanerBanner.module.css';
import { useRouter } from 'next/navigation';
import { IFilme } from '@/interface/IFilme';
import slugify from 'slugify';

interface Props {
  filmes: IFilme[];
}

const ContainerBanner = ({ filmes }: Props) => {
  const router = useRouter();

  const random = Math.floor(Math.random() * filmes.length);
  const filme = filmes[random];

  return (
    <section className="h-svh relative max-h-[60rem] z-0">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w1920${filme.dados.backdrop_path}`}
        alt=""
      />
      <div
        className={`${styles.banner} absolute flex top-0 flex-col w-full gap-3 h-full items-start justify-center px-5 md:px-20 text-white`}
      >
        <h2 className="capitalize drop-shadow-md drop-shadow-black/80 font-semibold text-3xl md:text-5xl lg:text-7xl">
          {filme.nome}
        </h2>
        <ul className="flex font-semibold gap-3">
          {filme.dados.genres.map((item, index) => (
            <li className="drop-shadow-sm drop-shadow-black/80" key={item.name}>
              {item.name}
              {filme.dados.genres.length - 1 === index ? '' : ','}
            </li>
          ))}
        </ul>
        <p className="text-xl hidden lg:block md:w-1/2 drop-shadow-sm drop-shadow-black/80">
          {filme.dados.overview}
        </p>
        <p className="text-xl  block lg:hidden md:w-1/2 drop-shadow-sm drop-shadow-black/80">
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
    </section>
  );
};

export default ContainerBanner;
