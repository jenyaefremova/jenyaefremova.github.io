import { useMemo } from 'react';
import { IProduct } from '../models';

const useSortedProducts = (products: IProduct[], sortMethod: string) => {
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortMethod) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'rating':
        return Number(b.rating) - Number(a.rating);
      default:
        return 0;
      }
    });
  }, [products, sortMethod]);

  return sortedProducts;
};

export default useSortedProducts;
