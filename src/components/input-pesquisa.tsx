import { Input } from '@/components/ui/input';

interface Props {
  type: string;
  placeholder: string;
  valor: string;
  setValor: (valor: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputPrincipal({
  type,
  placeholder,
  valor,
  setValor,
  onKeyDown,
}: Props) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      onKeyDown={onKeyDown}
      className="max-w-xs h-10 focus-visible:ring-[3px] focus-visible:ring-primary/50 focus-visible:border-pryring-primary rounded-l-input rounded-r-none"
    />
  );
}

