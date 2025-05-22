import { Card, CardContent } from '@/components/ui/card';
import { IFilme } from '@/interface/IFilme';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
  filme: IFilme;
  ep: number;
}

export default function CardSerie({ filme, ep }: Props) {
  return (
    <Link
      href={`/filme?nome=${slugify(filme.nome, {
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
            <h2 className="text-sm text-gray-400 break-words">{filme.nome}</h2>
            <p className="mt-1 font-semibold text-sm text-muted-foreground">
              Episódio {ep}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
