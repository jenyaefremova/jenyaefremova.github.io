import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { SectionHeadline } from '../components/shared/Typography/SectionHeadline';
import { Button } from '../components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useGroupedCartItems } from '../hooks/useGroupedCartItems';
import CheckoutForm from '../components/CheckoutForm';
import { ModalContext } from '../context/ModalContext';
import { Modal } from '../components/shared/Modal';
import { Container } from '../components/shared/Container';
import { CartItems } from '../components/CartItems/CartItems';

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

  return (
    <Container>
      <SectionHeadline sectionHeadline='Cart Items' />
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
          <CartItems />
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
    </Container>
  );
};

export default CartPage;
