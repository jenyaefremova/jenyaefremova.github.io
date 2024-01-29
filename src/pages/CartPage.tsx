import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { SectionHeadline } from '../components/shared/Typography/SectionHeadline';
import { Button } from '../components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useGroupedCartItems } from '../hooks/useGroupedCartItems';

const CartPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  const groupedItems = useGroupedCartItems();

  const totalPrice = Object.values(groupedItems).reduce((total, item) => total + item.price * item.quantity, 0);
  const router = useNavigate();

  const handleButtonClick = () => {
    router('/portfolio');
  }

  return (
    <div className="container mx-auto px-5 pb-40">
     
      <SectionHeadline sectionHeadline='Cart Items' className='mt-20' />
      {cartItems.length === 0 ? 
      <>
       <p className='mt-10'>Your cart is empty</p>
         <Button 
         onClick={handleButtonClick} 
         text='Back to Shopping'
         variant='secondary' 
         className='mt-10'/>
      </>
      :
      <>
      <ul className='pt-10'>
        {Object.values(groupedItems).map(item => (
          <li key={item.id} className='flex items-top mb-4 max-w-xl'>
            <img src={item.image} alt={item.title} className='w-12 h-12 mr-4' />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price} x {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
        
      <p className='border-t mt-10 pt-4 text-bold max-w-xl'>Total price: ${totalPrice}</p>
   
      <Button 
         text='Checkout'
         size='large'
         variant='primary' 
         className='mt-10'/>
      </>
    }
     
    </div>
  );
};

export default CartPage;
