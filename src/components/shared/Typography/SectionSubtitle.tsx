import React from 'react'

interface SectionSubtitleProps {
    sectionSubtitle: string;
    className?: string;
}

export function SectionSubtitle({ sectionSubtitle, className }: SectionSubtitleProps) {
  const subtitleClasses = ['text-xl py-2 font-bold', className];

  return (
    <h4 className={subtitleClasses.join(' ')}>{ sectionSubtitle }</h4>
  )
}