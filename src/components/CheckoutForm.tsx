import React, { useContext, useEffect, useState } from 'react';
import { Button } from './shared/Button/Button';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import { sendOrderNotification } from '../utils/sendOrderNotification';
import { CartItem } from '../models';

interface CheckoutFormProps {
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantaty: number;
}

const CheckoutForm = ({ cartItems, totalPrice, totalQuantaty }: CheckoutFormProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    clearCart();
    navigate('/thank-you');
    await sendOrderNotification(name, address, cartItems, totalPrice, totalQuantaty);
  };

  const { close } = useContext(ModalContext);
  useEffect(() => {
    return () => {
      close();
    };
  }, [close]);

  const changeNameHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const changeAddressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
          value={name} 
          required
          onChange={changeNameHandler}
          className="border py-2 px-4 my-4 w-full outline-0" 
          placeholder="Enter name..."/>
      </label>
      <br />
      <label>
        Address:
        <input type="text" 
          value={address} 
          required
          onChange={changeAddressHandler}
          className="border py-2 px-4 my-4 w-full outline-0" 
          placeholder="Enter adress..." />
      </label>
      <br />
      <Button text="Submit" variant="primary" type="submit" className='mt-6' />
    </form>
  );
};

export default CheckoutForm;
