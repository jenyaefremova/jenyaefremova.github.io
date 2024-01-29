import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Links } from './Links';


export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    }

    return (
        <div>
            <button className="flex items-center px-3 py-2 hover:opacity-90" onClick={toggleMenu}>
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></svg>
            </button>

            <div className={`absolute flex flex-col gap-3 z-10 right-0 mt-1 p-6 w-48 bg-white rounded-lg shadow-xl ${!isOpen && 'hidden'}`}>
                <Links />
            </div>
        </div>
    );
};

export default BurgerMenu;
