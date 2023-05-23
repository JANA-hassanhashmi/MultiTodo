import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton';
import DialogBox from './components/DialogBox';
import OutderToDo from './components/OutderToDo';


type innerToDo = {
  id: number;
  text: string;
  isDone: boolean;
  dueDate: Date;
}

type outerToDo = {
  id: number;
  title: string;
  innerToDoList: innerToDo[];
}

function App() {
  const [count, setCount] = useState(0)

  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);

  const handleAdd = () => {
    const blankTodo: outerToDo = {
      id: Date.now(),
      title: "Click me to edit title",
      innerToDoList:[]
    };
    
    setOuterToDoList(oldValue => ([...oldValue, blankTodo]))
    console.log(outerToDoList)
  }

   const handleDeleteClicked = () => {
      console.log("delete set to true");
      setIsPopupOpen(true);
   }

   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <> 

      <DialogBox isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup}/>
      
      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baselin justify-center'>
          <MainButton variant='addList' handleClick={handleAdd}/>
          <MainButton variant='deleteList' handleClick={handleDeleteClicked}/>
          
        </div>

      </div>

      {
        (outerToDoList.length === 0) ? (
        <div className='flex items-center justify-center h-80'>
        <span onClick={() => setCount((count) => count + 1)}>
        You currently have no lists. Click Count: {count}
        </span>
        </div>) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {outerToDoList.map( outerToDo =>(<OutderToDo />))}
          
        </div>
      )
      };
      
    </>
  )
}

export default App
