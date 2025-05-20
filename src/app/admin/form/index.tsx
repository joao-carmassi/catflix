import InputPadrao from '@/components/InputPadrao';
import { ChangeEvent, useState } from 'react';

interface Props {
  salvaFilme: (
    form: { nome: string; id: string; caminho: string },
    setForm: React.Dispatch<
      React.SetStateAction<{ nome: string; id: string; caminho: string }>
    >
  ) => void;
}

const Form = ({ salvaFilme }: Props) => {
  const [form, setForm] = useState({
    nome: '',
    id: '',
    caminho: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nomeInput = e.target.name;
    setForm({
      ...form,
      [nomeInput]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    salvaFilme(form, setForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
      action="submit"
    >
      <InputPadrao
        nome="nome"
        valorInput={form.nome}
        handleChange={handleChange}
      />
      <InputPadrao nome="id" valorInput={form.id} handleChange={handleChange} />
      <InputPadrao
        nome="caminho"
        valorInput={form.caminho}
        handleChange={handleChange}
      />
      <button
        style={{ transitionDuration: '.2s' }}
        className="text-white border hover:bg-primary hover:border-primary hover:text-white active:scale-95 border-white px-5 font-semibold py-2 rounded-input"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
