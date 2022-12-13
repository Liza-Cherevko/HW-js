import React, { Component } from 'react';

import ListItem from '../ListItem/ListItem';

// import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    return (
     <ul>
               {this.props.todo.map((item)=>{
                return <ListItem
                key={item.id}
                todo={item}
                onToggle={this.props.onToggle}
                onDelete={this.props.onDelete}
                />
               })}
     </ul>
    )
  }
}

export default List