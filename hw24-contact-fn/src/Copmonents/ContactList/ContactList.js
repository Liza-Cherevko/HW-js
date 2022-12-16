
import React from 'react'
import ContactItem from '../ContactItem/ContactItem'

function ContactList({ contacts }){
  return (
    contacts.map((item)=> (
        <ContactItem key={item.id} contact={item}/>
        ))
  )
}

export default ContactList