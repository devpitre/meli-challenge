import { createContext } from 'react';

interface MainContextProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const MainContext = createContext<MainContextProps>({
  categories: [],
  setCategories: () => undefined,
});

export default MainContext;
