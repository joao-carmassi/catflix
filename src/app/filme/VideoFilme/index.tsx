interface Props {
  filme: {
    nome: string;
    caminho: string;
  };
}

const VideoFilme = ({ filme }: Props) => {
  return (
    <section className="w-full px-5 md:px-20 py-5">
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
