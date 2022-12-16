
import React from 'react'

function ContactForm({ onSave}) {
    function onformSubmit(e) { 
        e.preventDefault();

        onSave({
            title: e.target.title.value,
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
            />
                 
        </div>
        <div className="three columns">
            <input
                type="text"
                className="u-full-width"
            />
        
        </div>
        <div className="three columns">
            <input
                type="text"
                className="u-full-width"
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