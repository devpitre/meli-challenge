import { Product } from 'types/entities/product';

type FindProductsDto = {
  items: Product[];
  categories: string[];
};

export type { FindProductsDto };
