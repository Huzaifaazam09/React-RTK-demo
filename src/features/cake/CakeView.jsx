import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
   const numOfCakes = useSelector((state) => state.cake.numOfCakes ) /* This line/Hook is used for accessing state from REDUX STORE via cake KEYWORD for utilising cakeReducer*/
   const dispatch = useDispatch() /* This line/Hook is used for dispatching actions from REDUX STORE via ordered/restocked ACTION CREATORS */
  return (
    <div>
        <h2> Number of Cakes : {numOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}
