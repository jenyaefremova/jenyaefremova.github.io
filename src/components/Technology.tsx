import React from 'react'

import { ITechnology } from '../models';
import { getTechnologyIcon } from '../utils/getTechnologyIcon';

interface TechnologyProps {
  technologies: ITechnology[];
  className?: string;
}

export function Technology({ technologies, className }: TechnologyProps) {
  return (
    <ul className={className}>
      { technologies.map(technology => 
        <li className='flex gap-x-2 items-center pb-3' key={technology.title}>
          {getTechnologyIcon(technology.icon)}
          <p>{technology.title}</p>
        </li>) }
    </ul>
  )
}
