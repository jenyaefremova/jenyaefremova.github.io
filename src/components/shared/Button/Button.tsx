import React from 'react';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  size?: 'small' | 'large';
  variant: 'primary' | 'secondary';
  href?: string;
  asLink?: boolean;
  download?: boolean;
  fluid?: boolean;
  noPadding?: boolean;
}

export function Button({ className, type, text, size, variant, asLink, href, download, fluid, onClick, noPadding }: ButtonProps) {

  const btnSize = size === 'large' && 'text-2xl py-3 px-12 h-14';
  const btnVariant = variant === 'secondary' ? 'text-lime-700 hover:opacity-70' : 'bg-lime-700 hover:bg-lime-600 hover:border-lime-600 text-white'
  const linkClasses = 'inline-flex items-center justify-center'
  const btnWidth = fluid ? 'w-full sm:w-fit' : 'w-fit';
  const padding = noPadding ? 'p-0' : 'py-2 px-4';
  const btnClasses = ['border rounded border-lime-700 h-12', btnSize, btnVariant, btnWidth, asLink && linkClasses, padding, className];

  return (
    asLink ? 
      <a className={btnClasses.join(' ')} href={href} download={download}>{ text }</a> 
      :
      <button type={type} className={btnClasses.join(' ')} onClick={onClick}>{ text }</button>
  )
}
