
import React, { Component } from 'react';

export class ListItem extends Component {
   
    render() {
        return (
     
                <tr>
                <td> {this.props.contacts.name}</td>
                <td>{this.props.contacts.surname}</td>
                <td>{this.props.contacts.email}</td>
                <td>
                    <button >Edit</button>
                    <button >Delete</button>
                </td>
                </tr>
           
        );
    }
}
export default ListItem;