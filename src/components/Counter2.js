import { useState } from "react"


export default function Counter2() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter2 is {count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}