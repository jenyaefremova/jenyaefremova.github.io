import React from 'react'

import { Button } from '../shared/Button/Button';
import useCartQuantity from '../../hooks/useCartQuantity';
import { IProduct } from '../../models';


interface GroupedCartItem extends IProduct {
  quantity: number;
}

export function CartItemsButtons({ item }: { item: GroupedCartItem }) {

  const { incrementQuantity, decrementQuantity } = useCartQuantity();

  return (   
    <div className='flex items-center mt-4'>
      <Button  text="-"  
        variant='secondary' 
        noPadding 
        className='h-8 w-8' 
        onClick={() => decrementQuantity(item)}/>
      <span className='inline-flex justify-center w-12'>{item.quantity}</span>
      <Button 
        text="+" 
        variant='secondary' 
        noPadding 
        className='h-8 w-8' 
        onClick={() => incrementQuantity(item)}/>
    </div>
  )
}
