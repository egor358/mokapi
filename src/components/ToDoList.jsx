import React from "react";
import { ToDoItem } from "./ToDoItem";
import { useSelector } from "react-redux";

export const ToDoList = () => {
  const todos = useSelector((state)=>state.todos.todos)
  return (
    <ul>
      {todos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          {...toDo}
          
        />
      ))}
    </ul>
  );
};
