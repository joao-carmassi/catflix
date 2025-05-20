import { Input } from '@/components/ui/input';

interface Props {
  type: string;
  placeholder: string;
  valor: string;
  setValor: (valor: string) => void;
}

export default function InputRingDemo({
  type,
  placeholder,
  valor,
  setValor,
}: Props) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      className="max-w-xs h-10 focus-visible:ring-[3px] focus-visible:ring-primary/50 focus-visible:border-pryring-primary rounded-l-input rounded-r-none"
    />
  );
}

