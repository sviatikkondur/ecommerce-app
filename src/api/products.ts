import { TProduct } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getProduct = (id: string) => {
  return client.get<TProduct>(`/products/${id}`);
};
