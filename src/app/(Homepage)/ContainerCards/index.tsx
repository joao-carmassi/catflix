import CardFilme from '@/app/components/CardFilme';
import filmes from '@/db.json';

const ContainerCard = () => {
  const setGeneros = new Set();
  let generos: string[] = [];

  filmes.data.forEach((filme) => {
    filme.dados.genres.forEach((genero) => {
      setGeneros.add(genero.name);
    });
  });
  generos = [...setGeneros] as string[];
  generos.sort((a, b) => a.localeCompare(b));

  return (
    <section className="-mt-[6rem] pb-3 md:-mt-[9.25rem] flex flex-col gap-15 relative z-10">
      {[...generos].map((genero, index) => (
        <div key={index}>
          <div className="mb-2 md:mb-4">
            <h1 className="text-2xl md:text-3xl px-3 md:px-15 font-semibold text-text">
              {genero as string}:
            </h1>
          </div>
          <div className="w-full px-3">
            {/* Slider */}
            <div
              data-hs-carousel='{
 "loadingClasses": "opacity-0",
 "slidesQty": {
   "xs": 2,
   "sm": 3,
   "md": 4,
   "lg": 6
 },
 "isDraggable": true
}'
              className="relative"
            >
              <div className="hs-carousel w-full overflow-hidden">
                <div className="relative h-32 md:h-40 -mx-1">
                  <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                    {filmes.data
                      .filter((filme) =>
                        filme.dados.genres.some((item) => item.name === genero)
                      )
                      .map((filme, index) => (
                        <div key={index} className="hs-carousel-slide px-1">
                          <CardFilme filme={filme} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg"
              >
                <span className="text-2xl" aria-hidden="true">
                  <svg
                    className="shrink-0 size-5"
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
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                type="button"
                className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg"
              >
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                  <svg
                    className="shrink-0 size-5"
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>

              <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0  gap-x-2"></div>
            </div>
            {/* End Slider */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContainerCard;
