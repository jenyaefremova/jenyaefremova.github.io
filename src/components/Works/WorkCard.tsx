import React from 'react'

import { IWork } from '../../models'
import { SectionSubtitle } from '../shared/Typography/SectionSubtitle';

interface WorkCardProps {
  work: IWork;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <a href={work.link} target='_blank' rel="noreferrer" className='hover:scale-105 duration-300 h-full'>
      <div className='flex flex-col justify-start pb-6 shadow-md border-2 border-grey-500/100 h-full rounded' key={work.id}>
        <img src={work.image} className="w-full flex-auto object-fill" alt={work.title} />
        <SectionSubtitle sectionSubtitle={work.title} className='pt-4 px-4' />
        <p className='text-lg pb-2 px-4'>{ work.description }</p>
      </div>
    </a>
    
  )
}