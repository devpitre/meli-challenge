import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import Items, { getServerSideProps } from 'pages/items';
import { Product } from 'types/entities/product';
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsContext } from 'next';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const items: Product[] = [
  {
    id: 'MLA1279596373',
    condition: 'Nuevo',
    picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
    title: 'Apple iPhone 11 (128 Gb) - Negro',
    free_shipping: true,
    price: {
      amount: 280000,
      currency: 'ARS',
      decimals: 0,
    },
    state_name: 'Buenos Aires',
  },
  {
    id: 'MLA1109036547',
    condition: 'Nuevo',
    picture: 'http://http2.mlstatic.com/D_654080-MLA47781882564_102021-I.jpg',
    title: 'Apple iPhone 13 (128 Gb) - Rosa',
    free_shipping: true,
    price: {
      amount: 390999,
      currency: 'ARS',
      decimals: 0,
    },
    state_name: 'Capital Federal',
  },
];

const categories = ['category 1', 'category 2'];

describe('Items Page', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/items');
  });

  test('should render items', () => {
    render(<Items categories={['category 1', 'category 2']} items={items} />);
    expect(
      screen.getByText(`${items[0].title} ${items[0].condition}`)
    ).toBeInTheDocument();
    expect(screen.getByText('$390,999.00')).toBeInTheDocument();
  });

  test('should return getServerSideProps', async () => {
    const mockedResponse: AxiosResponse = {
      data: { items, categories },
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
    expect(value).toEqual({ props: { categories, items } });
  });
});
