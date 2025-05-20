interface Props {
  filme: {
    nome: string;
    caminho: string;
  };
}

const VideoFilme = ({ filme }: Props) => {
  return (
    <section className="w-full">
      <h1 className="text-text mb-2 text-xl md:text-3xl font-semibold">
        {filme?.nome}
      </h1>
      <video controls className="w-full">
        <source
          src={`https://server-catflix.loca.lt/${filme?.caminho}`}
          type="video/webm"
        />
        Download the
        <a href={`https://server-catflix.loca.lt/${filme?.caminho}`}>WEBM</a>
      </video>
    </section>
  );
};

export default VideoFilme;
