/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'
import { useCart } from '../hooks/useCart';
import { IProduct } from '../models';


interface ICartContext {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    clearCart: () => void;
    isProductInCart: (productId: number) => boolean;
  }
  
export const CartContext = createContext<ICartContext>({
  cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  isProductInCart: () => false
})

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const { cartItems, addToCart, removeFromCart, clearCart, isProductInCart } = useCart();
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isProductInCart }}>
      {children}
    </CartContext.Provider>
  );
};
  