'use client';

import { HTTP } from '@/service/axios';
import InputPesquisa from '../../components/InputBusca';
import Form from './form';
import { IFilme, IFilmeApi } from '@/interface/IFilme';

export const metadata = {
  title: 'Admin - Catflix',
};

const pesquisaFilme = (nome: string) => {
  HTTP.filmesApi
    .get(`/search/movie?query=${encodeURIComponent(nome)}`)
    .then((res) => {
      if (res.status !== 200) throw new Error('Erro ao baixa dados da api');
      const data: IFilmeApi[] = res.data.results;
      console.log(
        data.map((item) => {
          return {
            title: item.title,
            id: item.id,
            data: item.release_date,
          };
        })
      );
    })
    .catch((error) => console.error(error));
};

const verificaFilmeExiste = (id: string) => {
  return HTTP.localApi.get('/data').then((res) => {
    return res.data.find((filme: IFilme) => filme.id === id);
  });
};

const salvaFilme = async (
  data: { nome: string; id: string; caminho: string },
  setForm: React.Dispatch<
    React.SetStateAction<{ nome: string; id: string; caminho: string }>
  >
) => {
  const filmeExiste = await verificaFilmeExiste(data.id);
  HTTP.filmesApi
    .get(`https://api.themoviedb.org/3/movie/${data.id}`)
    .then((res) => {
      if (res.status !== 200) throw new Error('Erro ao enviar dados a api');
      if (!filmeExiste) {
        HTTP.localApi.post('/data', {
          ...data,
          dados: {
            ...res.data,
          },
        });
      } else {
        alert('Filme ja existe');
      }
    })
    .then(() => {
      setForm({
        nome: '',
        id: '',
        caminho: '',
      });
    })
    .catch((error) => console.error(error));
};

const Admin = () => {
  return (
    <main className="pt-18 bg-base-200">
      <section className="flex flex-col gap-5 items-center justify-center h-container">
        <InputPesquisa funcao={pesquisaFilme} />
        <hr className="border-primary w-40 md:w-72" />
        <Form salvaFilme={salvaFilme} />
      </section>
    </main>
  );
};

export default Admin;
