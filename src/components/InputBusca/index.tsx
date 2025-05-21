'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import InputPrincipal from '../input-pesquisa';

interface Props {
  funcao: (nome: string) => void;
}

const InputPesquisa = ({ funcao }: Props) => {
  const [valorInput, setValorInput] = useState('');

  return (
    <div>
      <label
        htmlFor="hs-trailing-button-add-on-with-icon"
        className="sr-only text-text"
      >
        Buscar
      </label>
      <div className="flex w-40 md:w-72 rounded-input">
        <InputPrincipal
          placeholder="Buscar"
          type="text"
          valor={valorInput}
          setValor={setValorInput}
        />
        <button
          style={{ transitionDuration: '.2s' }}
          type="button"
          onClick={() => {
            funcao(valorInput);
            setValorInput('');
          }}
          className="h-10 w-10 shrink-0 inline-flex justify-center items-center rounded-e-input border border-transparent bg-primary text-white hover:opacity-90 cursor-pointer focus:outline-hidden focus:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default InputPesquisa;
