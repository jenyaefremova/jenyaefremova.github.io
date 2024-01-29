import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IProduct } from '../models';

interface GroupedCartItem extends IProduct {
  quantity: number;
}

export const useGroupedCartItems = () => {
  const { cartItems } = useContext(CartContext);

  const initialGroupedItems: Record<number, GroupedCartItem> = {};

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc[item.id];
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, initialGroupedItems);

  return groupedItems;
};
