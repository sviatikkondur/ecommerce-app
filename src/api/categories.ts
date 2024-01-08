import { client } from '../utils/fetchClient';

export const getCategories = () => {
  return client.get<string[]>(`/products/categories`);
};
