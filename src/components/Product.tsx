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
    <div className="border hover:shadow-lg rounded bg-lime-100">
      <img 
        src={product.image} 
        alt={product.title} 
        className='w-full transition-all object-contain bg-white p-4 h-80'
      />
      <div className='flex flex-col justify-between p-4 pb-8 relative transition-all'>
        <h4 className='py-2 text-lg truncate'>{product.title}</h4>
        <p className="font-bold text-xl">${product.price}</p>
        <div className='flex gap-4 mt-4'>
            {!isInCart ? (
              <Button text="Add to Cart" onClick={onAddToCart} variant='primary' />
            ) : (
              <div>
                <Button text="-" onClick={onDecrement} variant='secondary' className='h-12 w-12' />
                <span className='px-4'>{quantity}</span>
                <Button text="+" onClick={onIncrement} variant='secondary' className='h-12 w-12'/>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
