type Attributes = {
  id: string;
  value_name: string;
};

type Address = {
  state_name: string;
};

type Shipping = {
  free_shipping: boolean;
};

type ItemResult = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  currency_id: string;
  shipping: Shipping;
  address: Address;
  attributes: Attributes[];
  sold_quantity: number;
};

type ValuesFilter = {
  id: string;
  name: string;
  path_from_root: { id: string; name: string }[];
};

type Filter = {
  id: string;
  name: string;
  values: ValuesFilter[];
};

type ProductDescription = {
  plain_text: string;
};

export type { Filter, ItemResult, ProductDescription };
