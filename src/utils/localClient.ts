import { TProduct } from "../types/Product";


export const localClient = {
  read: (key: string) => {
    const data = window.localStorage.getItem(key);

    try {
      return data && JSON.parse(data);
    } catch (error) {
      return null;
    }
  },

  write: (key: string, data: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(data, null, 2));
  },

  add: (key: string, data: unknown) => {
    const existingData = localClient.read(key);

    existingData.push(data);
    window.localStorage.setItem(key, JSON.stringify(existingData, null, 2));
  },

  update: (key: string, data: TProduct) => {
    const existingData = localClient.read(key);
    const newData = existingData.map((item: TProduct) => {
      return item.id === data.id ? data : item;
    });

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  delete: (key: string, id: number) => {
    const existingData = localClient.read(key);
    const newData = existingData.filter((item: TProduct) => item.id !== id);

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  find: (key: string, id: number) => {
    const existingData: TProduct[] = localClient.read(key);

    return !!existingData.find((item: TProduct) => item.id === id);
  },

  init: (key: string, initialData: unknown) => {
    if (!localClient.read(key)) {
      localClient.write(key, initialData);
    }

    return localClient.read(key);
  },
};