import React, { Component } from 'react';

import { deleteTodos, createTodos, getTodos, updateTodos } from '../../services/usersService';
import Form from '../Form/Form';
import List from '../List/List';
import './App.css';



export class App extends Component {
  state ={
    todo:[]
  }




  toggleTodo = (id) => {
    const todos = this.state.todo.find((item)=> item.id === id)
    updateTodos({...todos, isDone: !todos.isDone}).then(() => { 
    this.setState({
      todo: this.state.todo.map((item)=>
      item.id!==id
      ? item
      :{
        ...item,
        isDone: !item.isDone
      })
    })
  })
}
deleteTodo=(id)=>{
  deleteTodos(id).then(()=>{
    this.setState({
      todo: this.state.todo.filter((item)=> item.id !==id),
    })
  })
  }
  

SaveTodo = (newTodo) => {
  createTodos(newTodo).then(() => { 
    this.setState({
      todo: [
          ...this.state.todo,
          {
              ...newTodo,
              id: Date.now(),
              isDone: false,
          },
      ],
  })
  })
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
  componentDidMount() {
    getTodos().then((data) =>
        this.setState({
          todo: data,
        })
    );
}
}

export default App