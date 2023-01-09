import appInstance from 'api/app-instance';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { FindDetailProductsDto } from 'types/dtos/find-detail-product-dto';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { data } = await appInstance.get<FindDetailProductsDto>(
    `/products/${query.id}`
  );
  return { props: { item: data.item } };
};

function DetailItem({ item }: FindDetailProductsDto) {
  return (
    <div className="w-full bg-white p-8 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row">
        <Image src={item.picture} width={680} height={680} alt={item.title} />
        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-300">
            {item.condition} - {item.sold_quantity} vendidos
          </span>
          <h1 className="text-2xl">{item.title}</h1>
          <h1 className="text-5xl my-4">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(item.price.amount)}
          </h1>
          <button className="bg-blue w-full p-4 rounded text-white font-semibold">
            Comprar
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className="text-3xl">Descripción del producto</h1>
        <span className='w-3/4'>{item.description}</span>
      </div>
    </div>
  );
}

export default DetailItem;
