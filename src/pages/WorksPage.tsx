import React from 'react'
import { Works } from '../components/Works/Works'
import { works } from '../data/works'
import { contacts } from '../data/contacts'
import { Contacts } from '../components/Contacts'
import { Container } from '../components/shared/Container'

export function WorksPage() {

  return (
    <Container>
      <Works works={works} />
      <Contacts contacts={contacts} />
    </Container>
  )
}
