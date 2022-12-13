// import React, { Component } from 'react'

// export class Form extends Component {
//   render() {

// onFormSubmit=(e)=>{
//   e.preventDefault();

//   this.props.onSave({
//     title: e.target.elements.newTodoName.value,
//   })
// }

//     return (
// <form onSubmit={this.onFormSubmit}>
// <div class='row'>
//         <div >
//             <input
//                 type='text'
//                 name='NewTodo'
//             />
//         </div>
//      <button > Save</button>
//     </div>
// </form>
//     )
//   }
// }

// export default Form

import React, {Component} from "react";

export default class Form extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: e.target.elements.newTodoName.value,
        });

        e.target.reset();
    };
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="newTodoName" />
                <button>Save</button>
            </form>
        );
    }
}