import React from 'react';
import { NavLink } from 'react-router-dom';

export function Links({onLinkClick}: {onLinkClick: () => void}) {
  return (
    <>  
      <NavLink to="/" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''} onClick={onLinkClick}>About me</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''} onClick={onLinkClick}>Пример приложения</NavLink>
      <NavLink to="/other" className={({ isActive }) => isActive ? 'underline underline-offset-2' : ''} onClick={onLinkClick}>Другие работы</NavLink>
    </>
  );
}
