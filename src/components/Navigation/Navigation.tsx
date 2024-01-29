import React from 'react'
import BurgerMenu from './BurgerMenu'
import useMobile from '../../hooks/useMobile';
import { Links } from './Links';

export function Navigation() {

  const isMobile = useMobile();

  return (
    <nav className="h-[50px] flex justify-end px-5 bg-lime-100 border-b shadow-sm items-center text-black">
      {!isMobile && 
      (<div className='flex gap-3'>  
        <Links />
      </div>)}
      {isMobile && <BurgerMenu />}
    </nav>
  )
}