type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

type Product = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state_name?: string;
  description?: string;
  sold_quantity?: number;
};

export type { Product };
