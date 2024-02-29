import React from 'react'

import {IContacts} from '../models'
import { SectionHeadline } from './shared/Typography/SectionHeadline';
import { Button } from './shared/Button/Button';
import IconCheck from './shared/Icons/IconCheck';

interface ContactsProps {
    contacts: IContacts;
    className?: string;
}

export function Contacts({ contacts, className }: ContactsProps) {

  const contactsClasses = ['flex flex-col lg:flex-row justify-between items-top gap-x-10 xl:gap-x-20 pb-16 lg:pt-16', className]
  return (   
    <section className={contactsClasses.join(' ')} id='contacts'>   
      <div className='flex flex-col justify-between pt-5 lg:pt-0 xl:py-0 lg:gap-3'>
        <div>
          <SectionHeadline sectionHeadline={contacts.title} className="w-fit" />
          {contacts.description && (<p className='pt-6'>{ contacts.description }</p>)}
        </div>
          
        <ul className='w-fit'>
          { contacts.contact.map(contact => 
            <li key={contact.id}>
              <a href={contact.link} className='flex flex-row items-center lg:flex-row pt-1 hover:underline'>
                <IconCheck />
                <h4 className='py-2 ml-2'>{ contact.title }</h4>
              </a>
            </li>
          ) }
        </ul>
        <Button 
          asLink
          href='https://drive.google.com/file/d/1oXvlJGxA2A52iLuTqUjQYBQTdj1QMfW8/view' 
          download
          fluid
          variant='primary' 
          text='Скачать резюме' 
          size='large' 
          className='mt-6'
        />
      </div>
    </section>
  )
}
