'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import InputPesquisa from '../InputBusca';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) return setScroll(true);
      setScroll(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pesquisa = (path: string) => {
    router.push(`/filmes?nome=${path}`);
  };

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const path = process.env.BASE_URL;

  if (!loaded) return null;

  return (
    <header>
      <nav
        style={{ transitionDuration: '.5s' }}
        className={`transition-colors bg-gradient-to-b z-50 from-background ${
          scroll ? 'to-background' : 'to-transparent'
        } w-full fixed px-4 md:px-14 h-18 flex items-center justify-center`}
      >
        <div className="w-full flex-1 h-full flex items-center">
          <Link
            style={{ transitionDuration: '.2s' }}
            className="h-full hover:opacity-80 text-text flex items-center gap-2.5 text-2xl font-semibold py-3.5"
            href={'/'}
          >
            <img
              className="h-full bg-white rounded-md"
              src={`${path}/favicon.ico`}
              alt="Logo do site"
            />
            Catflix
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <InputPesquisa funcao={pesquisa} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
