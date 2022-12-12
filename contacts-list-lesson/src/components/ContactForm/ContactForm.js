import React, { Component } from 'react';

export class ContactForm extends Component {
    state={
        values: {
            name: '',
            surname: '',
            email: '',
        },
    }
    
    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };
    } 
    onFormSubmit=(e)=>{
        e.preventDefault();
       
console.log('save')
    }

    render() {
     

        return  (
            <div className="row">
                <form onSubmit={this.onFormSubmit}>
                    <div className="three columns">
                        <input
                            type="text"
                            name="name"
                            value={this.state.values.name}
                            onChange={this.onInputChange}
                        />
                      
                    </div>
                    <div className="three columns">
                        <input
                            type="text"
                            name="surname"
                            value={this.state.values.surname}
                            onChange={this.onInputChange}
                        />
                   
                    </div>
                    <div className="three columns">
                        <input
                            type="text"
                            name="email"
                            value={this.state.values.email}
                            onChange={this.onInputChange}
                        />
                     
                    </div>
                    <div className="three columns">
                        <button >Save</button>
                    </div>
                </form>
            </div>
        );
        
    }
}

export default ContactForm;