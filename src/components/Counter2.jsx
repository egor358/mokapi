import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment, selectCount } from '../state/counterSlice'


export const Counter2 = () => {
 const count = useSelector(selectCount)
   return (
     <div>
          <h1>Счетчик:{count}</h1>
     </div>
   )
}
