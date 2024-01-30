import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { Navigation } from './components/Navigation/Navigation'
import { WorksPage } from './pages/WorksPage'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'
import ThankYouPage from './pages/ThankYouPage'
import { ScrollToTop } from './components/shared/ScrollToTop'

function App() {

  return (
    <CartProvider>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <AboutPage /> } />
        <Route path="/portfolio" element={ <ProductsPage /> } />
        <Route path="/other" element={ <WorksPage /> } />
        <Route path="/cart" element={ <CartPage />} />
        <Route path="/thank-you" element={ <ThankYouPage />} />
      </Routes>
     
    </CartProvider>
  )
}

export default App;
