import { IFilme } from '@/interface/IFilme';
import Link from 'next/link';

interface Props {
  filme: IFilme;
}

const CardFilme = ({ filme }: Props) => {
  return (
    <Link
      href={`/filme?id=${filme.id}`}
      className="relative shadow-2xs cursor-pointer group"
    >
      <img
        className="w-full h-32 md:h-40 rounded-card object-cover object-center"
        src={`https://image.tmdb.org/t/p/w500${filme.dados.backdrop_path}`}
        alt={`Card do filme ${filme.nome}`}
      />
      <div
        style={{ transitionDuration: '.1s' }}
        className="absolute group-hover:opacity-0 bg-card h-full rounded-card top-0 start-0 end-0"
      >
        <div className="p-4 md:p-5">
          <h3 className="text-sm md:text-md lg:text-lg font-bold text-white break-words">
            {filme.nome}
          </h3>
          <p className="hidden md:block text-white">
            {filme.dados.tagline || ''}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardFilme;
