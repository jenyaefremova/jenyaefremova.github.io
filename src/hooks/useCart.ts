import { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function useCart() {
  const [cartItems, setCartItems] = useState<IProduct[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const clearCart = () => {
    setCartItems([]); // This should not expect any arguments
  };

  const isProductInCart = (productId: number) => cartItems.some(item => item.id === productId);

  return { cartItems, addToCart, removeFromCart, clearCart, isProductInCart };
}
