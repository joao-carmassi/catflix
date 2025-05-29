import { IFilme } from '@/interface/IFilme';
import CardParaAssistir from '../CardParaAssistir';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface Props {
  filme: IFilme;
  temporada?: number;
  temporadaAtual?: number;
  epAtual?: number;
}

const DisplayEps = ({ filme, temporada, temporadaAtual, epAtual }: Props) => {
  return (
    <div className="w-full">
      <Accordion
        key={`${filme.dados.id}-${temporada}`}
        defaultValue={[`item-${temporada}`, `item-${filme.nome}`]}
        type="multiple"
        className="bg-card text-card-foreground px-5 w-full"
      >
        {!filme.tipo.filme ? (
          filme.tipo.temporadas.map((temporada, index) => (
            <AccordionItem
              key={index}
              id={`item-${temporada.temporada}`}
              value={`item-${temporada.temporada}`}
            >
              <AccordionTrigger>
                Temporada {temporada.temporada}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                  {Array.from({ length: temporada.episodios }, (_, index) => (
                    <CardParaAssistir
                      key={index}
                      filme={filme}
                      temporada={temporada.temporada}
                      ep={index + 1}
                      atual={
                        temporadaAtual === temporada.temporada &&
                        epAtual === index + 1
                      }
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <AccordionItem id={`item-${filme.nome}`} value={`item-${filme.nome}`}>
            <AccordionTrigger>{filme.nome}</AccordionTrigger>
            <AccordionContent>
              <div className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <CardParaAssistir filme={filme} />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
};

export default DisplayEps;
