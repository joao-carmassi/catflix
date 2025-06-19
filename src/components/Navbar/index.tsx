'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

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

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const path = process.env.NEXT_PUBLIC_BASE_URL;

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
        <div className="flex-1 hidden md:flex items-center justify-end">
          <Button className="hover:no-underline" variant={'link'} asChild>
            <Link href={'/conteudos'}>Conteudos</Link>
          </Button>
          <Button className="hover:no-underline" variant={'link'} asChild>
            <Link href={'/filmes'}>Filmes</Link>
          </Button>
          <Button className="hover:no-underline" variant={'link'} asChild>
            <Link href={'/series'}>Series</Link>
          </Button>
        </div>
        <div className="flex-1 flex md:hidden items-center justify-end">
          <Sheet>
            <SheetTrigger>
              <div className="text-background bg-foreground p-1 rounded-md hover:bg-foreground/80">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mb-2">Paginas</SheetTitle>
                <SheetDescription className="flex flex-col gap-2 items-start">
                  <Button
                    className="hover:no-underline"
                    variant={'link'}
                    asChild
                  >
                    <Link href={'/conteudos'}>Conteudos</Link>
                  </Button>
                  <Button
                    className="hover:no-underline"
                    variant={'link'}
                    asChild
                  >
                    <Link href={'/filmes'}>Filmes</Link>
                  </Button>
                  <Button
                    className="hover:no-underline"
                    variant={'link'}
                    asChild
                  >
                    <Link href={'/series'}>Series</Link>
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
