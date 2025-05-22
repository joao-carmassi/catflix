'use client';

import { IFilme } from '@/interface/IFilme';
import Link from 'next/link';

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
        return `/serie/?nome=the-last-of-us&temporada=${temp}&episodio=${
          episodio + 1
        }`;
      } else if (temporadaSeguinte) {
        return `/serie/?nome=the-last-of-us&temporada=${temp + 1}&episodio=1`;
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
        return `/serie/?nome=the-last-of-us&temporada=${temp}&episodio=${
          episodio - 1
        }`;
      } else if (temporadaAnterior) {
        return `/serie/?nome=the-last-of-us&temporada=${temp - 1}&episodio=${
          temporadaAnterior.episodios
        }`;
      }
    }
    return false;
  }

  return (
    <div>
      {!filme.tipo.filme && (
        <div className="p-5 rounded-t-card bg-card flex justify-center flex-col gap-1">
          <h2 className="font-semibold text-card-foreground text-lg md:text-2xl">
            {filme.nome}
          </h2>
          <div className="flex gap-2">
            <p className="md:text-lg text-gray-400">Temporada {temporada}</p>
            <p className="md:text-lg text-gray-400">Episodio {ep}</p>
          </div>
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
        <div className="h-10 md:h-14 rounded-b-card bg-card flex items-center justify-between text-card-foreground">
          {epAnterior ? (
            <Link
              href={epAnterior as string}
              className="grid place-items-center hover:bg-primary/80 hover:cursor-pointer disabled:bg-gray-600 disabled:text-foreground px-3 md:px-5 h-full bg-primary text-background font-semibold text-sm md:text-base rounded-bl-card"
            >
              Episodio anterior
            </Link>
          ) : (
            <div className="h-full grid place-items-center bg-gray-600 text-foreground px-3 md:px-5 font-semibold rounded-br-card text-sm md:text-base">
              Episodio anterior
            </div>
          )}
          {proximoEp ? (
            <Link
              href={proximoEp as string}
              className="grid place-items-center hover:bg-primary/80 hover:cursor-pointer disabled:bg-gray-600 disabled:text-foreground px-3 md:px-5 h-full bg-primary text-background font-semibold text-sm md:text-base rounded-br-card"
            >
              Proximo episodio
            </Link>
          ) : (
            <div className="h-full grid place-items-center bg-gray-600 text-foreground px-3 md:px-5 font-semibold rounded-br-card text-sm md:text-base">
              Proximo episodio
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayFilme;
