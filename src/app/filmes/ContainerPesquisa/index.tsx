'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import CardFilme from '@/components/CardFilme';
import { HTTP } from '@/service/axios';
import { IFilme } from '@/interface/IFilme';
import ContainerLoading from '@/components/ContainerLoading';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';

const ContainerPesquisa = () => {
  const [filmes, setFilmes] = useState<IFilme[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const searchParams = useSearchParams();
  const nome = searchParams.get('nome')?.toLowerCase() || '';

  useEffect(() => {
    HTTP.dataFilmes
      .get('/data')
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setErro(true);
        } else {
          setFilmes(res.data as IFilme[]);
        }
      })
      .catch((err) => {
        console.error(err);
        setErro(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filmesFiltrados = useMemo(() => {
    if (!filmes) return [];
    return filmes
      .filter((filme) => {
        const nomeMatch = filme?.nome?.toLowerCase().includes(nome);
        const produtoraMatch = filme?.dados?.production_companies?.some(
          (company) => company?.name?.toLowerCase().includes(nome)
        );
        const generoMatch = filme?.dados?.genres?.some((genre) =>
          genre?.name?.toLowerCase().includes(nome)
        );
        return nomeMatch || produtoraMatch || generoMatch;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [filmes, nome]);

  if (loading) return <ContainerLoading pageSize="min-h-container" />;
  if (erro) return notFound();
  if (!filmes) return null;

  return (
    <InView
      viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.05 },
        },
      }}
    >
      <motion.section
        key={filmesFiltrados.length}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-text px-5"
      >
        {filmesFiltrados.length > 0 ? (
          filmesFiltrados.map((filme) => (
            <motion.div
              key={filme.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <CardFilme filme={filme} />
            </motion.div>
          ))
        ) : (
          <p>Nenhum filme encontrado ;-;</p>
        )}
      </motion.section>
    </InView>
  );
};

export default ContainerPesquisa;
