// 'use client';

import CardFilme from '@/app/components/CardFilme';
import { HTTP } from '@/http/axios';
import { IFilme } from '@/interface/IFilme';
// import { useState, useEffect } from 'react';
// import { HTTP } from '@/http/axios';
// import { IFilme } from '@/interface/IFilme';

const ContainerCards = async () => {
  // const [filmes, setFilmes] = useState<IFilme[] | null>(null);

  // useEffect(() => {
  //   HTTP.serverFilmesApi
  //     .get('')
  //     .then((res) => setFilmes(res.data.data as IFilme[]))
  //     .catch((err) => console.error(err));
  // }, []);

  // if (filmes === null) return null;

  const filmes: IFilme[] = await HTTP.serverFilmesApi
    .get('')
    .then((res) => res.data.data);

  const generos = Array.from(
    new Set(filmes.flatMap((f) => f.dados.genres.map((g) => g.name)))
  ).sort((a, b) => a.localeCompare(b));

  console.log(filmes);
  return (
    <section className="-mt-[6rem] pb-3 md:-mt-[9.25rem] flex flex-col gap-15 relative z-10">
      {generos.map((genero, i) => (
        <div key={i}>
          <h1 className="text-2xl md:text-3xl px-3 md:px-15 font-semibold text-text mb-2">
            {genero}:
          </h1>
          <div className="w-full px-3">
            <div
              data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "slidesQty": { "xs": 2, "sm": 3, "md": 4, "lg": 6 },
                "isDraggable": true
              }'
              className="relative hs-carousel w-full overflow-hidden"
            >
              <div className="hs-carousel-body flex transition-transform duration-700">
                {filmes
                  .filter((f) => f.dados.genres.some((g) => g.name === genero))
                  .map((filme, idx) => (
                    <div key={idx} className="hs-carousel-slide px-1">
                      <CardFilme filme={filme} />
                    </div>
                  ))}
              </div>
              {/* botões e paginação igual ao exemplo SSG */}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContainerCards;
