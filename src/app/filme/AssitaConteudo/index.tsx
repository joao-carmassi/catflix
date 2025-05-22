import DisplayEps from '@/components/DisplayEps';
import DisplayFilme from '@/components/DisplayFilme';
import { IFilme } from '@/interface/IFilme';

interface Props {
  filme: IFilme;
}

const AssitaConteudo = ({ filme }: Props) => {
  return (
    <section className="w-full px-5 md:px-20 pt-5">
      {filme.tipo.filme ? (
        <DisplayFilme filme={filme} />
      ) : (
        <DisplayEps filme={filme} />
      )}
    </section>
  );
};

export default AssitaConteudo;
