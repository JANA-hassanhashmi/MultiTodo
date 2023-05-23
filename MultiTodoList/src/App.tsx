import { useState, useReducer } from 'react'
import './App.css'
import MainButton from './components/MainButton';


type innerToDo = {
  text: string;
  isDone: boolean;
  dueDate: Date;
}

type outerToDo = {
  title: string;
  innerToDoList: innerToDo[];
}

function App() {
  const [count, setCount] = useState(0)

  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);

  return (
    <>
      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baselin justify-center'>
          <MainButton variant='addList'/>
          <MainButton variant='deleteList'/>
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
