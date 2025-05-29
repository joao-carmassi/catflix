import { Card, CardContent } from '@/components/ui/card';
import { IFilme } from '@/interface/IFilme';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
  filme: IFilme;
  temporada?: number;
  ep?: number;
  atual?: boolean;
}

export default function CardParaAssistir({
  filme,
  temporada,
  ep,
  atual,
}: Props) {
  return (
    <Link
      prefetch={false}
      href={`/assistindo?nome=${slugify(`${filme.nome}`, {
        lower: true,
        strict: true,
      })}${!filme.tipo.filme ? `&temporada=${temporada}&episodio=${ep}` : ''}`}
    >
      <Card
        className={`w-full max-w-xs shadow-none border ${
          atual ? 'border-primary' : ''
        }`}
      >
        <CardContent className="p-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${filme.dados.backdrop_path}`}
            alt=""
            className="relative aspect-video bg-muted border-t-card"
          />
          <div className="pt-3 pb-4 px-6">
            {filme.tipo.filme ? (
              <>
                <p className="mt-1 font-semibold text-sm text-muted-foreground">
                  {filme.nome}
                </p>
              </>
            ) : (
              <>
                <h2 className="text-sm text-gray-400 break-words">
                  {filme.nome}
                </h2>
                <p className="mt-1 font-semibold text-sm text-muted-foreground">
                  Episódio {ep}
                </p>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
