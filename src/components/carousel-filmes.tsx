'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
// import { cn } from '@/lib/utils';
import { IFilme } from '@/interface/IFilme';
import CardDados from './CardDados';

interface Props {
  filmes: IFilme[];
  genero: string;
}

export default function CarroselFilmes({ filmes, genero }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, filmes]);

  return (
    <div className="mx-auto w-full md:px-10">
      <Carousel
        opts={{
          skipSnaps: true,
          dragFree: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {filmes
            .filter((f) => f.dados.genres.some((g) => g.name === genero))
            .map((filme, idx) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
                key={idx}
              >
                <CardDados filme={filme} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      {/* <div className="hidden mt-4 md:flex items-center justify-end gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn('h-3.5 w-3.5 rounded-full border-2 border-white/80', {
              'border-primary bg-primary': current === index + 1,
            })}
          />
        ))}
      </div> */}
    </div>
  );
}

