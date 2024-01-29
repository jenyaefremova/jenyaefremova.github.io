import React from 'react'
import { Hero } from '../components/Hero'
import { person } from '../data/persons'
import { technologies } from '../data/technologies'
import { experience } from '../data/experience'
import { education } from '../data/education'
import { contacts } from '../data/contacts'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Contacts } from '../components/Contacts'

export function AboutPage() {
  return (
    <div className='container mx-auto px-5 pb-20'>
      <Hero person={person} technologies={technologies}/>
      <Experience experience={experience} />
      <Education education={education} />
      <Contacts contacts={contacts}/>
    </div>
  )
}