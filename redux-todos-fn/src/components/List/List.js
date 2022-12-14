import './List.css'

import ListItem from '../ListItem/ListItem'
import React from 'react'
import { selectList } from '../../store/selectors/todo'
import {useSelector} from 'react-redux'

function List() {
  const todo = useSelector(selectList)
  return (
    <div  className="task-list u-full-width">
      {todo.map((item)=>(
        <ListItem key={item.id} todo={item} />
      ))}
    </div>
  )
}

export default List