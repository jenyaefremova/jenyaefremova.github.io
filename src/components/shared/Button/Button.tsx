import React from 'react'

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  size?: "small" | "large";
  variant: "primary" | "secondary";
  href?: string;
  asLink?: boolean;
  download?: boolean;
  fluid?: boolean;
}

export function Button({ className, type, text, size, variant, asLink, href, download, fluid, onClick }: ButtonProps) {

  const btnSize = size === 'large' && 'text-2xl py-3 px-6';
  const btnVariant = variant === 'secondary' ? 'text-lime-700 bg-transparent hover:opacity-70' : 'bg-lime-700 hover:bg-lime-600 hover:border-lime-600 text-white'
  const linkClasses = 'inline-flex items-center justify-center'
  const btnWidth = fluid ? 'w-full sm:w-fit' : 'w-fit';
  const btnClasses = ['py-2 px-4 border rounded border-lime-700', btnSize, btnVariant, btnWidth, asLink && linkClasses, className];

  return (
    asLink ? 
    <a className={btnClasses.join(' ')} href={href} download={download}>{ text }</a> 
    :
    <button type={type} className={btnClasses.join(' ')} onClick={onClick}>{ text }</button>
    )
}