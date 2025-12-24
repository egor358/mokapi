import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decriment, incriment, selectCount } from "../state/counterSlice";

export const Counter1 = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Счетчик:{count}</h1>
      <button onClick={() => dispatch(incriment())}>+</button>
      <button onClick={() => dispatch(decriment())}>-</button>
    </div>
  );
};
