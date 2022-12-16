

import React from 'react'

function ContactItem({ contact}) {
    // const { name, surname, email } = this.props.contacts;
  return (
    <div className="row">
    <div className="three columns">{ contact.name} </div>
    <div className="three columns">{ contact.surname}</div>
    <div className="three columns">{ contact.email}</div>
    <div className="three columns">
        <button>Delete</button>
    </div>
</div>
  )
}

export default ContactItem