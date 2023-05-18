import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex-row sm:flex-col'>
        <h1 className='items-start font-sans text-4xl' >Multi ToDo</h1>
        <div className='space-x-4 text-right items-end'>
          <button className='bg-green-300 p-1'>
            Add New Lists
          </button>
          <button className='bg-rose-500 p-1'>
            Delete All Lists
          </button>
        </div>

      </div>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
