import React from 'react'
import { innerToDo } from "./InnerToDo";


export type outerToDo = {
    id: number;
    title: string;
    innerToDoList: innerToDo[];
  }

const OuterToDo: React.FC<outerToDo> = ({id, title, innerToDoList}) => {
  return (
    <div>OuterToDo</div>
  )
}

export default OuterToDo