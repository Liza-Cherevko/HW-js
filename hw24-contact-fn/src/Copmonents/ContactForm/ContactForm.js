
import React from 'react'

function ContactForm() {
    
  return (
    <div className="row">
    <form>
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