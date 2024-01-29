import React from 'react'

import { IWork} from '../../models'
import { SectionHeadline } from '../shared/Typography/SectionHeadline';
import { WorkCard } from './WorkCard';

interface WorksProps {
  works: IWork[];
}

export function Works({ works }: WorksProps) {
  return (
    <section className='py-16 lg:pt-32'>
      <SectionHeadline sectionHeadline='Другие работы' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-12 xl:gap-8 lg:gap-8 pt-16 h-full'>
        { works.map(work => 
        <WorkCard work={work} />) }
      </div>
    </section>
  )
}