import { IFilme } from '@/interface/IFilme';

interface Props {
  filme: IFilme;
}

const DadosFilme = ({ filme }: Props) => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <section className="mb-5 grid gap-y-3 gap-x-5 grid-flow-row grid-cols-2">
        <p className="text-text text-base md:text-lg col-span-2">
          <span className="text-text font-semibold">Description:</span>{' '}
          {filme?.dados.overview}
        </p>
        <p className="text-text text-base md:text-lg">
          <span className="text-text font-semibold">Release date:</span>{' '}
          {filme?.dados.release_date.split('-').reverse().join('/')}
        </p>
        <p className="text-text text-base md:text-lg">
          <span className="text-text font-semibold">Rating:</span>{' '}
          {filme?.dados.vote_average.toFixed(1)}
        </p>
        <p className="text-text text-base md:text-lg">
          <span className="text-text font-semibold">Genres:</span>{' '}
          {filme?.dados.genres.map((genre) => genre.name).join(', ')}
        </p>
        {filme?.dados.runtime && (
          <p className="text-text text-base md:text-lg">
            <span className="text-text font-semibold">Runtime:</span>{' '}
            {Math.floor(filme.dados.runtime / 60)}h {filme.dados.runtime % 60}m
          </p>
        )}
        <p className="text-text text-base md:text-lg">
          <span className="text-text font-semibold">Origin Country:</span>{' '}
          {filme?.dados.origin_country.map((country) => country).join(', ')}
        </p>
        <p className="text-text text-base md:text-lg">
          <span className="text-text font-semibold">Production Companies:</span>{' '}
          {filme?.dados.production_companies
            .map((company) => company.name)
            .join(', ')}
        </p>
      </section>
    </section>
  );
};

export default DadosFilme;
