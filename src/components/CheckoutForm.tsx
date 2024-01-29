import React, { useContext, useEffect, useState } from 'react';
import { Button } from './shared/Button/Button';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setTimeout(() => {
      clearCart();
      navigate('/thank-you');
    }, 2000);
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
