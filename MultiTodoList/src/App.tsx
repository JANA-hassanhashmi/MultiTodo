import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton';
import DialogBox from './components/DialogBox';
import { outerToDo } from './model';
import Card from '@mui/material/Card';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import OuterToDo from './components/OuterToDo';
import OuterToDoDisplay from './components/OuterToDoDisplay';







function App() {
  const [count, setCount] = useState(0);

  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddOuterList = () => {
  
    setOuterToDoList(oldValue => [...oldValue, 
      {
        id: Date.now(), 
        title: "Click me to edit title", 
        innerToDoList: []
      }]);
  }

   const handleDeleteClicked = () => {
      setIsPopupOpen(true);
   }

   

   const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDeleteAllLists = () => {
    setOuterToDoList([])
    handleClosePopup();
  }




  return (
    <> 

      <DialogBox isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup} handleDeleteAllLists={handleDeleteAllLists}/>
      
      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baselin justify-center'>
          <MainButton variant='addList' handleClick={handleAddOuterList}/>
          {(outerToDoList.length === 0) ? (
            <MainButton variant='deleteListNoList' handleClick={handleDeleteClicked}/>
          ) : (
            <MainButton variant='deleteList' handleClick={handleDeleteClicked}/>
          )}
          
          
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
              <OuterToDoDisplay outerToDo={outerToDo}/>
            ))}   
        </div>
        )
      }
      
    </>
  )
}

export default App
