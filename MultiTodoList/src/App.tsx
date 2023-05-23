import { useState, useReducer } from 'react'
import './App.css'
import MainButton from './components/MainButton';
import Modal from 'react-modal';

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

  const handleAdd = () => {
    const blankTodo: outerToDo = {
      title: "Click me to edit title",
      innerToDoList:[]
    };

    outerToDoList.push(blankTodo)
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

    <div className=''>
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={handleClosePopup}
        className="modal"
        shouldCloseOnOverlayClick={false}
      >
        <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur backdrop-opacity-70 flex-col">
          <h2 className="text-2xl mb-4">Delete All Lists</h2>
          <p className="text-gray-800">Are you sure you want to delete all lists? This action is irreversible.</p>
          <div className="mt-4 space-x-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete All Lists
            </button>
            <button
              onClick={handleClosePopup}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
      
      

      <div className='flex flex-col md:justify-between md:flex-row'>
        <h1 className='font-sans text-3xl font-semibold text-slate-900' >Multi ToDo</h1>
        <div className='space-x-2 text-white inline-flex items-baselin justify-center'>
          <MainButton variant='addList' handleClick={handleAdd}/>
          <MainButton variant='deleteList' handleClick={handleDeleteClicked}/>
          
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
