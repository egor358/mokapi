import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const toDosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {             //(state = initialState, action) => { ... }
        console.log(action);
        console.log(action.payload);
        
        
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
     
      
    },
    toggleTodo: (state,action) => {
const todo = state.todos.find(t => t.id === action.payload);
  if (todo) {
    todo.completed = !todo.completed;
  }
    },
    deleteTodo: (state,action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});
export const toDosReducer = toDosSlice.reducer;
export const { addToDo, toggleTodo, deleteTodo } = toDosSlice.actions;

// const addToDo = () => {
//   //   if (text.trim()) {

//   //     setToDos([
//   //       ...toDos,
//   //       {
//   //         id: Date.now(),
//   //         text,
//   //         completed: false,
//   //       },
//   //     ]);
//   //     setText("");
//   //   }
//   // };
