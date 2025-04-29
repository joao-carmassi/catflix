'use client';

import { useState } from 'react';

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
        <input
          style={{ transitionDuration: '.2s' }}
          type="text"
          id="hs-trailing-button-add-on-with-icon"
          name="hs-trailing-button-add-on-with-icon"
          placeholder="Buscar"
          className="px-3 w-full text-text border border-gray-300 focus:border-primary focus:outline-0 focus:ring-0 rounded-s-input sm:text-sm disabled:opacity-50 disabled:pointer-events-none"
          value={valorInput}
          onChange={(e) => {
            setValorInput(e.target.value);
          }}
        />
        <button
          style={{ transitionDuration: '.2s' }}
          type="button"
          onClick={() => {
            funcao(valorInput);
            setValorInput('');
          }}
          className="h-10 w-10 shrink-0 inline-flex justify-center items-center rounded-e-input border border-transparent bg-primary text-white hover:opacity-90 cursor-pointer focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputPesquisa;
