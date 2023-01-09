import MainContext from '@contexts/main-context';
import { useContext } from 'react';

export default function Home() {
  const { setCategories } = useContext(MainContext);
  setCategories([]);
  return <></>;
}
