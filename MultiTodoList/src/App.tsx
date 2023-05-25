import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton';
import DialogBox from './components/DialogBox';
import { outerToDo } from './model';
import OuterToDo from './components/OuterToDo';






function App() {
  const [count, setCount] = useState(0);

  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddOuterList = () => {
  
    setOuterToDoList(oldValue => [...oldValue, 
      {
        id: Date.now(), 
        title: "Click me to edit title", 
        innerToDoList: [
          {id: 1, isDone: false, text:"test text 1", dueDate: "test Date 1"},
          {id: 2, isDone: false, text:"test text 2", dueDate: "test Date 2"}]
      }]);
  }

   const handleDeleteClicked = () => {
      console.log("delete set to true");
      setIsPopupOpen(true);
   }

   

   const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <> 

      <DialogBox isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup}/>
      
      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baselin justify-center'>
          <MainButton variant='addList' handleClick={handleAddOuterList}/>
          <MainButton variant='deleteList' handleClick={handleDeleteClicked}/>
          
        </div>

      </div>

      {
        (outerToDoList.length === 0) ? (
        <div className='flex items-center justify-center h-80'>
        <span>
        You currently have no lists.
        </span>
        </div>) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {outerToDoList.map( outerToDo =>(
          <OuterToDo 
          outerToDo={outerToDo}/>))}   
  </div>
      )
      };
      
    </>
  )
}

export default App
