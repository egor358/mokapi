import { configureStore } from "@reduxjs/toolkit"; // создаем хранилище
import { counterReducer } from "./counterSlice";
import { deleteTodo, toDosReducer, toggleTodo } from "./toDoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,                   
    todos: toDosReducer,                         //2.Store получает объект action  и проверяет:
                                                 //if (action.type === "todos/addToDo") {
                                                  // вызвать соответствующий reducer}
  },
});



// Когда store создаётся:

// export const store = configureStore({
//   reducer: {
//     todos: toDosReducer
//   }
// });


// Store хранит весь state приложения:

// {
//   todos: { todos: [] } // slice name: toDosReducer
// }

