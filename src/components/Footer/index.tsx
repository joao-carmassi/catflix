import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-14 bg-base-100">
      <ul className="flex">
        <li>
          <Button variant="link">
            <a
              target="_blank"
              href="https://api-catflix.loca.lt/?senha=179.106.178.61"
            >
              Catflix api
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <a
              target="_blank"
              href="https://server-catflix.loca.lt/?senha=179.106.178.61"
            >
              Catflix server
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
