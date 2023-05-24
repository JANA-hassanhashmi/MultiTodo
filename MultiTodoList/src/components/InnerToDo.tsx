import React from 'react'



export type innerToDo = {
    id: number;
    text: string;
    isDone: boolean;
    dueDate: Date;
  }

const InnerToDo: React.FC<innerToDo> = () => {
  return (
    <div>InnerToDo</div>
  )
}

export default InnerToDo