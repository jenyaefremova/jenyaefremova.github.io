import React from 'react'

interface SectionHeadlineProps {
    sectionHeadline: string;
    className?: string;
}

export function SectionHeadline({ sectionHeadline, className }: SectionHeadlineProps) {
  const headlineClasses = ['font-bold text-3xl before:block before:absolute before:-inset-1 before:-inset-b-2 before:-skew-y-3 before:bg-lime-100 relative inline-block', className];
  return (
    <h2 className={headlineClasses.join(' ')}>
      <span className='relative'>{ sectionHeadline }</span>
    </h2>
  )
}
