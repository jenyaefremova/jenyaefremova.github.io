import React, {useState} from 'react'
import {IProduct} from '../models'
import axios from 'axios'
import {ErrorMessage} from './shared/ErrorMessage'
import { Button } from './shared/Button/Button'

const productData: IProduct =  {
  id: 0,
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title.')
      return
    }

    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 my-4 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <Button text="Create" variant="primary" type="submit" className='mt-6' />
    </form>
  )
}
