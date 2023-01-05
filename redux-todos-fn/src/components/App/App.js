import './App.css';
import '../../common-css/css/normalize.css';
import '../../common-css/css/skeleton.css';
import '../../common-css/css/dark-theme.css';
// import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
//   const [list, setList] = useState([
//     { id: 1, title: 'Item 1', isDone: false },
//     { id: 2, title: 'Item 2', isDone: true },
//     { id: 3, title: 'Item 3', isDone: true },
//     { id: 4, title: 'Item 4', isDone: false },
    
//   ])
  

// function toggleTodo(id){
//    const todo = list.find((item)=> item.id === id)
//   setList(list.map((item) => (item.id === id ? {...item, isDone: !item.isDone} : item)))
    
//    }


// function deleteTodo(id) {
// setList(  list.filter((item) => item.id !== id))

// }

//   function saveTodo(newTodo) {
//     setList([...list, {
//       id: Date.now(), ...newTodo, isDone: false
//     }])

// }



  return (
    <div className="container">
            <List />
            <Form />
        </div>
  );
}

export default App;
