import { Card, CardContent } from '@/components/ui/card';
import { IFilme } from '@/interface/IFilme';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
  filme: IFilme;
}

export default function CardDados({ filme }: Props) {
  return (
    <Link
      prefetch={false}
      href={`/sobre?nome=${slugify(filme.nome, {
        lower: true,
        strict: true,
      })}`}
    >
      <Card className="w-full max-w-xs shadow-none">
        <CardContent className="p-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${filme.dados.backdrop_path}`}
            alt=""
            className="relative aspect-video bg-muted border-t-card"
          />
          <div className="pt-3 pb-4 px-6">
            <h2 className="font-semibold text-sm md:text-md break-words">
              {filme.nome}
            </h2>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">
              {filme.dados.tagline}
            </p>
            <p className="text-primary mt-1 font-semibold block text-xs md:text-sm">
              {filme.dados.genres.map((categoria) => categoria.name).join(', ')}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

