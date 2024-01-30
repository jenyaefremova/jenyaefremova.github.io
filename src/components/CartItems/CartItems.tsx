import React from 'react'
import { useGroupedCartItems } from '../../hooks/useGroupedCartItems';
import useMobile from '../../hooks/useMobile';
import { CartItemsButtons } from './CartItemsButtons';


export function CartItems() {

  const groupedItems = useGroupedCartItems();
  const isMobile = useMobile();

  return (   
    <ul className='sm:pt-10'>
    {Object.values(groupedItems).map(item => (    
      <li key={item.id} className='flex flex-col sm:flex-row items-top justify-between border-b last:border-none py-8 sm:py-4 max-w-3xl'>
        <div className='flex gap-6 sm:gap-0 sm:w-3/4'>
          <img src={item.image} alt={item.title} className='w-16 h-16 sm:w-12 sm:h-12 sm:mr-4 object-contain' />
          <div className='w-3/4'>
            <h4>{item.title}</h4>
            <p>${item.price} x {item.quantity}</p>
            {isMobile && <CartItemsButtons item={item} />}
          </div>
        </div>

        {!isMobile && <CartItemsButtons item={item}/>}
       
      </li>
    ))}
  </ul>
  )
}
