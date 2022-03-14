import { useState } from 'react'
import './App.css'
import type { Product } from '../type/product'
import ShowInfo from '../components/ShowInfo'

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: "Quan",
    age: 20
  })

  return (
    <div className="App">
        {count}  <button onClick={() => setCount((count) => count + 1)}>Click</button>
        <ShowInfo person={info}/>
    </div>
  )
}

export default App
