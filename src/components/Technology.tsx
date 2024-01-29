import React from 'react'

import { ITechnology } from '../models'

interface TechnologyProps {
  technologies: ITechnology[];
  className?: string;
}

export function Technology({ technologies, className }: TechnologyProps) {
  return (
    <ul className={className}>
      { technologies.map(technology => 
      <li className='flex gap-x-2 items-center pb-3' key={technology.title}>
        <img width="24" height="24" src={technology.image} alt={technology.title}/>
        <p>{technology.title}</p>
      </li>) }
    </ul>
  )
}