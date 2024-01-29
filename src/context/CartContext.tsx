import React, {createContext} from 'react'
import { useAddToCart } from '../hooks/useAddtoCart';
import { IProduct } from '../models';


interface ICartContext {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    isProductInCart: (productId: number) => boolean;
  }
  
  export const CartContext = createContext<ICartContext>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    isProductInCart: () => false
  })

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const cart = useAddToCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};