import React from 'react'

import {IExperience} from '../models'
import { SectionHeadline } from './shared/Typography/SectionHeadline';
import { SectionSubtitle } from './shared/Typography/SectionSubtitle';

interface ExperienceProps {
  experience: IExperience;
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className='pb-16 lg:pt-32'>
      <SectionHeadline sectionHeadline={experience.title} />
      { experience.job.map(job => 
        <div className='grid lg:grid-cols-6 items-top lg:w-3/4 lg:gap-x-10 py-6' key={job.id}>
          <aside className='lg:col-span-2'>
            <h4 className='text-lg'>{job.dates}</h4>
            <p className='text-gray-400'>{job.years}</p>
          </aside>
          <div className='lg:col-span-4 lg:pt-0'>
            <SectionSubtitle sectionSubtitle={job.company} className='lg:pt-0' />
            <p className='text-lg pb-2'>{ job.jobTitle }</p>
            <ul className='pt-4'>
              { job.responsibilities.map(item => 
                <li className='pb-4 xl:pb-2 list-disc list-inside' key={item.id}>{ item.text }</li>
              ) }
            </ul>
          </div>
        </div>
      ) }
    </section>
  )
}
