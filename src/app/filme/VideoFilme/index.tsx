import CardSerie from '@/components/CardSerie';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IFilme } from '@/interface/IFilme';

interface Props {
  filme: IFilme;
}

const VideoFilme = ({ filme }: Props) => {
  const temporadas = [20, 10, 5];

  return (
    <section className="w-full px-5 md:px-20 pt-5">
      {filme.tipo.filme ? (
        <div>
          <video controls className="w-full border-2 border-border">
            <source
              src={`https://server-catflix.loca.lt/${filme?.caminho}`}
              type="video/webm"
            />
            Download the
            <a href={`https://server-catflix.loca.lt/${filme?.caminho}`}>
              WEBM
            </a>
          </video>
        </div>
      ) : (
        <div className="w-full">
          <Accordion
            type="multiple"
            className="bg-card text-card-foreground px-5 w-full"
          >
            {temporadas.map((temporada, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>Temporada {index + 1}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {Array.from({ length: temporada }, (_, index) => (
                      <CardSerie key={index} filme={filme} ep={index + 1} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </section>
  );
};

export default VideoFilme;
