import './Form.css'

import React, {Component} from "react";

export default class Form extends Component {

    state = {
        values: {
            title: '',
        },
        errors: {},
        isDirty: {},
        isValid: false,
    };

    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };

        const errors = this.validate(values);

        this.setState({
            values: values,
            errors: errors,
            isValid: !Object.keys(errors).length,
            isDirty: {
                ...this.state.isDirty,
                [e.target.name]: true,
            },
        });
    }; 

    validate({title}) {
    const errors = {};
    if (title === '') {
        errors.title = 'Title is required';
    }
    return errors;
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSave(this.state.values);

        e.target.reset();
    };

    render() {
        return (
            <form className='form' onSubmit={this.onFormSubmit}>
                <div>
                    <input className='form-inp' name="title" value={this.state.values.title} onChange={this.onInputChange} />
                {this.state.isDirty.title && this.state.errors.title ? (
                            <div className="error">
                                {this.state.errors.title}
                            </div>
                        ) : null}
               </div>
                <button className='form-save-btn' disabled={!this.state.isValid}>Save</button>
            </form>
        );
    }
}