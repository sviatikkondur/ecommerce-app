import { TProduct } from "../types/Product";

export const localClient = {
  read: <T>(key: string): T | null => {
    const data = window.localStorage.getItem(key);

    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      return null;
    }
  },

  write: <T>(key: string, data: T): void => {
    window.localStorage.setItem(key, JSON.stringify(data, null, 2));
  },

  add: <T>(key: string, data: T): void => {
    const existingData = localClient.read<T[]>(key) || [];

    existingData.push(data);
    window.localStorage.setItem(key, JSON.stringify(existingData, null, 2));
  },

  update: <T extends TProduct>(key: string, data: T): void => {
    const existingData = localClient.read<T[]>(key) || [];
    const newData = existingData.map((item) => (item.id === data.id ? data : item));

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  delete: <T extends TProduct>(key: string, id: number): void => {
    const existingData = localClient.read<T[]>(key) || [];
    const newData = existingData.filter((item) => item.id !== id);

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  find: <T extends TProduct>(key: string, id: number): boolean => {
    const existingData = localClient.read<T[]>(key) || [];

    return !!existingData.find((item) => item.id === id);
  },

  init: <T>(key: string, initialData: T): T => {
    if (!localClient.read<T>(key)) {
      localClient.write(key, initialData);
    }

    return localClient.read<T>(key) || initialData;
  },
};
