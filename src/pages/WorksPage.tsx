import React from 'react'
import { Works } from '../components/Works/Works'
import { works } from '../data/works'
import { contacts } from '../data/contacts'
import { Contacts } from '../components/Contacts'

export function WorksPage() {

  return (
    <div className="container mx-auto px-5 pb-20">
      <Works works={works} />
      <Contacts contacts={contacts} />
    </div>
  )
}