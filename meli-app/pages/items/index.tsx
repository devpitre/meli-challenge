import React, { useContext, useState } from 'react';
import { GetServerSideProps } from 'next';
import MainContext from '@contexts/main-context';
import appInstance from 'api/app-instance';
import { FindProductsDto } from 'types/dtos/find-products-dto';
import Image from 'next/image';
import Link from 'next/link';
import free_shipping from '@icons/ic_shipping.png';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { data } = await axios.get<FindProductsDto>(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    {
      params: { q: query.search },
    }
  );
  return { props: { categories: data.categories, items: data.items } };
};

const Items = ({ categories, items }: FindProductsDto) => {
  const { setCategories } = useContext(MainContext);
  setCategories(categories);

  return (
    <div className="w-full bg-white p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col py-4 border-b-2 border-gray-100 my-1 gap-4"
        >
          <Link href={`items/${item.id}`}>
            <div className="flex flex-row gap-4">
              <Image
                src={item.picture}
                alt={item.title}
                width={180}
                height={180}
                className="rounded w-44 h-44"
              />
              <div className="flex flex-col flex-1 gap-4">
                <div className="flex flex-row gap-2">
                  <span className="text-2xl">
                    {Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(item.price.amount)}
                  </span>
                  {item.free_shipping && (
                    <Image
                      alt="free_shipping"
                      src={free_shipping}
                      width={24}
                      height={16}
                    />
                  )}
                </div>
                <div>
                  <span className="text-lg">
                    {item.title} {item.condition}
                  </span>
                </div>
              </div>
              <div>
                {item.state_name && (
                  <span className="text-xs text-gray-200">
                    {item.state_name}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
