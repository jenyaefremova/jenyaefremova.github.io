import React from 'react';
import { IPerson, ITechnology } from '../models';
import { Button } from './shared/Button/Button';
import { Technology } from './Technology/Technology';
import { useGoToSection } from '../hooks/useGoToSection';

interface PersonProps {
  person: IPerson;
  technologies: ITechnology[];
}

export function Hero({ person, technologies }: PersonProps) {
  const { goToSection } = useGoToSection('contacts');

  return (
    <section className='flex flex-col lg:flex-row justify-between items-start xl:items-center gap-x-10 xl:gap-x-20 pb-16 lg:pb-0'>
      <img src={person.image} alt='Jenny' className='w-full lg:w-1/2' />
      <div className='w-full lg:w-1/2 pt-5 xl:py-0'>
        {person.subtitle && <h4>{person.subtitle}</h4>}
        <h1 className='font-medium text-2xl xl:text-4xl'>{person.title}</h1>
        <p className='py-5'>{person.description}</p>
        <Button variant='primary' fluid onClick={goToSection} text={person.button.text} />
        {person.additionalButton && (
          <Button
            asLink
            href={person.additionalButton.link}
            download
            fluid
            variant='secondary'
            className='mt-4 sm:mt-0 sm:ml-4'
            text={person.additionalButton.text}
          />
        )}
        <Technology technologies={technologies} className='pt-5 mt-6 border-t sm:columns-2' />
      </div>
    </section>
  );
}
