import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-14 bg-card">
      <ul className="flex">
        <li>
          <Button variant="link">
            <a target="_blank" href="https://api-catflix.loca.lt/">
              Catflix api
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <a target="_blank" href="https://server-catflix.loca.lt/">
              Catflix server
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
