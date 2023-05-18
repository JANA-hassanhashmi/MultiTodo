import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baseline'>
          <div className='bg-green-500 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-green-600'>
          <FaPlus className='scale-110'/>
          <span className=''>Add New Lists</span>
          </div>

          <div className='bg-rose-300 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-rose-500'>
          <MdDelete className='scale-125'/>
          <span className=''>Delete All Lists</span>
          </div>
        </div>

      </div>
      <div className='flex items-center justify-center h-80'>
        <span onClick={() => setCount((count) => count + 1)}>
        You currently have no lists. Click Count: {count}
        </span>
      </div>
    </>
  )
}

export default App
