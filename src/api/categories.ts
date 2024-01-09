import { client } from '../utils/fetchClient';

export const getCategoriess = () => {
  return client.get<string[]>(`/products/categories`);
};
