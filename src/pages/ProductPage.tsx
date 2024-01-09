import React, { useEffect, useState } from 'react'
import { TProduct } from '../types/Product'
import { getProduct } from '../api/products';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProduct(id as string);
        setIsLoading(false);

        setProduct(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    loadProduct();
  }, []);

  return (
    <div>{product?.title}</div>
  )
}
