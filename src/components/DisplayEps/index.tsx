import { IFilme } from '@/interface/IFilme';
import CardSerie from '../CardSerie';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface Props {
  filme: IFilme;
}

const DisplayEps = ({ filme }: Props) => {
  return (
    <div className="w-full">
      <Accordion
        type="multiple"
        className="bg-card text-card-foreground px-5 w-full"
      >
        {filme.tipo.temporadas.map((temporada, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>Temporada {temporada.temporada}</AccordionTrigger>
            <AccordionContent>
              <div className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {Array.from({ length: temporada.episodios }, (_, index) => (
                  <CardSerie
                    key={index}
                    filme={filme}
                    temporada={temporada.temporada}
                    ep={index + 1}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DisplayEps;
