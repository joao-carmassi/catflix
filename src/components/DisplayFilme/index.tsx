'use client';

import { IFilme } from '@/interface/IFilme';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
  filme: IFilme;
  temporada?: string;
  ep?: string;
}

const DisplayFilme = ({ filme, temporada, ep }: Props) => {
  const proximoEp = verificaProximaTemporda();
  const epAnterior = verificaEpisodioAnterior();

  function verificaProximaTemporda() {
    const temp = Number(temporada);
    const episodio = Number(ep);
    const temporadas = filme.tipo.temporadas;

    if (!filme.tipo.filme) {
      const temporadaAtual = temporadas.find((t) => t.temporada === temp);
      const temporadaSeguinte = temporadas.find(
        (t) => t.temporada === temp + 1
      );

      if (temporadaAtual && episodio < temporadaAtual.episodios) {
        return `/assistindo/?nome=the-last-of-us&temporada=${temp}&episodio=${
          episodio + 1
        }`;
      } else if (temporadaSeguinte) {
        return `/assistindo/?nome=the-last-of-us&temporada=${
          temp + 1
        }&episodio=1`;
      }
    }
    return false;
  }

  function verificaEpisodioAnterior() {
    const temp = Number(temporada);
    const episodio = Number(ep);
    const temporadas = filme.tipo.temporadas;

    if (!filme.tipo.filme) {
      const temporadaAnterior = temporadas.find(
        (t) => t.temporada === temp - 1
      );

      if (episodio > 1) {
        return `/assistindo/?nome=the-last-of-us&temporada=${temp}&episodio=${
          episodio - 1
        }`;
      } else if (temporadaAnterior) {
        return `/assistindo/?nome=the-last-of-us&temporada=${
          temp - 1
        }&episodio=${temporadaAnterior.episodios}`;
      }
    }
    return false;
  }

  return (
    <div>
      {!filme.tipo.filme ? (
        <div className="p-5 rounded-t-card bg-card flex justify-center flex-col gap-1">
          <Link
            href={`/sobre/?nome=${slugify(filme.nome, {
              strict: true,
              lower: true,
            })}`}
            className="font-semibold text-card-foreground text-lg md:text-2xl"
          >
            {filme.nome}
          </Link>
          <div className="flex gap-2">
            <p className="md:text-lg text-gray-400">Temporada {temporada}</p>
            <p className="md:text-lg text-gray-400">Episodio {ep}</p>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-t-card bg-card flex justify-center flex-col gap-1">
          <Link
            href={`/sobre/?nome=${slugify(filme.nome, {
              strict: true,
              lower: true,
            })}`}
            className="font-semibold text-card-foreground text-lg md:text-2xl"
          >
            {filme.nome}
          </Link>
        </div>
      )}
      <video
        key={`${filme}-${temporada}-${ep}`}
        controls
        className="w-full border-2 border-border"
      >
        <source
          src={`https://server-catflix.loca.lt/${filme?.caminho}${
            !filme.tipo.filme ? `/${temporada}/${ep}.mkv` : ''
          }`}
          type="video/webm"
        />
        Download the
        <a
          href={`https://server-catflix.loca.lt/${filme?.caminho}${
            !filme.tipo.filme ? `/${temporada}/${ep}.mkv` : ''
          }`}
        >
          WEBM
        </a>
      </video>
      {!filme.tipo.filme && (
        <div className="rounded-b-card bg-card flex items-center justify-between text-card-foreground">
          {epAnterior ? (
            <Link
              href={epAnterior as string}
              className="grid place-items-center hover:bg-primary/80 hover:cursor-pointer disabled:bg-gray-600 disabled:text-foreground p-2 md:p-3 px-4 md:px-6 h-full bg-primary text-background font-semibold text-sm md:text-base rounded-bl-card"
            >
              <ArrowBigLeftDash className="p-0.5 md:p-0" />
            </Link>
          ) : (
            <div className="h-full grid place-items-center bg-gray-600 text-foreground p-2 md:p-3 px-4 md:px-6 font-semibold rounded-br-card text-sm md:text-base">
              <ArrowBigLeftDash className="p-0.5 md:p-0" />
            </div>
          )}
          {proximoEp ? (
            <Link
              href={proximoEp as string}
              className="grid place-items-center hover:bg-primary/80 hover:cursor-pointer disabled:bg-gray-600 disabled:text-foreground p-2 md:p-3 px-4 md:px-6 h-full bg-primary text-background font-semibold text-sm md:text-base rounded-br-card"
            >
              <ArrowBigRightDash className="p-0.5 md:p-0" />
            </Link>
          ) : (
            <div className="h-full grid place-items-center bg-gray-600 text-foreground p-2 md:p-3 px-4 md:px-6 font-semibold rounded-br-card text-sm md:text-base">
              <ArrowBigRightDash className="p-0.5 md:p-0" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayFilme;
