'use client';

import { IFilme } from '@/interface/IFilme';
import { HTTP } from '@/service/axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ContextTypes {
  filmes: IFilme[];
  erro: boolean;
  loading: boolean;
}

const AppContext = createContext<ContextTypes | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    HTTP.dataFilmes
      .get('/data')
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setErro(true);
        } else {
          setFilmes(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setErro(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        filmes,
        loading,
        erro,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useAppContext deve ser usado dentro de um Proviver');

  return context;
};
