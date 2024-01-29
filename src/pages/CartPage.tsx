import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { SectionHeadline } from '../components/shared/Typography/SectionHeadline';
import { Button } from '../components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useGroupedCartItems } from '../hooks/useGroupedCartItems';
import CheckoutForm from '../components/CheckoutForm';
import { ModalContext } from '../context/ModalContext';
import { Modal } from '../components/shared/Modal';
import useCartQuantity from '../hooks/useCartQuantity';
import useMobile from '../hooks/useMobile';

const CartPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  const groupedItems = useGroupedCartItems();
  const totalPrice = Object.values(groupedItems).reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantaty = Object.values(groupedItems).reduce((total, item) => total + item.quantity, 0);

  const router = useNavigate();

  const handleButtonClick = () => {
    router('/portfolio');
  }

  const {modal, open, close} = useContext(ModalContext);
  const { incrementQuantity, decrementQuantity } = useCartQuantity();
  const isMobile = useMobile();

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
            className='mt-10'
          />
        </>
        :
        <>
          <ul className='pt-10'>
            {Object.values(groupedItems).map(item => (
              <li key={item.id} className='flex flex-col sm:flex-row items-top justify-between border-b last:border-none py-8 sm:py-4 max-w-3xl'>
                <div className='flex gap-6 sm:gap-0 sm:w-3/4'>
                  <img src={item.image} alt={item.title} className='w-16 h-16 sm:w-12 sm:h-12 sm:mr-4' />
                  <div className='w-3/4'>
                    <h4>{item.title}</h4>
                    <p>${item.price} x {item.quantity}</p>
                    {isMobile && ( 
                      <div className='flex items-center mt-4'>
                        <Button 
                          text="-"  
                          variant='secondary' 
                          noPadding 
                          className='h-8 w-8' 
                          onClick={() => decrementQuantity(item)}/>
                        <span className='mx-4'>{item.quantity}</span>
                        <Button 
                          text="+" 
                          variant='secondary' 
                          noPadding 
                          className='h-8 w-8' 
                          onClick={() => incrementQuantity(item)}/>
                      </div>)}
                  </div>

                </div>

                {!isMobile && ( 
                  <div className='mt-4 sm:mt-0'>
                    <div className='flex items-center'>
                      <Button 
                        text="-"  
                        variant='secondary' 
                        noPadding 
                        className='h-8 w-8' 
                        onClick={() => decrementQuantity(item)}/>
                      <span className='mx-4'>{item.quantity}</span>
                      <Button 
                        text="+" 
                        variant='secondary' 
                        noPadding 
                        className='h-8 w-8' 
                        onClick={() => incrementQuantity(item)}/>
                    </div>
                  </div>)}
               
              </li>
            ))}
          </ul>
        
          <p className='border-t mt-10 pt-4 text-bold max-w-3xl'>Total price: ${Math.round(totalPrice)}</p>
          <p className='pt-4 text-bold max-w-xl'>Total items: {totalQuantaty}</p>

          {modal && <Modal title="Checkout" onClose={close}>
            <CheckoutForm />
          </Modal>}
   
          <Button 
            text='Checkout'
            size='large'
            onClick={open}
            fluid
            variant='primary' 
            className='mt-10'
          />
        </>
      }
    </div>
  );
};

export default CartPage;
