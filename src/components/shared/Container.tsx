import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  const containerClassName = ['container mx-auto px-5 sm:px-10 pt-24 sm:pt-32 pb-20', className];
  return (
    <div className={containerClassName.join(' ')} >
      {children}
    </div>
  );
}
