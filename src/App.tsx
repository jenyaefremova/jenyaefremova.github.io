import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { Navigation } from './components/Navigation/Navigation'
import { WorksPage } from './pages/WorksPage'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={ <AboutPage /> } />
        <Route path="/portfolio" element={ <ProductsPage /> } />
        <Route path="/other" element={ <WorksPage /> } />
        <Route path="/cart" element={ <CartPage />} />
      </Routes>
    </CartProvider>
  )
}

export default App;
