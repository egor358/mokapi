import React from 'react'

export const ToDoItem = ({id,text,completed,toDoDelete,toggleCompleted}) => {
  return (
    <div>
    <li>
        <input type='checkbox' checked={completed} onChange={()=> toggleCompleted(id)}/>
        <span className={completed ? "line-through" : ""}>{text}</span>
        <button onClick={()=> toDoDelete(id)}>Удалить</button>
    </li>
    </div>
  )
}
