
import React, { Component } from 'react';

export class ListItem extends Component {

    onDeleteClick=(e)=>{
        console.log(this.props.contacts.id)
        e.stopPropagation();
        this.props.onDelete(this.props.contacts.id);
    }
    render() {
        return <tr>
                <td> {this.props.contacts.name}</td>
                <td>{this.props.contacts.surname}</td>
                <td>{this.props.contacts.phone}</td>
                <td>
                    
                    <button onClick={this.onDeleteClick} >Delete</button>
                </td>
             </tr>
        //    return  <div>
        //          <li> {this.props.contacts.name}</li>
        //          <li> {this.props.contacts.surname}</li>
        //          <li> {this.props.contacts.phone}</li>
        //          <button onClick={this.onDeleteClick} >Delete</button>
        //    </div>
 
        
    }
}
export default ListItem;