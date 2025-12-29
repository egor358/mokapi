import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ toDos, toDoDelete, toggleCompleted }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          {...toDo}
          toDoDelete={toDoDelete}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
};
