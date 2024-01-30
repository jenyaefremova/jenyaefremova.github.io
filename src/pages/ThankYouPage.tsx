import React from 'react';
import { SectionHeadline } from '../components/shared/Typography/SectionHeadline';
import { Button } from '../components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/shared/Container';

const ThankYouPage: React.FC = () => {

  const router = useNavigate();
  const handleButtonClick = () => {
    router('/portfolio');
  }

  return (
    <Container>
      <SectionHeadline sectionHeadline='Thank You' />
      <p className='pt-4'>Your order has been successfully sent. I recieved it in telegram</p>
      <Button 
        onClick={handleButtonClick} 
        text='Back to Shopping' 
        variant='primary' 
        className='mt-10' />
    </Container>
  );
};

export default ThankYouPage;
