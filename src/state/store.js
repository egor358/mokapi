import { configureStore } from "@reduxjs/toolkit"; // создаем хранилище
import { postsReducer } from "./dataSlice";

export const store = configureStore({
  reducer: {
                      
                            //2.Store получает объект action  и проверяет:
    posts: postsReducer                                            //if (action.type === "todos/addToDo") {
                                                  // вызвать соответствующий reducer}
  },
});






// Store хранит весь state приложения:

// {
//   todos: { todos: [] } // slice name: toDosReducer
// }

