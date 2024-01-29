import React from 'react';
import { SectionHeadline } from '../components/shared/Typography/SectionHeadline';
import { Button } from '../components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {

  const router = useNavigate();
  const handleButtonClick = () => {
    router('/portfolio');
  }

  return (
    <div className='container mx-auto py-40 text-center'>
      <SectionHeadline sectionHeadline='Thank You' />
      <p className='pt-4'>Your order has been successfully sent.</p>
      <Button 
        onClick={handleButtonClick} 
        text='Back to Shopping' 
        variant='primary' 
        className='mt-10' />
    </div>
  );
};

export default ThankYouPage;
