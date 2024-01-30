/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import BurgerMenu from './BurgerMenu'
import useMobile from '../../hooks/useMobile';
import { Links } from './Links';

export function Navigation() {

  const isMobile = useMobile();

  return (
    <nav className="h-[50px] fixed w-full z-10 flex justify-end px-5 bg-lime-100 border-b shadow-sm items-center text-black">
      {!isMobile && 
      (<div className='flex gap-3'>  
        <Links onLinkClick={() => {}}/>
      </div>)}
      {isMobile && <BurgerMenu />}
    </nav>
  )
}
