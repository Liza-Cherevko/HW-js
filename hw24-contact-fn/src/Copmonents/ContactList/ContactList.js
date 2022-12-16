
import React from 'react'
import ContactItem from '../ContactItem/ContactItem'

function ContactList({ contacts, onDelete }){
  return (
    contacts.map((item)=> (
        <ContactItem key={item.id} contact={item} onDelete={onDelete} />
        ))
  )
}

export default ContactList