import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './slices/counterSlice'

function App() {
 let [count, setCount] = useState(0)
 const data = useSelector((state) => state)
 console.log(data);
 const dispatch = useDispatch()

 let handleIncrement = () => {
  count += 5
  setCount(count)
  dispatch(increment(count))
  
 }
 let handleDecrement = () => {
  count -= 5
  setCount(count)
  dispatch(decrement(count))
 }

  return (
    <>
     <button onClick={handleIncrement}>Increment</button>
     <h1>{count}</h1>
     <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
