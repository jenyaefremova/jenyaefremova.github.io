import React from 'react'

import {IContacts} from '../models'
import { SectionHeadline } from './shared/Typography/SectionHeadline';
import { Button } from './shared/Button/Button';

interface ContactsProps {
    contacts: IContacts;
}

export function Contacts({ contacts }: ContactsProps) {
  return (   
      <section className='flex flex-col lg:flex-row justify-between items-top gap-x-10 xl:gap-x-20 pb-16 lg:pt-16' id='contacts'>   
        <div className='flex flex-col justify-between pt-5 lg:pt-0 xl:py-0 lg:gap-3'>
          <div>
             <SectionHeadline sectionHeadline={contacts.title} className="w-fit" />
              {contacts.description && (<p className='pt-6'>{ contacts.description }</p>)}
          </div>
          
          <ul className='w-fit'>
          { contacts.contact.map(contact => 
            <li key={contact.id}>
              <a href={contact.link} className='flex flex-row items-center lg:flex-row pt-1 hover:underline'>
                <img src='https://img.icons8.com/ios/50/avocado.png' alt={contact.title} className='w-4 h-4 mr-2 lg:mr-0'/>
                <h4 className='py-2 lg:ml-2'>{ contact.title }</h4>
              </a>
            </li>
            ) }
          </ul>
          <Button 
            asLink 
            href='https://drive.google.com/uc?export=download&id=1SMHjYgxMnrEOqbrm68kd27trSkvq6f1H' 
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