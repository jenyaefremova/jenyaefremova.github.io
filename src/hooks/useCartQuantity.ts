import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IProduct } from '../models';

const useCartQuantity = () => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const incrementQuantity = (product: IProduct) => {
    addToCart(product);
  };

  const decrementQuantity = (product: IProduct) => {
    removeFromCart(product);
  };

  return { incrementQuantity, decrementQuantity };
};

export default useCartQuantity;
