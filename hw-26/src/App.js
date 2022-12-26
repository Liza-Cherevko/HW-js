import './App.css';

import TodoForm from './modules/components/TodoForm';
import TodoList from './modules/components/TodoList';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="container">
       <Users/>
    </div>
  );
}

export default App;
