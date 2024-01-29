import React, { useContext } from 'react'
import {useProducts} from '../hooks/useProducts'
import {Loader} from '../components/Loader'
import {ErrorMessage} from '../components/ErrorMessage'
import {Product} from '../components/Product'
import { Button } from '../components/shared/Button/Button'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { IProduct } from '../models'
import { useGroupedCartItems } from '../hooks/useGroupedCartItems'

export function ProductsPage() {
  const {loading, error, products} = useProducts()
 
  const { cartItems, addToCart, removeFromCart, isProductInCart } = useContext(CartContext);
  const cartCount = String(cartItems.length);
  const groupedItems = useGroupedCartItems();

  const incrementProductQuantity = (product: IProduct) => {
    addToCart(product);
  };

  const decrementProductQuantity = (product: IProduct) => {
    removeFromCart(product);
  };

  const navigate = useNavigate();
  const handleCartButtonClick = () => {
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-5 pb-40">
      { error && <ErrorMessage error={error} /> }
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-stretch gap-12 lg:gap-8 pt-16 h-full'>
        {loading 
          ? Array.from({ length: 5 }, (_, index) => <Loader key={index} />)
          : products.map(product => 
            <Product 
              product={product} 
              key={product.id} 
              quantity={groupedItems[product.id]?.quantity || 0}
              onAddToCart={() => addToCart(product)}
              onIncrement={() => incrementProductQuantity(product)}
              onDecrement={() => decrementProductQuantity(product)}
              isInCart={isProductInCart(product.id)} />
            )
          }
      </div>
      <Button 
          onClick={handleCartButtonClick} 
          text={cartCount + ' \u{1F6D2}'}
          variant='secondary' 
          className='fixed bottom-10 right-10 rounded-full'/>
    </div>
  )
}
