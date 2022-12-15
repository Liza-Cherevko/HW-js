import './ListItem.css'

import React from 'react'

function ListItem({todo,onToggle, onDelete}) {
    
  return (
    <div
    className={'task-item' + (todo.isDone ? ' done' : '')}
    onClick={() => onToggle(todo.id)}
>
    {todo.title}
    <span  onClick={(e)=> {
        e.stopPropagation();
        onDelete(todo.id)
    }} className="delete-btn">x</span>
</div>
  )
}

export default ListItem