import './ListItem.css'

import React, { Component } from 'react';

export class ListItem extends Component {
  onItemClick = () => {
    this.props.onToggle(this.props.todo.id);
};

onDeleteClick=(e)=>{
  e.stopPropagation();
  this.props.onDelete(this.props.todo.id)
}

  render() {
    return (
        <li
        className={'item '+ (this.props.todo.isDone ? 'done' : '')}
        onClick={this.onItemClick}
       >
        <div className='item-inner'>
        {this.props.todo.title}
        <button className='delete-btn'  onClick={this.onDeleteClick}>Delete</button>
       </div>
    </li>
    )
  }
}

export default ListItem