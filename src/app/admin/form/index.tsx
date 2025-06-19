import InputPadrao from '@/components/InputPadrao';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChangeEvent, useState } from 'react';

interface Props {
  salvaFilme: (
    form: { nome: string; id: string; tipo: string; caminho: string },
    setForm: React.Dispatch<
      React.SetStateAction<{
        nome: string;
        id: string;
        tipo: string;
        caminho: string;
        formato: string;
      }>
    >
  ) => void;
}

const Form = ({ salvaFilme }: Props) => {
  const [form, setForm] = useState({
    nome: '',
    id: '',
    tipo: 'filme',
    caminho: '',
    formato: 'mkv',
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
      className="flex flex-col justify-center gap-5"
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
      <RadioGroup
        defaultValue="filme"
        value={form.tipo}
        onValueChange={(value) => setForm((prev) => ({ ...prev, tipo: value }))}
        className="flex items-center gap-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="filme" id="filme" />
          <Label htmlFor="filme">Filme</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="serie" id="serie" />
          <Label htmlFor="serie">Serie</Label>
        </div>
      </RadioGroup>
      <RadioGroup
        defaultValue="mkv"
        value={form.formato}
        onValueChange={(value) =>
          setForm((prev) => ({ ...prev, formato: value }))
        }
        className="flex items-center gap-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mkv" id="mkv" />
          <Label htmlFor="mkv">mkv</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mp4" id="mp4" />
          <Label htmlFor="mp4">mp4</Label>
        </div>
      </RadioGroup>
      <Button variant="outline">Enviar</Button>
    </form>
  );
};

export default Form;
