import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter", //имя среза(слайса)
  initialState,
  reducers: {
    incriment: (state,action) => {
     console.log(action);
     
   state.count += action.payload ?? 1;
    },
    decriment: (state,action) => {
     state.count -= action.payload ?? 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { incriment, decriment } = counterSlice.actions;
export const selectCount = (state)=> state.counter.count 