import { TProduct } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getProducts = (limit: number) => {
  return client.get<TProduct[]>(`/products?limit=${limit}`);
};
