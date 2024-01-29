import { useState } from 'react';
import { IProduct } from '../models';

export function useAddToCart() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCartItems(prevItems => {     
     return [...prevItems, product];
    });
  };

  const removeFromCart = (product: IProduct) => {
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    }
};

  const isProductInCart = (productId: number) => cartItems.some(item => item.id === productId);

  return { cartItems, addToCart, removeFromCart, isProductInCart };
}
