'use client';

import { HTTP } from '@/service/axios';
import InputPesquisa from '../../components/InputBusca';
import Form from './form';
import { IFilme, IFilmeApi } from '@/interface/IFilme';

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
            description: item.overview,
          };
        })
      );
    })
    .catch((error) => console.error(error));
};

const verificaFilmeExiste = (id: string) => {
  return HTTP.localApi.get('/data').then((res) => {
    return res.data.find(
      (filme: IFilme) => Number(filme.dados.id) === Number(id)
    );
  });
};

const salvaFilme = async (
  data: { nome: string; id: string; tipo: string; caminho: string },
  setForm: React.Dispatch<
    React.SetStateAction<{
      nome: string;
      id: string;
      tipo: string;
      caminho: string;
    }>
  >
) => {
  const { nome, caminho, tipo } = data;
  const filmeExiste = await verificaFilmeExiste(data.id);
  const ehFilme = tipo === 'filme' ? true : false;

  HTTP.filmesApi
    .get(`https://api.themoviedb.org/3/movie/${data.id}`)
    .then((res) => {
      if (res.status !== 200) throw new Error('Erro ao enviar dados a api');
      if (!filmeExiste) {
        HTTP.localApi.post('/data', {
          nome,
          caminho,
          tipo: {
            filme: ehFilme,
            temporadas: [],
          },
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
        tipo: 'filme',
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
