import React from 'react';
import {IProduct} from '../models'
import { Button } from './shared/Button/Button'

interface ProductProps {
  product: IProduct;
  onAddToCart: () => void;
  isInCart: boolean;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Product({ product, onAddToCart, onIncrement, onDecrement, quantity, isInCart }: ProductProps) {

  return (
    <div className="border shadow-lg rounded">
      <img 
        src={product.image} 
        alt={product.title} 
        className='w-full transition-all object-contain bg-white p-4 h-80 hover:scale-90'
      />
      <div className='flex flex-col justify-between p-4 pb-8 relative transition-all border-t'>
        <h4 className='py-2 text-lg truncate'>{product.title}</h4>
        <p className="font-bold text-xl w-3/4 bg-gradient-to-r from-lime-400 to-blue-500 rounded-r-full -ml-4 px-4 py-2">${product.price}</p>
        <div className='flex gap-4 mt-4 justify-center sm:justify-start'>
          {!isInCart ? (
            <Button text="Add to Cart" fluid onClick={onAddToCart} variant='primary' />
          ) : (
            <div>
              <Button text="-" onClick={onDecrement} variant='secondary' className='h-12 w-12' />
              <span className='mx-4'>{quantity}</span>
              <Button text="+" onClick={onIncrement} variant='secondary' className='h-12 w-12'/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
