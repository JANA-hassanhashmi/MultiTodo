import React from 'react'



export type innerToDo = {
    id: number;
    text: string;
    isDone: boolean;
    dueDate: string;
  }

const InnerToDo: React.FC<innerToDo> = ({id, text, isDone, dueDate}) => {
  return (
    <div>
        <input type='checkbox' />
        <span>{text}</span>
    </div>
    
  )
}

export default InnerToDo