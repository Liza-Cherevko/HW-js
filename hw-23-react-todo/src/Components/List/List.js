import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

// import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    return (
      <div >
             <ul className='lists'>
               {this.props.todo.map((item)=>{
                return <ListItem
                key={item.id}
                todo={item}
                onToggle={this.props.onToggle}
                onDelete={this.props.onDelete}
                />
               })}
     </ul>
</div>
    )
  }
}

export default List