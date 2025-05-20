'use client';

import { useEffect, useState } from 'react';
import ContainerBanner from './ContainerBanner';
import ContainerCard from './ContainerCards';
import ContainerLoading from '@/components/ContainerLoading';
import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';

export default function Home() {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);

  useEffect(() => {
    HTTP.dataFilmes
      .get('/data')
      .then((res) => setFilmes(res.data as IFilme[]))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const [loading, setLoading] = useState(true);
  if (loading) {
    return <ContainerLoading />;
  }

  if (filmes === null) return null;

  return (
    <main className="bg-base-200 -z-20 min-h-svh">
      <ContainerBanner filmes={filmes} />
      <ContainerCard filmes={filmes} />
    </main>
  );
}
