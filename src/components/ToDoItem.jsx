import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo,deleteTodo } from '../state/toDoSlice'


export const ToDoItem = ({id,text,completed}) => {
  const dispatch = useDispatch()
  return (
    <div>
    <li>
        <input type='checkbox' checked={completed} onChange={()=> dispatch(toggleTodo(id))}/>
        <span className={completed ? "line-through" : ""}>{text}</span>
        <button onClick={()=> dispatch(deleteTodo(id))}>Удалить</button>
    </li>
    </div>
  )
}




