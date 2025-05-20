import { ChangeEvent } from 'react';

interface Props {
  nome: string;
  valorInput: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputPadrao = ({ nome, valorInput, handleChange }: Props) => {
  return (
    <div>
      <label htmlFor={nome} className="sr-only text-text">
        {nome}
      </label>
      <div className="flex w-40 md:w-72 rounded-input">
        <input
          required
          style={{ transitionDuration: '.2s' }}
          type="text"
          id={nome}
          name={nome}
          placeholder={nome}
          className="px-3 w-full py-2.5 text-text border border-gray-300 focus:border-primary focus:outline-0 focus:ring-0 rounded-input sm:text-sm disabled:opacity-50 disabled:pointer-events-none placeholder:capitalize"
          value={valorInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default InputPadrao;
