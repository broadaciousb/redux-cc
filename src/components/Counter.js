import { useState } from "react"
import Counter2 from "./Counter2";
import { useSelector } from "react-redux";


export default function Counter() {


  const count = useSelector(state => {
    console.log(state)
    return state.counter
  })
  
  return (
    <div>
      <h1>Count is {count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}