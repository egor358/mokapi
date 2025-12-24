import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment, selectCount } from '../state/counterSlice'

export const Counter = () => {
  // const count = useSelector((state)=>state.counter.count)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(10)
  return (
    <div>
      <button onClick={()=>dispatch(incriment(parseInt(amount)))}>+</button>
      <button onClick={()=>dispatch(decriment(parseInt(amount)))}>-</button>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <h1>Счетчик:{count}</h1>
    </div>
  )
}

