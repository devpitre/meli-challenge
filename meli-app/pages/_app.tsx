import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layout/main-layout';
import { useState } from 'react';
import MainContext from '@contexts/main-context';

export default function App({ Component, pageProps }: AppProps) {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <MainContext.Provider value={{ categories, setCategories }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MainContext.Provider>
  );
}
