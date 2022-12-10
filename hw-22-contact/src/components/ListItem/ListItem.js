import  './ListItem.css'
import React, { Component } from 'react';

export class ListItem extends Component {

    onDeleteClick=(e)=>{
        console.log(this.props.contacts.id)
        e.stopPropagation();
        this.props.onDelete(this.props.contacts.id);
    }
    render() {
        // return 
        // <tr>
        //         <td> {this.props.contacts.name}</td>
        //         <td>{this.props.contacts.surname}</td>
        //         <td>{this.props.contacts.phone}</td>
        //         <td>
                    
        //             <button onClick={this.onDeleteClick} >Delete</button>
        //         </td>
        //      </tr>
           return  <div className='wrap'>
                 <div className='item'> {this.props.contacts.name}</div>
                 <div className='item'> {this.props.contacts.surname}</div>
                 <div className='item'> {this.props.contacts.phone}</div>
                 <button className='item' onClick={this.onDeleteClick} >Delete</button>
           </div>
 
        
    }
}
export default ListItem;