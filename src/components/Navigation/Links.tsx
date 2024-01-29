import React from 'react'
import {NavLink} from 'react-router-dom'

export function Links() {

  return (
    <>  
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''}>About me</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''}>Пример приложения</NavLink>
        <NavLink to="/other" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''}>Другие работы</NavLink>
    </>
  )
}