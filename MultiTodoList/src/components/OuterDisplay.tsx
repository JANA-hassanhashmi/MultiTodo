import React from 'react'
import { outerToDo } from './OuterToDo'
import  OuterToDo  from "./OuterToDo";

interface Props {
    outerToDoList: outerToDo[]
}

const OuterDisplay: React.FC<Props> = ({outerToDoList}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {outerToDoList.map( outerToDo =>(
          <OuterToDo 
          id={outerToDo.id} 
          title={outerToDo.title} 
          innerToDoList={outerToDo.innerToDoList}/>))}   
    </div>
  )
}

export default OuterDisplay