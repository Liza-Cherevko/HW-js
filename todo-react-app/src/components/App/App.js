
import { Component } from 'react';
import './App.css';

class App extends Component{
  state ={
    todos:[]
  }




  render(){
  return(
    <>
<ul>
      <li>todo item 1</li>      
      <li>todo item 2</li>
      <li>todo item 3</li>
    </ul>
    <form>
      <input name='newTodoName'/> 
      <button>Add</button>
    </form>
</>
  )
  }
}

export default App;
