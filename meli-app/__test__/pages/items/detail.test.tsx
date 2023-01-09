import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Product } from 'types/entities/product';
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsContext } from 'next';
import DetailItem, { getServerSideProps } from 'pages/items/[id]';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const item: Product = {
  id: 'MLA1109965862',
  condition: 'Nuevo',
  picture: 'http://http2.mlstatic.com/D_994609-MLA47871010530_102021-I.jpg',
  title: 'Apple iPad (9ª Generación) 10.2  Wi-fi 64gb - Gris Espacial',
  free_shipping: true,
  price: {
    amount: 133999,
    currency: 'ARS',
    decimals: 0,
  },
  description:
    'Lleno de potencia, muy fácil de usar y versátil. El nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. Además, es compatible con el Apple Pencil y el Smart Keyboard.(1)\nCon el iPad, harás de todo como si nada. Y por menos de lo que imaginas.\n\nAvisos legales\nLas apps están disponibles en el App Store. La disponibilidad de títulos está sujeta a cambios. \n(1) Los accesorios se venden por separado. La compatibilidad varía según la generación. \n(2) La duración de la batería varía según el uso y la configuración.',
  sold_quantity: 50,
};

describe('Items Page', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/items');
  });

  test('should render items', () => {
    render(<DetailItem item={item} />);
    expect(screen.getByText('$133,999.00')).toBeInTheDocument();
  });

  test('should return getServerSideProps', async () => {
    const mockedResponse: AxiosResponse = {
      data: { item },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    const context = {
      query: { search: 'iphone' } as ParsedUrlQuery,
    };
    const value = await getServerSideProps(context as GetServerSidePropsContext);
    expect(value).toEqual({ props: { item } });
  });
});
