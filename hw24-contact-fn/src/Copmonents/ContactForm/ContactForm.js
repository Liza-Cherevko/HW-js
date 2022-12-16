
import React from 'react'

function ContactForm({ onSave}) {
    function onformSubmit(e) { 
        e.preventDefault();

        onSave({
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
        });
        e.target.reset();
    }
  return (
    <div className="row">
    <form onSubmit={onformSubmit}>
        <div className="three columns">
            <input
                      type="text"
                      className="u-full-width"
                      name='name'
            />
                 
        </div>
        <div className="three columns">
            <input
                type="text"
                      className="u-full-width"
                      name='surname'
            />
        
        </div>
        <div className="three columns">
            <input
                type="text"
                      className="u-full-width"
                      name='email'
            />
      
        </div>
        <div className="three columns">
            <button>Save</button>
        </div>
    </form>
</div>
  )
}

export default ContactForm