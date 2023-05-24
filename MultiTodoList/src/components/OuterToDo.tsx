import React from 'react'
import InnerToDo, { innerToDo } from "./InnerToDo";


export type outerToDo = {
    id: number;
    title: string;
    innerToDoList: innerToDo[];
  }

const OuterToDo: React.FC<outerToDo> = ({id, title, innerToDoList}) => {
  return (
    <div>
      <span>{title}</span>
      {innerToDoList.map(innerToDo => (
      <InnerToDo 
      id={innerToDo.id} 
      text={innerToDo.text} 
      isDone={innerToDo.isDone}
      dueDate={innerToDo.dueDate} />))}
    </div>
  )
}

export default OuterToDo