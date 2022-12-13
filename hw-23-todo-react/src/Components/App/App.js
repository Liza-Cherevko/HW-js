import React, { Component } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

// import { createTodo, deleteTodos, deleteUser } from '../../services/usersService';


export class App extends Component {
  state ={
    todo:[{"title":"cleverly yuck turquoise","isDone":true,"id":"1"},{"title":"facilitate the DRAM","isDone":false,"id":"3"},{"title":"copy Granite indexing","isDone":false,"id":"4"},{"title":"JBOD Account transmitting","isDone":false,"id":"5"},{"title":"Credit","isDone":false,"id":"6"},{"title":"synergies Strategist Porsche","isDone":false,"id":"7"},{"title":"Handmade azure Southeast","isDone":false,"id":"8"},{"title":"fuchsia Hybrid","isDone":false,"id":"9"},{"title":"digital","isDone":true,"id":"10"},{"title":"deposit","isDone":false,"id":"11"},{"title":"blah","isDone":false,"id":"12"},{"title":"Cab","isDone":false,"id":"13"},{"title":"Blaine radian","isDone":false,"id":"14"},{"title":"Senior","isDone":false,"id":"15"},{"title":"Nampa Table UDP","isDone":false,"id":"16"},{"title":"Dynamic strength","isDone":false,"id":"17"},{"title":"Steel Southeast","isDone":false,"id":"18"},{"title":"Naira","isDone":false,"id":"19"},{"title":"Rustic Radium Balanced","isDone":false,"id":"20"},{"title":"Mountain Architect","isDone":false,"id":"21"},{"title":"Bentley","isDone":false,"id":"22"},{"title":"boldly Strategist coarsen","isDone":false,"id":"23"},{"title":"sheer","isDone":false,"id":"24"},{"title":"hybrid dignissimos reprehenderit","isDone":false,"id":"25"},{"title":"yowza","isDone":false,"id":"26"}]
  }




toggleTodo=(id)=>{
  this.setState({
    todo: this.state.todo.map((item)=>
    item.id!==id
    ? item
    :{
      ...item,
      isDone: !item.isDone
    })
  })
}
deleteTodo=(id)=>{
  this.setState({
    todo: this.state.todo.filter((item) => item.id !== id),
  })
}
SaveTodo = (newTodo) => {
  this.setState({
      todo: [
          ...this.state.todo,
          {
              ...newTodo,
              id: Date.now(),
              isDone: false,
          },
      ],
  });
};



  render() {
    return (
      <div className='container'>
        <List
        todo = {this.state.todo}
        onToggle={this.toggleTodo}
        onDelete={this.deleteTodo}
        />
        <Form
        onSave={this.SaveTodo}
        />
      </div>
    )
  }
}

export default App