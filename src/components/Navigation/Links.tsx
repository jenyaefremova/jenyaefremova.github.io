import React from 'react';
import { NavLink } from 'react-router-dom';

export function Links({ onLinkClick }: { onLinkClick: () => void }) {

  const links = [
    { to: "/", text: "About me" },
    { to: "/portfolio", text: "Пример приложения" },
    { to: "/other", text: "Другие работы" }
  ];

  return (
    <>  
      {links.map(link => (
        <li className='inline-flex items-center transition-all duration-300'>
          <NavLink 
            key={link.to}
            to={link.to} 
            className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''} 
            onClick={onLinkClick}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
}
