import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useGroupedCartItems } from '../hooks/useGroupedCartItems';
import { CartContext } from '../context/CartContext';
import { ErrorMessage } from '../components/shared/ErrorMessage';
import { Loader } from '../components/shared/Loader';
import { Product } from '../components/Product';
import { Button } from '../components/shared/Button/Button';
import Dropdown from '../components/shared/Dropdown';
import useSortedProducts from '../hooks/useSortedProducts';
import useCartQuantity from '../hooks/useCartQuantity';

export function ProductsPage() {
  const { loading, error, products } = useProducts();
  const { cartItems, addToCart, isProductInCart } = useContext(CartContext);
  const cartCount = cartItems.length;
  const groupedItems = useGroupedCartItems();
  const navigate = useNavigate();

  const { incrementQuantity, decrementQuantity } = useCartQuantity();

  const handleCartButtonClick = () => {
    navigate('/cart');
  };

  const sortOptions = [
    { label: 'Price (Low to High)', value: 'priceAsc' },
    { label: 'Price (High to Low)', value: 'priceDesc' },
    { label: 'Rating (Highest)', value: 'rating' },
  ];

  const [selectedSort, setSelectedSort] = useState('');
  const sortedProducts = useSortedProducts(products, selectedSort);

  const handleSortOptionClick = (selectedLabel: string) => {
    const selectedOption = sortOptions.find(option => option.label === selectedLabel);
    if (selectedOption) {
      setSelectedSort(selectedOption.value);
    }
  };

  return (
    <div className="container mx-auto px-5 sm:px-10 pb-40">
      {error && <ErrorMessage error={error} />}
      <Dropdown
        options={sortOptions.map(option => option.label)}
        className='mt-10 absolute min-w-40'
        onSelect={handleSortOptionClick}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-stretch gap-12 lg:gap-8 pt-28 h-full">
        {loading ? (
          Array.from({ length: 20 }, (_, index) => <Loader key={index} />)
        ) : (
          sortedProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              quantity={groupedItems[product.id]?.quantity || 0}
              onAddToCart={() => addToCart(product)}
              onIncrement={() => incrementQuantity(product)}
              onDecrement={() => decrementQuantity(product)}
              isInCart={isProductInCart(product.id)}
            />
          ))
        )}
      </div>

      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10">
        <Button
          onClick={handleCartButtonClick}
          text={'\u{1F6D2}'}
          variant="secondary"
          className="rounded-full bg-white"
        />
        {cartCount > 0 && ( <span className='absolute bottom-8 left-8 bg-lime-600 px-2 rounded-full'>{String(cartCount)}</span>)}
      
      </div>
      
    </div>
  );
}
