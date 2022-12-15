import React from 'react'

function Form({ onSave }) {

    
    function onFormSubmit(e) {
        e.preventDefault();

        onSave({
            title: e.target.title.value,
        });

        e.target.reset();
    }

  return (
    <form onSubmit={onFormSubmit}>
    <div className="row">
        <div className="ten columns">
            <input
                type="text"
                className="u-full-width"
            />
        </div>
        <div className="two columns">
            <input type="submit" value="Add" />
        </div>
    </div>
</form>
  )
}

export default Form