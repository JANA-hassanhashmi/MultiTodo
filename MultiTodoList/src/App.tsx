import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton';
import DialogBox from './components/DialogBox';
import  OuterDisplay  from "./components/OuterDisplay";
import { outerToDo } from './components/OuterToDo';
import { innerToDo } from './components/InnerToDo';





function App() {
  const [count, setCount] = useState(0);

  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);
  const [outerToDo, setOuterToDo] = useState<outerToDo>({id: 1, title:"garbage title", innerToDoList:[]});

 
  const [innerToDo, setInnerToDo] = useState<innerToDo>({id: 0, isDone: false, text:"initial dummy text", dueDate: "test Date"});

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAdd = () => {

    const testOuter: outerToDo = {
      id: Date.now(), 
      title: "Click me to edit title", 
      innerToDoList: [
        {id: 1, isDone: false, text:"test text 1", dueDate: "test Date 1"},
        {id: 2, isDone: false, text:"test text 2", dueDate: "test Date 2"}]
    };

    setOuterToDoList(oldValue => ([...oldValue, testOuter]))
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
        <OuterDisplay outerToDoList={outerToDoList}/>
      )
      };
      
    </>
  )
}

export default App
