import { configureStore } from "@reduxjs/toolkit"; // создаем хранилище
import { counterReducer } from "./counterSlice";

export const store = configureStore({
    
    
  reducer: {
    counter: counterReducer,
  },
});
console.log(store);
