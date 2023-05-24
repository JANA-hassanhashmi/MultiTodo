import React from 'react'



export type innerToDo = {
    id: number;
    text: string;
    isDone: boolean;
    dueDate: string;
  }

const InnerToDo: React.FC<innerToDo> = ({id, text, isDone, dueDate}) => {
  return (
    // <div className=''>
    //     <input type='checkbox' />
    //     <span>{text}</span>
    // </div>
    <div className="flex items-center">
    <input type="checkbox" className="mr-2" />
    <span className="text-gray-800">{text}</span>
    </div>
    
  )
}

export default InnerToDo