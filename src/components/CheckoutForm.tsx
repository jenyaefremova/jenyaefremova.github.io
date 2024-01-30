import React, { useContext, useEffect, useState } from 'react';
import { Button } from './shared/Button/Button';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import axios from 'axios';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    clearCart();
    navigate('/thank-you');
  
    await sendOrderNotification();
  };

  const sendOrderNotification = async () => {
    const botToken = '6829546671:AAFdTro-aYwuC7zF-CwCaVkW4aQ7WqihZww';
    const chatId = '@portfolio_orders';
    const message = `New order received! \nName: ${name}\nAddress: ${address}`;
  
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const {close} = useContext(ModalContext);
  useEffect(() => {
    return () => {
      close();
    };
  }, [close]);

  const changeNameHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const changeAdressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
          onChange={changeAdressHandler}
          className="border py-2 px-4 my-4 w-full outline-0" 
          placeholder="Enter adress..." />
      </label>
      <br />
      <Button text="Submit" variant="primary" type="submit" className='mt-6' />
    </form>
  );
};

export default CheckoutForm;
